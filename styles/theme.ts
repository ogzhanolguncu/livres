import { extendTheme } from '@chakra-ui/react';

//PRIMARY COLORS
// "900": "#5a4dc1",
// "600": "#6f60ea",
// "300": "#3b3186",
// "100": "#1b1a29",
// "100": "#ffffff",
// "100": "#151421",

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        color: '#fff',
        backgroundColor: '#1b1a29',
      },
    },
  },
  fonts: {
    heading: 'Dongle, sans-serif',
    body: 'Dongle, sans-serif',
  },
});

export default theme;
