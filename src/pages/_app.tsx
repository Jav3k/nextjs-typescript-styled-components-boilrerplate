/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/dist/next-server/lib/router/router';
import type { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
