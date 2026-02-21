import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, typography, borderRadius } from '../styles/theme';

export default function EmployeeDetailsScreen() {
  const employee = {
    name: 'Juan Pérez',
    id: 'EMP-00123',
    role: 'Operario',
    email: 'juan.perez@empresa.com',
    phone: '+34 600 000 000',
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Datos del empleado</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Nombre</Text>
        <Text style={styles.value}>{employee.name}</Text>

        <Text style={styles.label}>ID</Text>
        <Text style={styles.value}>{employee.id}</Text>

        <Text style={styles.label}>Cargo</Text>
        <Text style={styles.value}>{employee.role}</Text>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{employee.email}</Text>

        <Text style={styles.label}>Teléfono</Text>
        <Text style={styles.value}>{employee.phone}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: spacing.lg, backgroundColor: colors.background },
  title: { ...typography.h2, color: colors.primary, marginBottom: spacing.lg, textAlign: 'center' },
  card: { backgroundColor: colors.surface, padding: spacing.lg, borderRadius: borderRadius.medium },
  label: { ...typography.small, color: colors.text.secondary, marginTop: spacing.sm },
  value: { ...typography.body, color: colors.text.primary, marginTop: spacing.xs },
});
