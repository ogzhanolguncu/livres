import React from 'react';
import Link from 'next/link';
import { Tooltip, Button } from '@chakra-ui/react';
import type { IconType } from 'react-icons';
import { motion } from 'framer-motion';

type Props = {
  icon: IconType;
  ariaLabel: string;
  label?: string;
  to?: string;
  onClick?: () => void;
  authStatus?: boolean;
};

const container = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
  },
};

const NavItem = ({
  icon: Icon,
  ariaLabel,
  label,
  to,
  onClick,
  authStatus,
}: Props) => {
  return authStatus ? (
    <motion.div variants={container} initial="hidden" animate="show">
      <Link href={to ?? '#'} passHref>
        <div>
          <Tooltip label={label} placement="right" fontSize="1.5rem" hasArrow>
            <Button
              my="1rem"
              aria-label={ariaLabel}
              leftIcon={<Icon />}
              bg="transparent"
              fontSize={['2rem', '2rem', '2.5rem', '3rem']}
              _hover={{ background: 'transparent', color: '#e76bde' }}
              _focus={{ background: 'transparent', outline: 'none' }}
              _active={{ background: 'transparent' }}
              onClick={onClick}
            />
          </Tooltip>
        </div>
      </Link>
    </motion.div>
  ) : null;
};

export default NavItem;
