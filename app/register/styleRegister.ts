import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'white', 
    padding: 20, 
  },
  title: {
    marginTop: 20,
    fontSize: 36,
    textAlign: 'center',
    color: 'black',
  },
  subtitle: {
    textAlign: 'center',
    color: 'gray',
    marginBottom: 40,
  },
  inputContainer: {
    position: 'relative',
    marginTop: 20,
  },
  label: {
    position: 'absolute',
    zIndex: 10,
    paddingHorizontal: 4,
    backgroundColor: 'white',
    top: -8,
    left: 8,
    color: 'gray',
    fontSize: 12,
  },
  inputEmail: {
    padding: 8,
    color: 'black',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 12,
    height: 40,
    backgroundColor: '#fff',
  },
  inputPassword: {
    flex: 1,
    padding: 8,
    color: 'black',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 12,
    height: 40,
    backgroundColor: '#fff',
    paddingRight: 40, // Khoảng trống cho icon
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  eyeButton: {
    position: 'absolute',
    right: 16,
    height: '100%',
    justifyContent: 'center',
    padding: 8,
  },
  button: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#8DD3BB',
    marginTop: 50,
    textAlign: 'center',
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  agreementContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  checkbox: {
    marginRight: 10,
  },
  agreementText: {
    color: 'black',
  },
  underlineText: {
    textDecorationLine: 'none',
    color:'red'
  },
  login:{
    color:'red'
  },
  already:{
    marginTop:4,
    textAlign:'center'
  }
});

export default styles;
