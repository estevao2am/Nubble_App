import { Controller, UseControllerProps, FieldValues } from "react-hook-form";
import { TextInput, TextInputProps } from "../TextInput/TextInput";



export function FormTextInput<FormType extends FieldValues >({
    name,rules,control,...textInputProps}: TextInputProps & UseControllerProps<FormType>) {
    return(
   
        <Controller 
          control={control}
          name={name}
          rules={rules}
          render={({field,fieldState})=>(
             <TextInput
                    value={field.value}
                    onChangeText={field.onChange}
                      errorMessage={fieldState.error?.message}
                    //   label="Nome completp"
                    //   placeholder="Digite seu nome"
                    //   boxProps={{marginBottom: 's20'}}
                    {...textInputProps}
                    />
          )}
        />

    )
}