import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';

import { colors } from '@/src/theme/colors';

export function AppButton({
  title,
  onPress,
  loading,
  variant = 'primary',
}: {
  title: string;
  onPress: () => void;
  loading?: boolean;
  variant?: 'primary' | 'ghost';
}) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        variant === 'ghost' && styles.ghostButton,
        pressed && styles.buttonPressed,
        loading && styles.disabled,
      ]}
      onPress={onPress}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator color={variant === 'ghost' ? colors.primary : '#fff'} />
      ) : (
        <Text style={[styles.text, variant === 'ghost' && styles.ghostText]}>{title}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 14,
    minHeight: 52,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.shadow,
    shadowOpacity: 0.15,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  ghostButton: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    shadowOpacity: 0,
    elevation: 0,
  },
  buttonPressed: { opacity: 0.9 },
  disabled: { opacity: 0.7 },
  text: { color: '#fff', fontWeight: '700', fontSize: 16 },
  ghostText: { color: colors.primary },
});
