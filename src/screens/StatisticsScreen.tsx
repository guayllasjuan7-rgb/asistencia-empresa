import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, typography, borderRadius } from '../styles/theme';

export default function StatisticsScreen() {
  const stats = {
    totalEmployees: 128,
    presentToday: 112,
    absentToday: 16,
    avgHours: 8.1,
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Estadísticas</Text>

      <View style={styles.card}>
        <Text style={styles.stat}>{stats.totalEmployees} empleados</Text>
        <Text style={styles.sub}>Presentes hoy: {stats.presentToday}</Text>
        <Text style={styles.sub}>Ausentes: {stats.absentToday}</Text>
        <Text style={styles.sub}>Horas promedio: {stats.avgHours}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: spacing.lg, backgroundColor: colors.background },
  title: { ...typography.h2, color: colors.primary, marginBottom: spacing.lg, textAlign: 'center' },
  card: { backgroundColor: colors.surface, padding: spacing.lg, borderRadius: borderRadius.medium, alignItems: 'center' },
  stat: { ...typography.h1, color: colors.primary },
  sub: { ...typography.body, color: colors.text.secondary, marginTop: spacing.sm },
});
