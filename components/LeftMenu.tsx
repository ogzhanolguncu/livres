import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Flex, VStack, Center, Icon, Box } from '@chakra-ui/react';

import { MENU } from '@constants/menu';
import { motion } from 'framer-motion';

const LeftMenu = () => {
  const router = useRouter();

  return (
    <VStack spacing="20px" ml="50px" mt="3rem">
      {MENU.map((item, index) => {
        const isActiveRoute = router.pathname === item.path;

        return (
          <Link href={item.path} passHref key={index}>
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              <Box as="a">
                <Flex
                  marginRight={isActiveRoute ? '-10px' : '0'}
                  _after={{
                    content: isActiveRoute ? '" •"' : '""',
                    transform: 'scale(1.5)',
                    color: '#5a4dc1',
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    position: 'relative',
                    left: '10px',
                  }}
                >
                  <Center
                    width={['30px', '30px', '60px', '60px']}
                    height={['30px', '30px', '60px', '60px']}
                    backgroundColor={isActiveRoute ? '#5a4dc1' : '#24213f'}
                    borderRadius="50%"
                    padding="0.5em 0.6em"
                    color={isActiveRoute ? '#fff' : '#5a4dc1'}
                    _hover={{
                      backgroundColor: '#5a4dc1',
                      color: '#fff',
                    }}
                  >
                    <Icon as={item.icon} w={[4, 4, 8, 8]} h={[4, 4, 8, 8]} />
                  </Center>
                </Flex>
              </Box>
            </motion.a>
          </Link>
        );
      })}
    </VStack>
  );
};

export default LeftMenu;
