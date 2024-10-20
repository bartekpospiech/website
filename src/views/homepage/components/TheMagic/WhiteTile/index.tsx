import { Flex, FlexProps, Text, TextProps } from '@chakra-ui/react';
import { ReactElement, ReactNode } from 'react';

import ExcalidrawAnimation from '@components/ExcalidrawAnimation';

export interface WhiteTileProps extends FlexProps {
  children: ReactNode;
}
const WhiteTile = ({ children, ...flexProps }: WhiteTileProps): ReactElement => (
  <Flex
    textAlign={{ base: 'justify', lg: 'left' }}
    borderRadius={{ base: '0.75rem' }}
    borderWidth="1px"
    borderColor="gray.200"
    background="white"
    gap={{ base: '1rem', lg: '4rem' }}
    padding={{ base: '0.75rem', lg: '1.5rem' }}
    {...flexProps}
  >
    {children}
  </Flex>
);

export const TitleText = ({ children }: TextProps): ReactElement => (
  <Text
    color="gray.700"
    fontFamily="neutraface"
    fontSize={{ base: '1.5rem', lg: '2.5rem' }}
    fontWeight={{ base: 700 }}
  >
    {children}
  </Text>
);

export const DescriptionText = ({ children }: TextProps): ReactElement => (
  <Text color="brand.800" fontSize={{ base: '1rem' }} fontWeight={{ base: 400 }}>
    {children}
  </Text>
);

interface ExcalidrawAnimationProps {
  src: string;
}
export const AnimatedSvg = ({ src }: ExcalidrawAnimationProps): ReactElement => (
  <ExcalidrawAnimation
    src={src}
    animate
    aspect="width"
    flex={1}
    mx="auto"
    maxWidth={{ base: '35rem', lg: 'initial' }}
    width={{ base: '100%', lg: '50%' }}
  />
);

export default WhiteTile;
