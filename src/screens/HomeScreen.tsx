import { useRouter } from 'expo-router';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { AppButton } from '@/src/components/AppButton';
import { InfoCard } from '@/src/components/InfoCard';
import { spacing } from '@/src/constants/spacing';
import { useAuth } from '@/src/store/AuthContext';
import { colors } from '@/src/theme/colors';
import { typography } from '@/src/theme/typography';

const activities = ['Client meeting completed', 'API health check passed', 'New lead assigned', 'Invoice sent successfully'];

export function HomeScreen() {
  const { user, logout } = useAuth();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome, {user?.name}</Text>
      <Text style={styles.subtext}>Here is your dashboard overview.</Text>

      <View style={styles.statsRow}>
        <InfoCard title="Revenue" value="$48.2k" />
        <InfoCard title="New Users" value="1,204" />
      </View>

      <Text style={styles.sectionTitle}>Recent Activity</Text>
      <FlatList
        data={activities}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text style={styles.activityItem}>• {item}</Text>}
        contentContainerStyle={styles.list}
      />

      <AppButton
        title="Logout"
        onPress={() => {
          logout();
          router.replace('/');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: spacing.lg, paddingTop: 60 },
  welcome: { fontSize: typography.heading, fontWeight: '700', color: colors.text },
  subtext: { color: colors.textMuted, marginTop: 4, marginBottom: spacing.lg },
  statsRow: { flexDirection: 'row', gap: spacing.md, marginBottom: spacing.lg },
  sectionTitle: { fontSize: 18, fontWeight: '600', marginBottom: spacing.sm, color: colors.text },
  list: { backgroundColor: colors.surface, borderRadius: 14, borderWidth: 1, borderColor: colors.border, padding: spacing.md, marginBottom: spacing.lg },
  activityItem: { color: colors.text, marginBottom: spacing.sm },
});
