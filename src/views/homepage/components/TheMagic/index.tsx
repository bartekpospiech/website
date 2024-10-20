import { Box, Stack } from '@chakra-ui/react';
import { ReactElement } from 'react';

import { MAGIC_ID } from '@consts/paths';

import HeadingWithLogo from '../HeadingWithLogo';
import AnimatedText from '../AnimatedText';
import useCycleStrings from '../AnimatedText/hooks/useCycleStrings';

import WhiteTile, { DescriptionText, TitleText, AnimatedSvg } from './WhiteTile';

const theMagicWords = [
  'waiting for IT to set up a private link',
  'exposing data via reverse proxies',
  'punching holes in firewalls',
  'sending plain text through kafka brokers',
  'asking customers to set up VPNs',
];

const TheMagic = (): ReactElement => {
  const [magicWord] = useCycleStrings(theMagicWords);
  return (
    <Box
      id={MAGIC_ID}
      pt={{ base: '3.75rem', lg: '7.5rem' }}
      px={{ base: '0.75rem' }}
      pb={{ base: '4rem', lg: '9rem' }}
      borderTopLeftRadius={{ base: '1rem' }}
      borderTopRadius={{ base: '1rem' }}
      background="white"
      position="relative"
      top="-1rem"
    >
      <HeadingWithLogo
        title="The Magic"
        description={
          <>
            That means you can stop <br />
            <AnimatedText as="span" color="brand.500" fontWeight={{ base: 700 }}>
              {magicWord}
            </AnimatedText>
          </>
        }
        mb={{ base: '3.5rem', lg: '5rem' }}
        maxW={{ base: '33.1875rem' }}
        mx="auto"
      />
      <Stack
        gap={{ base: '1rem', lg: '2.5rem' }}
        borderRadius={{ base: '0.75rem' }}
        padding={{ base: '1rem', lg: '2.5rem' }}
        background="linear-gradient(142deg, rgba(79, 218, 184, 0.10) 4.44%, rgba(82, 199, 234, 0.10) 94.64%)"
        maxW={{ base: '68.375rem' }}
        mx={{ base: 'auto' }}
        backdropFilter="blur(10px)"
      >
        <WhiteTile flexDirection={{ base: 'column', lg: 'row-reverse' }}>
          <AnimatedSvg src="portals" />
          <Stack flex={1}>
            <TitleText>Portals</TitleText>
            <DescriptionText>
              Portals transport {' '}
              <Box as="span" color="gray.500" fontWeight={700}>
                data-in-motion
              </Box>{' '}
              over end-to-end encrypted Ockam secure channels. They work at the{' '}
              <Box as="span" color="gray.500" fontWeight={700}>
                application layer
              </Box>{' '}
              and abstract away the setup, management, and security of the network layer. When
              application connectivity and security is decoupled from your network, you no longer
              need to wait for your IT team to give you permissions to build trusted connections.
            </DescriptionText>
          </Stack>
        </WhiteTile>

        <WhiteTile flexDirection={{ base: 'column', lg: 'row' }}>
          <AnimatedSvg src="virtual-adjacency" />
          <Stack flex={1}>
            <TitleText>Virtual Adjacency</TitleText>
            <DescriptionText>
              An Ockam Portal does something that feels like magic; It virtually moves your remote application through the Portal so that it&apos;s available on {' '}
              <Box as="span" color="gray.500" fontWeight={700}>
                localhost.
              </Box>{' '} 
              <br />
              <br />
             You won&apos;t have to change your network layer configurations, or even to understand them - at all. 
             <br />
             <br />
              <Box as="span" color="gray.500" fontWeight={700}>
                Ockam is networkless.
              </Box>{' '}
            </DescriptionText>
          </Stack>
        </WhiteTile>
      </Stack>
    </Box>
  );
};

export default TheMagic;
