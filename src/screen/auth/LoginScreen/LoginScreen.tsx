import {Button} from '../../../components/Button/Button';
import {Text} from '../../../components/Text/Text';
import {Screen} from '../../Screen';
import {useForm} from 'react-hook-form'
import { Alert } from 'react-native';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, loginSchema} from './loginSchema'; 
import { FormPasswordInput } from '../../../components/form/FormPasswordInput';
import { FormTextInput } from '../../../components/form/FormTextInput';
import { AuthScreenProps } from '../../../routes/navigationType';

// type LoginFormType = {
//   email:string;
//   password:string;
// }
// Tipando a Screen especificando o nome da tela no generic,o rootStack contem os nomes das telas da app
//type ScreenProps = NativeStackScreenProps<RootStackParamsList, 'LoginScreen'>;

export function LoginScreen({navigation}: AuthScreenProps<'LoginScreen'>) {

  // from Validations feature
  // const [email, setEmail] = useState('')
  // const [password,setPassword] = useState('') 
  // const [emailErrorMessage, setEmailErrorMensage] = useState('')


const {control,formState, handleSubmit} = useForm<LoginSchema>({
  resolver:zodResolver(loginSchema),
  defaultValues:{
    email:'',
    password:''
  },
  mode:'onChange'
})
  
function submitForm({email,password}:LoginSchema){
  Alert.alert(`E-mail: ${email} password: ${password}`)
}


  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen'); // vai pra essa tela
  }

  function navigateToForgotPassword() {
    navigation.navigate('ForgotPasswordScreen');
  }

  
  return (
    <Screen scrollable>
      <Text marginBottom="s8" preset="headingLarge">
        Olá{' '}
      </Text>
      <Text marginBottom="s40" preset="paragraphLarge">
        Digite o seu e-mail e senha para entrar
      </Text>

     

    <FormTextInput
      control={control}
      name='email'
      // rules={{
      //   required:'Email obrigatorio',
      //   pattern:{
      //     value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      //     message:'E-mail invalido'
      //   }
      // }}  label="E-mail"
     placeholder="Digite seu e-mail"
     label='E-mail'
     boxProps={{marginBottom: 's20'}}
    
    />
    
    <FormPasswordInput 
      control={control}
      name='password'
    
      label='Senha'
      placeholder='Digite sua senha'
      boxProps={{mb:"s20"}}
    />
    

      

      <Text
        color="primary"
        preset="paragraphSmall"
        bold
        onPress={navigateToForgotPassword}>
        Esqueci a Minha Senha
      </Text>

      <Button  
      disabled={!formState.isValid}
      onPress={handleSubmit(submitForm)} 
      marginTop="s48"
      title="Entrar"
       />

      <Button
        onPress={navigateToSignUpScreen}
        preset="outline"
        marginTop="s12"
        title="Criar uma conta"
      />
    </Screen>
  );
}
