import { Link } from 'expo-router'; // Asegúrate de importar Link correctamente
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import globalStyles from '../globalStyles';

export default function ForgotPassword() {
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
        />

        <TouchableOpacity style={globalStyles.button} onPress={() => {}}>
          <Text style={globalStyles.buttonText}>Enviar</Text>
        </TouchableOpacity>
        
        <Text style={globalStyles.registerText}>
        <Link href="/(tabs)" style={globalStyles.registerLink}>
  Regresar a Iniciar Sesión
</Link>


        </Text>
      </View>
    </View>
  );
}

