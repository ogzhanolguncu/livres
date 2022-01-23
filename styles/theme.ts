import { extendTheme } from '@chakra-ui/react';

//COLOR PALETTE
// "900": "#1C0C5B",
// "600": "#3D2C8D",
// "300": "#916BBF",
// "100": "#C996CC",

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        color: '#fff',
        backgroundColor: '#1C0C5B',
      },
    },
  },
  fonts: {
    heading: 'Dongle, sans-serif',
    body: 'Dongle, sans-serif',
  },
});

export default theme;
