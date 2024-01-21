import { FC, FunctionComponent } from 'react';
import { Box, Heading, Link } from '@chakra-ui/react';

import MarketplaceButton from '@root/components/Packaging/MarketplaceButton';
import AwsLogo from '@assets/images/logos/aws.svg';
import AzureLogo from '@assets/images/logos/azure.svg';
import GcpLogo from '@assets/images/logos/gcp.svg';
import { CONTACT_FORM_PATH } from '@root/consts/paths';

const AWS: FC = () => (
  <Link href="https://aws.amazon.com/marketplace/pp/prodview-wsd42efzcpsxk" isExternal>
    <MarketplaceButton
      padding={3}
      mx={2}
      my={4}
      shadow="lg"
      _hover={{ shadow: 'sm', cursor: 'hand' }}
    >
      <AwsLogo style={{ maxWidth: '100%', maxHeight: '100%' }} />
    </MarketplaceButton>
  </Link>
);

const Azure: FC = () => (
  <Link href={`${CONTACT_FORM_PATH}?feature=marketplace&marketplace=azure`} isExternal>
    <MarketplaceButton padding={3} mx={2} my={4} shadow="lg" _hover={{ shadow: 'sm' }}>
      <AzureLogo style={{ maxWidth: '100%', maxHeight: '100%' }} />
    </MarketplaceButton>
  </Link>
);

const GCP: FC = () => (
  <Link href={`${CONTACT_FORM_PATH}?feature=marketplace&marketplace=gcp`} isExternal>
    <MarketplaceButton padding={1} mx={2} my={4} shadow="lg" _hover={{ shadow: 'sm' }}>
      <GcpLogo style={{ maxWidth: '100%', maxHeight: '100%' }} />
    </MarketplaceButton>
  </Link>
);
const Marketplaces: FunctionComponent = () => (
  <Box textAlign="center" mt="10" mb="20">
    <Heading
      as="h4"
      letterSpacing="-1px"
      size="lg"
      style={{ textWrap: 'balance' }}
      mb="4"
      color="#242A31"
    >
      Sign up through your preferred cloud marketplace to unify billing &amp; leverage existing
      commitments
    </Heading>
    <AWS />
    <Azure />
    <GCP />
  </Box>
);
export { AWS, Azure, GCP };
export default Marketplaces;
