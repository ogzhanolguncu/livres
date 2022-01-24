import React from 'react';
import Link from 'next/link';
import { Tooltip, Button } from '@chakra-ui/react';
import type { IconType } from 'react-icons';

type Props = {
  icon: IconType;
  ariaLabel: string;
  label?: string;
  to?: string;
  onClick?: () => void;
  authStatus?: boolean;
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
            transition="all 0.5s ease"
          />
        </Tooltip>
      </div>
    </Link>
  ) : null;
};

export default NavItem;
