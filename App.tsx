import React from 'react';
//import {Button} from './src/components/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Router } from './src/routes/Routes';
import { Toast } from './src/components/Toast/Toast';
import { ToastProvider } from './src/services/toast/Providers/ToastProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthCredentialsProvider } from './src/services/authCredentials/Providers/AuthCredentialsProvider';
import { initializeStorage } from './src/services/storage/storage';
import { MMKVStorage } from './src/services/implementations/MMKVStorage';


// Initializing the storage you can switch 
initializeStorage(MMKVStorage)

const queryClient = new QueryClient()

function App(): React.JSX.Element {

  return (
    <AuthCredentialsProvider>
    <QueryClientProvider client={queryClient}>
    <SafeAreaProvider>
    <ThemeProvider theme={theme}>
   <ToastProvider>
    <Router/>
    <Toast/>
   </ToastProvider>
    
    </ThemeProvider>
    </SafeAreaProvider>
    </QueryClientProvider>
    </AuthCredentialsProvider>
  );
}

export default App;
