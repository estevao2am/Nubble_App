import { Button } from "../../../components/Button/Button";
import { Screen } from "../../Screen";
import { Text } from "../../../components/Text/Text";
import { useResetNavigationSuccess } from "../../../components/hooks/useResetNavigationSuccess";
import { ForgotPasswordSchema, forgotPasswordSchema } from "./forgotPasswordSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormTextInput } from "../../../components/form/FormTextInput";
import { AuthScreenProps } from "../../../routes/navigationType";
import { useAuthRequestNewPassword } from "../../../domain/Auth/useCases/useAuthRequestNewPassword";
import { AuthStackParamList } from "../../../routes/AuthStack";
import { useToast, useToastService } from "../../../services/toast/useToast";


const resetParam : AuthStackParamList['SuccessScreen'] = {

            title: `Enviamos as instrunções ${'\n'}para seu e-mail`,
            description:'Click no link enviado no seu e-email para ecuperar sua senha',
            icon:{
                name:'messageRound',
                color:'primary'
            }
        }


export function ForgotPasswordScreen ({navigation}:AuthScreenProps<'ForgotPasswordScreen'>){
    const {reset} = useResetNavigationSuccess()
    const {showToast} = useToastService()

const {requestNewPAssword,isLoading} = useAuthRequestNewPassword({
    onSuccess:() => reset(resetParam),
    onError: (message) => showToast({message, type:'error'})
})


const {control,handleSubmit,formState} = useForm<ForgotPasswordSchema>({
    resolver:zodResolver(forgotPasswordSchema),
    defaultValues:{
        email:''
    },
    mode:'onChange'
})

    function submitForm(values:ForgotPasswordSchema){
        requestNewPAssword(values.email)
        console.log(values)

       
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
     loading={isLoading} 
      disabled={!formState.isValid}
      onPress={handleSubmit(submitForm)} 
      title="Entrar"
       />        </Screen>
    )
}