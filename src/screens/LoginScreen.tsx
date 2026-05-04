import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { AppButton } from '@/src/components/AppButton';
import { AppInput } from '@/src/components/AppInput';
import { spacing } from '@/src/constants/spacing';
import { useLoginForm } from '@/src/hooks/useLoginForm';
import { useAuth } from '@/src/store/AuthContext';
import { colors } from '@/src/theme/colors';
import { typography } from '@/src/theme/typography';

export function LoginScreen() {
  const { values, errors, setField, validate } = useLoginForm();
  const { login, isLoading, authError } = useAuth();
  const router = useRouter();

  const onSubmit = async () => {
    if (!validate()) return;
    try {
      await login(values);
      router.replace('/home');
    } catch {
      // error state is handled in auth context
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back</Text>
      <Text style={styles.subtitle}>Sign in to continue</Text>

      <AppInput
        label="Email"
        placeholder="you@company.com"
        value={values.email}
        onChangeText={(text) => setField('email', text)}
        error={errors.email}
      />
      <AppInput
        label="Password"
        placeholder="Enter password"
        secureTextEntry
        value={values.password}
        onChangeText={(text) => setField('password', text)}
        error={errors.password}
      />

      {authError ? <Text style={styles.serverError}>{authError}</Text> : null}
      <AppButton title="Login" onPress={onSubmit} loading={isLoading} />
      <Text style={styles.hint}>Demo credentials: alex@company.com / Password123</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: spacing.lg, justifyContent: 'center' },
  title: { fontSize: typography.title, fontWeight: '700', color: colors.text, marginBottom: spacing.xs },
  subtitle: { color: colors.textMuted, marginBottom: spacing.xl },
  serverError: { color: colors.error, marginBottom: spacing.md },
  hint: { marginTop: spacing.md, color: colors.textMuted, fontSize: typography.caption },
});
