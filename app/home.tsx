import { Redirect } from 'expo-router';

import { HomeScreen } from '@/src/screens/HomeScreen';
import { useAuth } from '@/src/store/AuthContext';

export default function HomeRoute() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect href="/" />;
  }

  return <HomeScreen />;
}
