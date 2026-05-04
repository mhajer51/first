import { useRouter } from 'expo-router';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { AppButton } from '@/src/components/AppButton';
import { InfoCard } from '@/src/components/InfoCard';
import { spacing } from '@/src/constants/spacing';
import { useAuth } from '@/src/store/AuthContext';
import { colors } from '@/src/theme/colors';
import { typography } from '@/src/theme/typography';

const activities = [
  { id: '1', title: 'Client meeting completed', time: '10:24 AM' },
  { id: '2', title: 'API health check passed', time: '09:48 AM' },
  { id: '3', title: 'New lead assigned', time: 'Yesterday' },
  { id: '4', title: 'Invoice sent successfully', time: 'Yesterday' },
];

export function HomeScreen() {
  const { user, logout } = useAuth();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>Dashboard</Text>
      <Text style={styles.welcome}>Welcome, {user?.name}</Text>
      <Text style={styles.subtext}>Your team performance and operations at a glance.</Text>

      <View style={styles.statsRow}>
        <InfoCard title="Revenue" value="$48.2k" />
        <InfoCard title="New Users" value="1,204" />
      </View>

      <Text style={styles.sectionTitle}>Recent Activity</Text>
      <FlatList
        data={activities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.activityItem}>
            <Text style={styles.activityTitle}>{item.title}</Text>
            <Text style={styles.activityTime}>{item.time}</Text>
          </View>
        )}
        contentContainerStyle={styles.list}
      />

      <AppButton
        title="Logout"
        variant="ghost"
        onPress={() => {
          logout();
          router.replace('/');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: spacing.lg, paddingTop: 64 },
  eyebrow: { color: colors.primary, fontWeight: '700', marginBottom: spacing.xs },
  welcome: { fontSize: typography.heading, fontWeight: '800', color: colors.text },
  subtext: { color: colors.textMuted, marginTop: 6, marginBottom: spacing.lg, lineHeight: 20 },
  statsRow: { flexDirection: 'row', gap: spacing.md, marginBottom: spacing.lg },
  sectionTitle: { fontSize: 18, fontWeight: '700', marginBottom: spacing.sm, color: colors.text },
  list: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.lg,
    gap: spacing.sm,
  },
  activityItem: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10 },
  activityTitle: { color: colors.text, fontWeight: '500' },
  activityTime: { color: colors.textMuted, fontSize: 13 },
});
