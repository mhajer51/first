import { Redirect } from 'expo-router';

import { LoginScreen } from '@/src/screens/LoginScreen';
import { useAuth } from '@/src/store/AuthContext';

export default function IndexRoute() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Redirect href="/home" />;
  }

  return <LoginScreen />;
}
