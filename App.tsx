import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import RequestAccessScreen from './src/screens/RequestAccessScreen';
import RegisterAttendanceScreen from './src/screens/RegisterAttendanceScreen';
import AttendanceHistoryScreen from './src/screens/AttendanceHistoryScreen';
import EmployeeDetailsScreen from './src/screens/EmployeeDetailsScreen';
import VacationsScreen from './src/screens/VacationsScreen';
import StatisticsScreen from './src/screens/StatisticsScreen';
import { View, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ title: 'Recuperar contraseña' }} />
          <Stack.Screen name="RequestAccess" component={RequestAccessScreen} options={{ title: 'Solicitar acceso' }} />
          <Stack.Screen name="RegisterAttendance" component={RegisterAttendanceScreen} options={{ title: 'Registrar asistencia' }} />
          <Stack.Screen name="AttendanceHistory" component={AttendanceHistoryScreen} options={{ title: 'Historial' }} />
          <Stack.Screen name="EmployeeDetails" component={EmployeeDetailsScreen} options={{ title: 'Datos del empleado' }} />
          <Stack.Screen name="Vacations" component={VacationsScreen} options={{ title: 'Vacaciones y permisos' }} />
          <Stack.Screen name="Statistics" component={StatisticsScreen} options={{ title: 'Estadísticas' }} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
