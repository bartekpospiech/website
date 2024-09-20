import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import orderBy from 'lodash/orderBy';
import RemarkGFM from 'remark-gfm';
import RehypeSlug from 'rehype-slug';
import RemarkPrism from 'remark-prism';
import RehypeKeywordLinks from '@root/utils/keywordLinks';
import codeHikeTheme from '@code-hike/lighter/themes/solarized-dark.json';
import { remarkCodeHike } from '@code-hike/mdx';
import * as v1 from 'codehike/mdx';

export const POSTS_PATH = path.join(process.cwd(), 'src/content/blog');
export const STYLE_GUIDE_PATH = path.join(process.cwd(), 'src/content/style-guide');
export const RAZOR_PATH = path.join(process.cwd(), 'src/content/the-razor');
export const USECASES_PATH = path.join(process.cwd(), 'src/content/use-cases');

export const styleGuideFilePaths = fs
  .readdirSync(STYLE_GUIDE_PATH)
  .filter((path) => /\.mdx?$/.test(path));

export const generateSlugFromPath = (path) => path.replace(/\.mdx?$/, '');
export const generatePathFromSlug = (slug) => `${slug}.mdx`;

export const pageFilePaths = (folder) => {
  return fs.readdirSync(folder).filter((path) => /\.mdx?$/.test(path));
};
// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = pageFilePaths(POSTS_PATH);

export const getAllPagesForFolder = (folder, noContent) => {
  const filePaths = fs.readdirSync(folder).filter((path) => /\.mdx?$/.test(path));
  const pages = filePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(folder, filePath));
    const { content, data } = matter(source);
    if (noContent) return { data, filePath };
    return {
      content,
      data,
      filePath,
    };
  });
  return orderBy(pages, ['data.date'], ['desc']);
};

export const getAllPosts = (noContent) => {
  return getAllPagesForFolder(POSTS_PATH, noContent);
};

export const getAllRazors = (noContent) => {
  return getAllPagesForFolder(RAZOR_PATH, noContent);
};

export const getAllUseCases = (noContent) => {
  return getAllPagesForFolder(USECASES_PATH, noContent);
};

export const getPageBySlug = async (folder, slug) => {
  /** @type {import('codehike/mdx').CodeHikeConfig} */
  const chConfig = {
    syntaxHighlighting: { theme: 'dracula' },
    components: { code: 'pre' },
    ignoreCode: ({ meta }) => !meta || !meta.startsWith('tour'),
  };

  const codeHikeOptions = {
    theme: 'dracula',
    lineNumbers: true,
    tabSize: 2,
    showCopyButton: true,
    skipLanguages: [],
    autoImport: true,
    staticMediaQuery: 'not screen, (max-width: 768px)',
  };
  const postFilePath = path.join(folder, generatePathFromSlug(slug));
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);
  const scope = {
    chCodeConfig: codeHikeOptions,
    ...data,
  };
  // console.log('plugincontent: ', content)
  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      // remarkPlugins: [[remarkCodeHike, { autoImport: true, theme: 'solarized-dark' }]],
      remarkPlugins: [
        [v1.remarkCodeHike, chConfig],
        [remarkCodeHike, codeHikeOptions],
        RemarkGFM,
        RemarkPrism,
      ],
      recmaPlugins: [[v1.recmaCodeHike, chConfig]],
      rehypePlugins: [RehypeSlug],
      remarkRehypeOptions: { fragment: true },
    },
    chCodeConfig: {},
    scope: scope,
  });

  return {
    source: mdxSource,
    frontMatter: data,
  };
};
export const getPostBySlug = async (slug) => {
  return getPageBySlug(POSTS_PATH, slug);
};

export const getStyleGuideSections = async () => {
  const styleGuideSections = await Promise.all(
    styleGuideFilePaths.map(async (filePath) => {
      const source = fs.readFileSync(path.join(STYLE_GUIDE_PATH, filePath));
      const { content, data } = matter(source);

      const mdxSource = await serialize(content, {
        // Optionally pass remark/rehype plugins
        mdxOptions: {
          remarkPlugins: [RemarkGFM],
          rehypePlugins: [RehypeSlug],
          remarkRehypeOptions: { fragment: true },
        },
        scope: data,
      });
      return {
        source: mdxSource,
        frontMatter: data,
      };
    }),
  );

  return styleGuideSections;
};
