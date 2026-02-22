import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = '@AsistenciaApp:token';
const USER_KEY = '@AsistenciaApp:user';

export const storage = {
  // Token
  saveToken: async (token: string) => {
    try {
      await AsyncStorage.setItem(TOKEN_KEY, token);
    } catch (error) {
      console.error('Error guardando token:', error);
    }
  },
  
  getToken: async () => {
    try {
      return await AsyncStorage.getItem(TOKEN_KEY);
    } catch (error) {
      console.error('Error obteniendo token:', error);
      return null;
    }
  },
  
  removeToken: async () => {
    try {
      await AsyncStorage.removeItem(TOKEN_KEY);
    } catch (error) {
      console.error('Error eliminando token:', error);
    }
  },
  
  // Usuario
  saveUser: async (user: any) => {
    try {
      await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
    } catch (error) {
      console.error('Error guardando usuario:', error);
    }
  },
  
  getUser: async () => {
    try {
      const userStr = await AsyncStorage.getItem(USER_KEY);
      return userStr ? JSON.parse(userStr) : null;
    } catch (error) {
      console.error('Error obteniendo usuario:', error);
      return null;
    }
  },
  
  removeUser: async () => {
    try {
      await AsyncStorage.removeItem(USER_KEY);
    } catch (error) {
      console.error('Error eliminando usuario:', error);
    }
  },
  
  // Limpiar todo (logout)
  clear: async () => {
    try {
      await AsyncStorage.multiRemove([TOKEN_KEY, USER_KEY]);
    } catch (error) {
      console.error('Error limpiando storage:', error);
    }
  }
};