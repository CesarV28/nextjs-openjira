import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { ligthTheme, darkTheme } from '@/themes';


import { UIProvider } from '@/context/ui';
import { EntriesProvider } from '@/context/entries';

import '@/styles/globals.css';


export default function App({ Component, pageProps }: AppProps) {
  return (
    
      <UIProvider>
        <EntriesProvider>
          <ThemeProvider theme={ darkTheme }>
            <CssBaseline/>
            <Component {...pageProps} />
          </ThemeProvider>
        </EntriesProvider>
      </UIProvider>
  
  )
}
