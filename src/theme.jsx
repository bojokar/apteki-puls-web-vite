import { createContext, useContext, useMemo, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const ColorModeContext = createContext({
  mode: 'light',
  toggleColorMode: () => {},
});

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: mode === 'light' ? '#c51f24' : '#ff6b5e',
      dark: mode === 'light' ? '#8f1218' : '#e33a32',
      contrastText: '#fffaf0',
    },
    secondary: {
      main: mode === 'light' ? '#f4ead8' : '#ffe7bf',
      dark: mode === 'light' ? '#dccdb4' : '#d9b982',
      contrastText: '#3b1111',
    },
    success: {
      main: '#9a1b20',
    },
    background: {
      default: mode === 'light' ? '#fffaf0' : '#180f0d',
      paper: mode === 'light' ? '#fff4e3' : '#241613',
    },
    text: {
      primary: mode === 'light' ? '#2b1713' : '#fff7e8',
      secondary: mode === 'light' ? '#735a51' : '#e7cfc0',
    },
    divider: mode === 'light' ? 'rgba(143, 18, 24, 0.18)' : 'rgba(255, 231, 191, 0.14)',
    action: {
      selected: mode === 'light' ? 'rgba(197, 31, 36, 0.1)' : 'rgba(255, 231, 191, 0.1)',
      hover: mode === 'light' ? 'rgba(197, 31, 36, 0.08)' : 'rgba(255, 231, 191, 0.08)',
    },
  },
  typography: {
    fontFamily:
      'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: 0,
    },
    h2: {
      fontWeight: 800,
      letterSpacing: 0,
    },
    h3: {
      fontWeight: 750,
      letterSpacing: 0,
    },
    button: {
      fontWeight: 700,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

export function ColorModeProvider({ children }) {
  const [mode, setMode] = useState(() => localStorage.getItem('puls-mode') || 'light');

  const value = useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        setMode((current) => {
          const next = current === 'light' ? 'dark' : 'light';
          localStorage.setItem('puls-mode', next);
          return next;
        });
      },
    }),
    [mode],
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export const useColorMode = () => useContext(ColorModeContext);
