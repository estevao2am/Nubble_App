import { Button } from "../../../components/Button/Button";
import { Screen } from "../../../components/Screen/Screen";
import { Text } from "../../../components/Text/Text";
import { useResetNavigationSuccess } from "../../../components/hooks/useResetNavigationSuccess";
import { ForgotPasswordSchema, forgotPasswordSchema } from "./forgotPasswordSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormTextInput } from "../../../components/form/FormTextInput";
import { AuthScreenProps } from "../../../routes/navigationType";



export function ForgotPasswordScreen ({navigation}:AuthScreenProps<'ForgotPasswordScreen'>){
    const {reset} = useResetNavigationSuccess()

const {control,handleSubmit,formState} = useForm<ForgotPasswordSchema>({
    resolver:zodResolver(forgotPasswordSchema),
    defaultValues:{
        email:''
    },
    mode:'onChange'
})

    function submitForm(values:ForgotPasswordSchema){
        console.log(values)
        reset({
            title: `Enviamos as instrunções ${'\n'}para seu e-mail`,
            description:'Click no link enviado no seu e-email para ecuperar sua senha',
            icon:{
                name:'messageRound',
                color:'primary'
            }
        })

       
    }
    return(
        <Screen canGoBack>
            <Text preset="headingLarge" marginBottom="s16">Esqueci a minha senha</Text>
            <Text preset="paragraphLarge" marginBottom="s32">Digite seu e-mail e enviaremos as instruções para redefinição de senha</Text>
            <FormTextInput 
                 control={control}
                 name='email'
                 label='e-mail'
                 placeholder='Digite sua senha'
                 boxProps={{mb:"s40"}}
               />
               
               <Button  
      disabled={!formState.isValid}
      onPress={handleSubmit(submitForm)} 
      title="Entrar"
       />        </Screen>
    )
}