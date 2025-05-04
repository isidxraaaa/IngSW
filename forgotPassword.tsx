import { Link } from 'expo-router'; // Importamos el Link para navegación
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import globalStyles from '../globalStyles'; // Ruta correcta para importar globalStyles.ts

export default function Index() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>¡Bienvenid@ a Tasky!</Text>

      {/* Aquí va la imagen */}
      <Image
        source={require('../../assets/images/logotasky.jpg')}  // Ajustada la ruta
        style={styles.image}  // Aplicamos el estilo
      />

      <View style={globalStyles.formContainer}>
        <Text style={globalStyles.subtitle}>Ingresa a tu cuenta</Text>

        <TextInput
          style={globalStyles.input}
          placeholder="RUT (Ej: 123456789)"
          placeholderTextColor="#999"
        />
        <TextInput
          style={globalStyles.input}
          placeholder="Contraseña"
          secureTextEntry
          placeholderTextColor="#999"
        />

        {/* Botón de "Iniciar sesión" */}
        <TouchableOpacity
  style={globalStyles.button} // Usamos el estilo global para el botón
  onPress={() => {}}>
  <Text style={globalStyles.buttonText}>Iniciar sesión</Text>
</TouchableOpacity>


       {/* Enlace para ir a "Olvidaste tu contraseña" */}
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
    top: 10, // Ajusta la distancia de la parte superior
    right: 10, // Ajusta la distancia de la parte derecha
    width: 40, // Ajusta el tamaño de la imagen
    height: 40, // Ajusta el tamaño de la imagen
  },
});
