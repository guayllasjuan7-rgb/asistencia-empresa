import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, typography, borderRadius } from '../styles/theme';

export default function ForgotPasswordScreen({ navigation }: any) {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (!email) {
      Alert.alert('Error', 'Ingresa tu correo electrónico');
      return;
    }
    Alert.alert('Enviado', 'Revisa tu correo para restablecer la contraseña');
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Recuperar contraseña</Text>
      <Text style={styles.description}>Introduce tu correo y te enviaremos instrucciones.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="correo@empresa.com"
          placeholderTextColor={colors.text.secondary}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Enviar</Text>
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
  description: {
    ...typography.body,
    color: colors.text.secondary,
    marginBottom: spacing.lg,
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
