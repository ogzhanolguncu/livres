import React from 'react';
import { Button, Center, SlideFade, Tooltip } from '@chakra-ui/react';
import { FaSignInAlt } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { GiBookshelf } from 'react-icons/gi';
import Link from 'next/link';
import NavItem from './NavItem';
import { signOut, useSession } from 'next-auth/react';

const Sidebar = () => {
  const { status } = useSession();
  const loading = status === 'loading';

  return (
    <Center
      w={['15%', '15%', '10%', '7.5%', '6%', '5%']}
      h="100vh"
      pos="sticky"
      top="0"
      left="0"
      borderRight="1px solid white"
      flexDir="column"
      bg="#3d2c8d8c"
    >
      <Link href="/" passHref>
        <div>
          <Tooltip label="Livres" placement="right" fontSize="1.5rem" hasArrow>
            <Button
              pt="1rem"
              borderRadius="0.3rem"
              aria-label="livres"
              width={['40px', '40px', '65px', '65px']}
              height={['40px', '40px', '65px', '65px']}
              _hover={{ background: '#916BBF', color: '#fff' }}
              _focus={{ outline: 'none' }}
              backgroundColor="#916BBF"
              marginTop="0.5rem"
              fontSize={['2rem', '2rem', '3rem', '5rem']}
            >
              Li
            </Button>
          </Tooltip>
        </div>
      </Link>

      <SlideFade in={!loading}>
        <NavItem
          icon={FaSignInAlt}
          ariaLabel="sign-in"
          label="Sign In"
          to="/sign-in"
          authStatus={status === 'unauthenticated'}
        />
      </SlideFade>
      <SlideFade in={!loading}>
        <NavItem
          icon={GiBookshelf}
          ariaLabel="my-books"
          label="My Books"
          to="/my-books"
          authStatus={status === 'authenticated'}
        />
      </SlideFade>
      <SlideFade in={!loading}>
        <NavItem
          icon={FiLogOut}
          ariaLabel="log-out"
          label="Log out"
          to="#"
          onClick={() => signOut({ redirect: true, callbackUrl: '/sign-in' })}
          authStatus={status === 'authenticated'}
        />
      </SlideFade>
    </Center>
  );
};

export default Sidebar;
