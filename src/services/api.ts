// ============================================
// API SIMULADA CON DATOS DE EJEMPLO
// ============================================

// URL de prueba (JSONPlaceholder - API falsa para pruebas)
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

// Helper para simular delay de red
const delay = (ms: number) => new Promise(resolve => setTimeout(() => resolve(undefined), ms));

// ==================== AUTH SERVICE ====================

export interface LoginResponse {
  success: boolean;
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
    role: string;
  };
}

export const loginUser = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    // Simular llamada a API
    await delay(1000); // Simular latencia de red
    
    // Validación simulada
    if (!email || !password) {
      throw new Error('Email y contraseña requeridos');
    }
    
    // Simular diferentes respuestas según el email
    if (email.includes('admin')) {
      return {
        success: true,
        token: 'fake-jwt-token-admin-123456',
        user: {
          id: 1,
          name: 'Admin User',
          email: email,
          role: 'admin'
        }
      };
    } else if (email.includes('empleado')) {
      return {
        success: true,
        token: 'fake-jwt-token-employee-123456',
        user: {
          id: 2,
          name: 'Empleado Demo',
          email: email,
          role: 'employee'
        }
      };
    } else {
      // Usuario de prueba por defecto
      return {
        success: true,
        token: 'fake-jwt-token-123456',
        user: {
          id: 3,
          name: 'Juan Pérez',
          email: email,
          role: 'employee'
        }
      };
    }
  } catch (error) {
    console.error('Error en login:', error);
    throw error;
  }
};
// ==================== ASISTENCIA SERVICE ====================

export interface Asistencia {
  id: number;
  fecha: string;
  entrada: string;
  salida: string;
  estado: 'completo' | 'tarde' | 'falta';
}

export const registrarAsistencia = async (token: string, tipo: 'entrada' | 'salida') => {
  try {
    await delay(800);
    
    // Simular respuesta exitosa
    return {
      success: true,
      message: `${tipo} registrada correctamente`,
      registro: {
        id: Math.floor(Math.random() * 1000),
        tipo,
        fecha: new Date().toISOString(),
        hora: new Date().toLocaleTimeString()
      }
    };
  } catch (error) {
    console.error('Error registrando asistencia:', error);
    throw error;
  }
};

export const getHistorial = async (token: string, periodo: 'dia' | 'semana' | 'mes' = 'mes'): Promise<Asistencia[]> => {
  try {
    await delay(600);
    
    // Datos de ejemplo
    const registros: Asistencia[] = [
      { id: 1, fecha: '2026-02-21', entrada: '08:30', salida: '17:30', estado: 'completo' },
      { id: 2, fecha: '2026-02-20', entrada: '08:45', salida: '17:15', estado: 'completo' },
      { id: 3, fecha: '2026-02-19', entrada: '08:15', salida: '17:45', estado: 'completo' },
      { id: 4, fecha: '2026-02-18', entrada: '09:00', salida: '17:00', estado: 'tarde' },
      { id: 5, fecha: '2026-02-17', entrada: '08:30', salida: '17:30', estado: 'completo' },
      { id: 6, fecha: '2026-02-16', entrada: '08:30', salida: '17:30', estado: 'completo' },
      { id: 7, fecha: '2026-02-15', entrada: '08:45', salida: '17:15', estado: 'completo' },
      { id: 8, fecha: '2026-02-14', entrada: '08:30', salida: '17:30', estado: 'completo' },
    ];
    
    // Filtrar según período
    if (periodo === 'dia') {
      return registros.slice(0, 1);
    } else if (periodo === 'semana') {
      return registros.slice(0, 5);
    } else {
      return registros;
    }
  } catch (error) {
    console.error('Error obteniendo historial:', error);
    throw error;
  }
};
// ==================== PERFIL SERVICE ====================

export interface Perfil {
  id: number;
  nombre: string;
  email: string;
  cargo: string;
  departamento: string;
  fechaIngreso: string;
  telefono: string;
  foto: string;
  documento: string;
}

export const getPerfil = async (token: string): Promise<Perfil> => {
  try {
    await delay(500);
    
    return {
      id: 1,
      nombre: 'Juan Pérez',
      email: 'juan.perez@empresa.com',
      cargo: 'Desarrollador Senior',
      departamento: 'Tecnología',
      fechaIngreso: '15/03/2022',
      telefono: '+51 987 654 321',
      foto: 'https://via.placeholder.com/150/2A5C99/FFFFFF?text=JP',
      documento: 'DNI 12345678'
    };
  } catch (error) {
    console.error('Error obteniendo perfil:', error);
    throw error;
  }
};

// ==================== SOLICITUDES SERVICE ====================

export interface Solicitud {
  id: number;
  tipo: 'vacaciones' | 'permiso' | 'incapacidad';
  fechaInicio: string;
  fechaFin: string;
  estado: 'pendiente' | 'aprobada' | 'rechazada';
  motivo: string;
}

export const getSolicitudes = async (token: string): Promise<Solicitud[]> => {
  try {
    await delay(700);
    
    return [
      {
        id: 1,
        tipo: 'vacaciones',
        fechaInicio: '2026-03-01',
        fechaFin: '2026-03-15',
        estado: 'aprobada',
        motivo: 'Vacaciones anuales'
      },
      {
        id: 2,
        tipo: 'permiso',
        fechaInicio: '2026-02-25',
        fechaFin: '2026-02-25',
        estado: 'pendiente',
        motivo: 'Cita médica'
      },
      {
        id: 3,
        tipo: 'incapacidad',
        fechaInicio: '2026-02-10',
        fechaFin: '2026-02-12',
        estado: 'aprobada',
        motivo: 'Enfermedad'
      }
    ];
  } catch (error) {
    console.error('Error obteniendo solicitudes:', error);
    throw error;
  }
};

export const crearSolicitud = async (token: string, solicitud: Omit<Solicitud, 'id' | 'estado'>) => {
  try {
    await delay(1000);
    
    return {
      success: true,
      message: 'Solicitud creada correctamente',
      solicitud: {
        id: Math.floor(Math.random() * 1000),
        ...solicitud,
        estado: 'pendiente'
      }
    };
  } catch (error) {
    console.error('Error creando solicitud:', error);
    throw error;
  }
};