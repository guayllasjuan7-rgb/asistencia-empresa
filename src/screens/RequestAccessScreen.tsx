import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, typography, borderRadius } from '../styles/theme';

export default function RequestAccessScreen({ navigation }: any) {
  const [fullName, setFullName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = () => {
    if (!fullName || !idNumber || !phone) {
      Alert.alert('Error', 'Completa todos los campos');
      return;
    }
    Alert.alert('Solicitud enviada', 'Nos comunicaremos contigo pronto');
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Solicitar Acceso</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
          placeholder="Nombres completos"
          placeholderTextColor={colors.text.secondary}
        />
        <TextInput
          style={styles.input}
          value={idNumber}
          onChangeText={setIdNumber}
          placeholder="Número de cédula"
          placeholderTextColor={colors.text.secondary}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="Número de celular"
          placeholderTextColor={colors.text.secondary}
          keyboardType="phone-pad"
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Enviar solicitud</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: spacing.sm,
  },
  form: {
    backgroundColor: colors.surface,
    padding: spacing.lg,
    borderRadius: borderRadius.large,
  },
  input: {
    ...typography.body,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.sm,
    borderRadius: borderRadius.medium,
    marginBottom: spacing.md,
    color: colors.text.primary,
  },
  button: {
    backgroundColor: colors.primary,
    padding: spacing.md,
    borderRadius: borderRadius.medium,
    alignItems: 'center',
  },
  buttonText: {
    ...typography.bodyBold,
    color: colors.text.light,
  },
});
