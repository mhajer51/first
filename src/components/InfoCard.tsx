import { StyleSheet, Text, View } from 'react-native';

import { spacing } from '@/src/constants/spacing';
import { colors } from '@/src/theme/colors';

export function InfoCard({ title, value }: { title: string; value: string }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
      <View style={styles.pulse} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: colors.shadow,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  title: { color: colors.textMuted, marginBottom: 8, fontSize: 13 },
  value: { color: colors.text, fontWeight: '800', fontSize: 24 },
  pulse: {
    marginTop: spacing.sm,
    width: 44,
    height: 6,
    borderRadius: 999,
    backgroundColor: colors.accent,
    opacity: 0.25,
  },
});
