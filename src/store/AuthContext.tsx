import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

import { authService, AuthUser, LoginPayload } from '@/src/services/authService';

type AuthContextValue = {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  authError: string | null;
  login: (payload: LoginPayload) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  const login = async (payload: LoginPayload) => {
    setIsLoading(true);
    setAuthError(null);

    try {
      const currentUser = await authService.login(payload);
      setUser(currentUser);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Login failed.';
      setAuthError(message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setAuthError(null);
  };

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      isLoading,
      authError,
      login,
      logout,
    }),
    [user, isLoading, authError],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }

  return context;
}
