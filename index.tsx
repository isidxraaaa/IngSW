import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import globalStyles from './globalStyles';

export default function Index() {
  const [rut, setRut] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (rut.trim() === '' || password.trim() === '') {
      Alert.alert('Error', 'Debe ingresar su RUT y contraseña.');
      return;
    }

    // 🔑 Aquí defines el rol (en un caso real esto vendría de una API)
    const rol = rut === 'admin' ? 'admin' : 'trabajador';

    if (rol === 'admin') {
      router.push('/admin/main');  // Redirige correctamente a la vista de admin
    } else {
      router.push('/trabajador/maint');  // Redirige correctamente a la vista de trabajador
    }
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>¡Bienvenid@ a Tasky!</Text>

      <Image
        source={require('../assets/images/logotasky.jpg')}  // Corrigiendo la ruta
        style={styles.image}
      />

      <View style={globalStyles.formContainer}>
        <Text style={globalStyles.subtitle}>Ingresa a tu cuenta</Text>

        <TextInput
          style={globalStyles.input}
          placeholder="RUT (Ej: 123456789)"
          placeholderTextColor="#999"
          value={rut}
          onChangeText={setRut}
        />
        <TextInput
          style={globalStyles.input}
          placeholder="Contraseña"
          secureTextEntry
          placeholderTextColor="#999"
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={globalStyles.button} onPress={handleLogin}>
          <Text style={globalStyles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>

        <Text style={globalStyles.registerText}>
          <Link href="/(tabs)/forgotPassword" style={globalStyles.registerLink}>
            ¿Olvidaste tu contraseña?
          </Link>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 40,
    height: 40,
  },
});

