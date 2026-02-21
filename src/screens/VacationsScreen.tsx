import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, typography, borderRadius } from '../styles/theme';

export default function VacationsScreen() {
  const request = () => {
    Alert.alert('Solicitud', 'Solicitud de vacaciones enviada (simulada)');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Vacaciones y permisos</Text>

      <View style={styles.card}>
        <Text style={styles.info}>Aquí puedes ver y solicitar permisos y vacaciones.</Text>

        <TouchableOpacity style={styles.button} onPress={request}>
          <Text style={styles.buttonText}>Solicitar vacaciones</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: spacing.lg, backgroundColor: colors.background },
  title: { ...typography.h2, color: colors.primary, marginBottom: spacing.lg, textAlign: 'center' },
  card: { backgroundColor: colors.surface, padding: spacing.lg, borderRadius: borderRadius.medium },
  info: { ...typography.body, color: colors.text.primary, marginBottom: spacing.lg },
  button: { backgroundColor: colors.secondary, padding: spacing.md, borderRadius: borderRadius.medium, alignItems: 'center' },
  buttonText: { ...typography.bodyBold, color: colors.text.light },
});
