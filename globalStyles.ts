import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(234, 234, 234, 1)', // Fondo claro
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  formContainer: {
    width: '100%',
    maxWidth: 300, // Ancho del formulario
    alignSelf: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40, // Hicimos los inputs más delgados verticalmente
    borderColor: 'rgba(137, 113, 187, 1)', // Borde morado
    borderWidth: 1,
    borderRadius: 15, // Bordes redondeados
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: 'rgba(210, 210, 210, 1)', // Fondo más claro
  },
  registerText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  button: {
    width: '100%',
    height: 40, // Hicimos los botones más delgados verticalmente
    borderRadius: 25, // Bordes redondeados
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20, 
    backgroundColor: 'rgba(137, 113, 187, 1)', // Establece el color morado
    elevation: 5, // Sombra en Android
    shadowColor: '#000', // Sombra en iOS
    shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra
    shadowOpacity: 0.3, // Opacidad de la sombra
    shadowRadius: 5, // Radio de la sombra
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  registerLink: {
    color: 'rgba(137, 113, 187, 1)', 
    fontWeight: '500',
  },
});

export default globalStyles;
