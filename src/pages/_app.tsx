/* istanbul ignore file */
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { ThemeProvider } from 'styled-components';

import { DarkTheme } from 'styles/theme';
import GlobalStyles from 'styles/global';
import NextNProgress from 'nextjs-progressbar';
import RouteProgressBar from 'components/RouteProgressBar';
import { TimerProvider } from 'hooks/useTimer';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pomodoro</title>
        <link rel="shortcut icon" href="/img/favicon.ico" />
        <link rel="apple-touch-icon" href="/img/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <ThemeProvider theme={DarkTheme}>
        <TimerProvider>
          <GlobalStyles />
          <RouteProgressBar />
          <Component {...pageProps} />
        </TimerProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
