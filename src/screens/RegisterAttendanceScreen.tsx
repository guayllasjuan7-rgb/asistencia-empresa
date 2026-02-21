import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, typography, borderRadius } from '../styles/theme';

export default function RegisterAttendanceScreen() {
  const [last, setLast] = useState<string | null>(null);

  const mark = (type: 'Entrada' | 'Salida') => {
    const t = new Date().toLocaleString();
    setLast(`${type} - ${t}`);
    Alert.alert('Registrado', `${type} registrado: ${t}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Registrar asistencia</Text>

      <View style={styles.buttons}>
        <TouchableOpacity style={[styles.btn, styles.btnEntry]} onPress={() => mark('Entrada')}>
          <Text style={styles.btnText}>Registrar Entrada</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn, styles.btnExit]} onPress={() => mark('Salida')}>
          <Text style={styles.btnText}>Registrar Salida</Text>
        </TouchableOpacity>
      </View>

      {last ? <Text style={styles.last}>Último: {last}</Text> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: spacing.lg, backgroundColor: colors.background },
  title: { ...typography.h2, color: colors.primary, marginBottom: spacing.lg, textAlign: 'center' },
  buttons: { flexDirection: 'column' as const },
  btn: { padding: spacing.lg, borderRadius: borderRadius.medium, alignItems: 'center', marginBottom: spacing.md },
  btnEntry: { backgroundColor: colors.status.success },
  btnExit: { backgroundColor: colors.status.error },
  btnText: { ...typography.bodyBold, color: colors.text.light },
  last: { ...typography.small, color: colors.text.secondary, marginTop: spacing.lg, textAlign: 'center' },
});
