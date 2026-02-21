import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, typography, borderRadius } from '../styles/theme';

export default function HomeScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>

      <ScrollView style={styles.menu} contentContainerStyle={styles.menuContainer}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('RegisterAttendance')}>
          <Text style={styles.cardTitle}>Registrar Asistencia</Text>
          <Text style={styles.cardSubtitle}>Marcar entrada / salida</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('AttendanceHistory')}>
          <Text style={styles.cardTitle}>Historial</Text>
          <Text style={styles.cardSubtitle}>Ver histórico de marcas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('EmployeeDetails')}>
          <Text style={styles.cardTitle}>Mi perfil</Text>
          <Text style={styles.cardSubtitle}>Ver datos del empleado</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Vacations')}>
          <Text style={styles.cardTitle}>Vacaciones / Permisos</Text>
          <Text style={styles.cardSubtitle}>Solicitar y ver permisos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Statistics')}>
          <Text style={styles.cardTitle}>Estadísticas</Text>
          <Text style={styles.cardSubtitle}>Panel (admin)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('RequestAccess')}>
          <Text style={styles.cardTitle}>Solicitar Acceso</Text>
          <Text style={styles.cardSubtitle}>Pedir permisos para la app</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
    backgroundColor: colors.background,
  },
  title: {
    ...typography.h2,
    color: colors.primary,
    marginBottom: spacing.lg,
    textAlign: 'center',
  },
  menu: {
    // allow ScrollView to size; keep styling minimal
    flex: 1,
  },
  menuContainer: {
    paddingBottom: spacing.xxl,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.large,
    padding: spacing.lg,
    marginBottom: spacing.md,
    elevation: 3,
  },
  cardTitle: {
    ...typography.h3,
    color: colors.text.primary,
  },
  cardSubtitle: {
    ...typography.body,
    color: colors.text.secondary,
    marginTop: spacing.sm,
  },
});
