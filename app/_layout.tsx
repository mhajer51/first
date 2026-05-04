import { ThemeProvider, DefaultTheme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { AppNavigator } from '@/src/navigation/AppNavigator';
import { AuthProvider } from '@/src/store/AuthContext';

export default function RootLayout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
      <StatusBar style="dark" />
    </ThemeProvider>
  );
}
