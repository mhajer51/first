import { StyleSheet, Text, View } from 'react-native';

import { spacing } from '@/src/constants/spacing';
import { colors } from '@/src/theme/colors';

export function InfoCard({ title, value }: { title: string; value: string }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flex: 1, backgroundColor: colors.surface, padding: spacing.md, borderRadius: 14, borderWidth: 1, borderColor: colors.border },
  title: { color: colors.textMuted, marginBottom: 6 },
  value: { color: colors.text, fontWeight: '700', fontSize: 20 },
});
