import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, typography, borderRadius } from '../styles/theme';

const SAMPLE = [
  { id: '1', date: '2026-02-14 08:05', type: 'Entrada' },
  { id: '2', date: '2026-02-14 17:10', type: 'Salida' },
  { id: '3', date: '2026-02-13 08:02', type: 'Entrada' },
];

export default function AttendanceHistoryScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Historial de asistencias</Text>

      <FlatList
        data={SAMPLE}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemDate}>{item.date}</Text>
            <Text style={styles.itemType}>{item.type}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: spacing.lg, backgroundColor: colors.background },
  title: { ...typography.h2, color: colors.primary, marginBottom: spacing.lg, textAlign: 'center' },
  item: { backgroundColor: colors.surface, padding: spacing.md, borderRadius: borderRadius.medium, marginBottom: spacing.sm },
  itemDate: { ...typography.body, color: colors.text.primary },
  itemType: { ...typography.small, color: colors.text.secondary, marginTop: spacing.xs },
});
