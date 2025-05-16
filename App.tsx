import React from 'react';
//import {Button} from './src/components/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Router } from './src/routes/Routes';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
    <ThemeProvider theme={theme}>
    <Router/>
    </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
