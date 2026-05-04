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
      // handled in context
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.topGlow} />
      <View style={styles.card}>
        <Text style={styles.badge}>Enterprise Portal</Text>
        <Text style={styles.title}>Welcome back</Text>
        <Text style={styles.subtitle}>Sign in to access your workspace dashboard.</Text>

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

        <Text style={styles.hint}>Demo: alex@company.com / Password123</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: 'center', padding: spacing.lg, backgroundColor: colors.background },
  topGlow: {
    position: 'absolute',
    top: -100,
    left: -50,
    width: 260,
    height: 260,
    borderRadius: 160,
    backgroundColor: colors.accent,
    opacity: 0.08,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 24,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: colors.shadow,
    shadowOpacity: 0.08,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    elevation: 4,
  },
  badge: { color: colors.primary, fontWeight: '700', marginBottom: spacing.sm },
  title: { fontSize: typography.title, fontWeight: '800', color: colors.text, marginBottom: spacing.xs },
  subtitle: { color: colors.textMuted, marginBottom: spacing.xl, lineHeight: 20 },
  serverError: { color: colors.error, marginBottom: spacing.md, marginLeft: 4 },
  hint: { marginTop: spacing.md, color: colors.textMuted, fontSize: typography.caption, textAlign: 'center' },
});
