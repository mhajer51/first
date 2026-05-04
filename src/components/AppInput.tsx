import { StyleSheet, Text, TextInput, View } from 'react-native';

import { spacing } from '@/src/constants/spacing';
import { colors } from '@/src/theme/colors';

type AppInputProps = {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  error?: string;
};

export function AppInput({ label, error, ...props }: AppInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={[styles.input, !!error && styles.inputError]} placeholderTextColor={colors.textMuted} {...props} />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: spacing.md },
  label: { color: colors.text, fontWeight: '600', marginBottom: spacing.xs, marginLeft: 4 },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    paddingHorizontal: spacing.md,
    paddingVertical: 14,
    backgroundColor: colors.surface,
    color: colors.text,
  },
  inputError: { borderColor: colors.error },
  error: { color: colors.error, marginTop: 4, marginLeft: 4 },
});
