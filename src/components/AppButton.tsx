import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';

import { colors } from '@/src/theme/colors';

export function AppButton({
  title,
  onPress,
  loading,
}: {
  title: string;
  onPress: () => void;
  loading?: boolean;
}) {
  return (
    <Pressable style={({ pressed }) => [styles.button, pressed && styles.buttonPressed, loading && styles.disabled]} onPress={onPress} disabled={loading}>
      {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.text}>{title}</Text>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { backgroundColor: colors.primary, borderRadius: 12, minHeight: 50, alignItems: 'center', justifyContent: 'center' },
  buttonPressed: { backgroundColor: colors.primaryDark },
  disabled: { opacity: 0.7 },
  text: { color: '#fff', fontWeight: '700', fontSize: 16 },
});
