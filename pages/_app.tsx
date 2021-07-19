import type { AppProps } from 'next/app';
// import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  // const lol = 'rer';
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
