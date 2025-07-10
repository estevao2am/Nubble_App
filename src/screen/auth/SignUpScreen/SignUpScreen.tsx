/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Screen} from '../../Screen';
import {Text} from '../../../components/Text/Text';
import { Button } from '../../../components/Button/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useResetNavigationSuccess } from '../../../components/hooks/useResetNavigationSuccess';
import { useForm } from 'react-hook-form';
import { FormTextInput } from '../../../components/form/FormTextInput';
import { FormPasswordInput } from '../../../components/form/FormPasswordInput';
import {signUpSchema,SignUpSchema} from './signUpSchema'
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthScreenProps } from '../../../routes/navigationType';
import { useAuthSignUp } from '../../../domain/Auth/useCases/useAuthSignUp';
import { AuthStackParamList } from 'src/routes/AuthStack';

// type SignUpFormType = {
//   fullName:string;
//   username:string;
//   email:string;
//   password:string;

// }
const resetParams : AuthStackParamList['SuccessScreen'] = {
     title:'Sua conta foi criada com sucesso.',
          description:'Agora é só fazer o login na plataforma',
          icon:{
            name:'checkRound',
            color:'success'
}}

export function SignUpScreen({navigation}:AuthScreenProps<'SignUpScreen'>) {

  const {reset} = useResetNavigationSuccess()
  const {signUp,isLoading} = useAuthSignUp({
    // Chamando o usecase do create account e depois dar o reset
    onSuccess: () => {
         reset(resetParams);
    }
  });

const { control,handleSubmit,formState} = useForm<SignUpSchema>({
  resolver: zodResolver(signUpSchema),
  defaultValues:{
    lastName:'',
    firstName:'',
    email:'',
    password:'',
    username:'',
  },
  mode:'onChange'
})

    function submitForm(formValues:SignUpSchema){
      // console.log(formValues) Login function
      signUp(formValues)

   
      }
         
  return (
    <Screen canGoBack  scrollable>
      <Text preset="headingLarge" marginBottom="s32">
        Criar uma conta
      </Text>


<FormTextInput
  control={control}
  name='username'
  label='Seu username'
  placeholder='@'
  boxProps={{mb:'s20'}}
/>

<FormTextInput
  control={control}
  name='firstName'
  label="Nome completo"
 placeholder="Digite seu nome"
 boxProps={{marginBottom: 's20'}}
/>
<FormTextInput
  control={control}
  name='lastName'
  label="Sobrenome"
 placeholder="Digite o seu sobrenome"
 boxProps={{marginBottom: 's20'}}
/>

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
  boxProps={{mb:"s48"}}
/>

      
<Button
loading={isLoading}
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Criar uma conta"
      />
    </Screen>
  )
}
 