This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.


Button

<Button preset='primary' loading title="Primary" marginBottom='s12' />
          

          
          <Button preset='outline'  title="Outline" marginBottom='s12'  />
          <Button disabled title="Disabled" marginBottom='s12'  />
          <Button disabled preset='outline'  title="Loading ..." marginBottom='s12' />


iOS Simulator: Ctrl + Cmd ⌘ + Z (or Device > Shake)
Android emulators: Cmd ⌘ + M (macOS) or Ctrl + M (Windows and Linux)



// Validacao de formularios manual


import React, { useEffect, useState } from 'react';
import {Button} from '../../../components/Button';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Text} from '../../../components/Text';
import {Screen} from '../../../components/Screen/Screen';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../../../routes/Routes';
import { Alert } from 'react-native';

// Tipando a Screen especificando o nome da tela no generic,o rootStack contem os nomes das telas da app
type ScreenProps = NativeStackScreenProps<RootStackParamsList, 'LoginScreen'>;
export function LoginScreen({navigation}: ScreenProps) {

  // from Validations feature
  const [email, setEmail] = useState('')
  const [password,setPassword] = useState('') 
  const [emailErrorMessage, setEmailErrorMensage] = useState('')

  useEffect(()=>{
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    setEmailErrorMensage(isValidEmail ? '': 'E-mail Invalido')

  },[email])

  function submitForm(){
    Alert.alert(`E-mail: ${email} password: ${password}`)
  }

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen'); // vai pra essa tela
  }

  function navigateToForgotPassword() {
    navigation.navigate('ForgotPasswordScreen');
  }

  return (
    <Screen scrollabre>
      <Text marginBottom="s8" preset="headingLarge">
        Olá{' '}
      </Text>
      <Text marginBottom="s40" preset="paragraphLarge">
        Digite o seu e-mail e senha para entrar
      </Text>

      <TextInput
      value={email}
      onChangeText={setEmail}
        errorMessage={emailErrorMessage}
        label="E-mail"
        placeholder="Digite o E-mail"
        boxProps={{marginBottom: 's20'}}
      />

      <PasswordInput
      value={password}
      onChangeText={setPassword}
        label="Nova senha"
        boxProps={{marginBottom: 's10'}}
        //RightComponent={<Icon name='eyeOn' color='gray2'/>}
      />

      <Text
        color="primary"
        preset="paragraphSmall"
        bold
        onPress={navigateToForgotPassword}>
        Esqueci a Minha Senha
      </Text>

      <Button  
      onPress={submitForm} 
      marginTop="s48"
       title="Entrar"
       disabled={!!emailErrorMessage || password.length<6}
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

Husky permit do security commits
