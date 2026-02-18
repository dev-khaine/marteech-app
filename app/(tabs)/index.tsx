import { StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { router } from 'expo-router';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { logout } from '@/store/slices/authSlice';

export default function HomeScreen() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const handleLogout = async () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: async () => {
            await dispatch(logout());
            router.replace('/(auth)/login');
          },
        },
      ]
    );
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Welcome! 👋</ThemedText>
        {user && (
          <ThemedText style={styles.subtitle}>
            {user.name || 'User'}
          </ThemedText>
        )}
      </ThemedView>

      <ThemedView style={styles.content}>
        <ThemedText type="subtitle">🎉 You're logged in!</ThemedText>
        <ThemedText style={styles.description}>
          This is your MarTech Delivery app home screen.
        </ThemedText>
        <ThemedText style={styles.description}>
          We'll build the full dashboard here in the next steps.
        </ThemedText>
      </ThemedView>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <ThemedText style={styles.logoutText}>Logout</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  header: {
    marginTop: 60,
    marginBottom: 32,
  },
  subtitle: {
    fontSize: 18,
    opacity: 0.7,
    marginTop: 8,
  },
  content: {
    flex: 1,
    gap: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
  logoutButton: {
    backgroundColor: '#ef4444',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 'auto',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});