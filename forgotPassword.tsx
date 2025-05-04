import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import globalStyles from '../globalStyles';

export default function ForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleSend = () => {
    if (email.trim() === '') {
      Alert.alert('Debe ingresar su correo'); // ✅ Este es el mensaje que debería aparecer
      return;
    }

    router.push('/(tabs)/sent');  // Aquí redirige a sent.tsx
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Recupera tu contraseña</Text>

      <View style={globalStyles.formContainer}>
        <Text style={globalStyles.subtitle}>
          Para recuperar tu contraseña, ingresa el correo asociado a la cuenta:
        </Text>

        <TextInput
          style={globalStyles.input}
          placeholder="Correo"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TouchableOpacity style={globalStyles.button} onPress={handleSend}>
          <Text style={globalStyles.buttonText}>Enviar</Text>
        </TouchableOpacity>

        <Text style={globalStyles.registerText}>
          <Text
            style={globalStyles.registerLink}
            onPress={() => router.push('/')}
            // Cambio para regresar a la pantalla de inicio
          >
            Regresar a Iniciar Sesión
          </Text>
        </Text>
      </View>
    </View>
  );
}
