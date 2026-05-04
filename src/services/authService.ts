export type LoginPayload = { email: string; password: string };

export type AuthUser = {
  id: string;
  name: string;
  email: string;
};

const MOCK_USER: AuthUser = {
  id: 'u_001',
  name: 'Alex Johnson',
  email: 'alex@company.com',
};

export const authService = {
  login: async ({ email, password }: LoginPayload): Promise<AuthUser> => {
    await new Promise((resolve) => setTimeout(resolve, 1200));

    if (email.toLowerCase() !== MOCK_USER.email || password !== 'Password123') {
      throw new Error('Invalid credentials. Try alex@company.com / Password123');
    }

    return MOCK_USER;
  },
};
