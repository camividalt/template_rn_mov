# Configuracion inicial

nvm ( para mac o windows)
node 18.18.2 (lts/hydrogen)
java 17.0.3.1

variables de entorno:
ANDROID_HOME=$HOME/Library/Android/sdk
ANDROID_SDK="$ANDROID_HOME"
JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-17.0.3.1.jdk/Contents/Home
ANDROID_SDK_ROOT="$ANDROID_HOME"

PATH="$PATH:$ANDROID_HOME/platform-tools"
PATH="$PATH:$ANDROID_HOME/tools"
PATH="$PATH:$ANDROID_HOME/platform-tools/bin"
PATH="$PATH:$ANDROID_HOME/tools/bin"


# Inicio
>**Note**:Luego de clonar el proyecto.

Correr el comando para que se descarguen y preparen los componentes del proyecto, asignados en el package.json
```bash
# en una consola
npm i
ó
```

## Paso 1: Iniciar el Servidor de Metro

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# en una consola
npm run start
ó
npx react-native start
ó
```

## Paso 2: Iniciar la Applicación
Siguiendo el paso anterior: Metro nos da la posibilidad de apretar a: para levantar app en Android, o i : para ios; r: para recargar....

Para saber si tu consola reconoce algun dispositivo: usar el comando que lista los dispositivos conectados a tu maquina.
```bash
# en una consola
adb devices
```
Recomendacion de REACT:
Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### Para Android

```bash
# en una consola
npm run android
ó
npx react-native run-android
ó
```

### Para iOS

```bash
# en una consola
npm run ios
ó
npx react-native run-ios
ó
```

Si todo esta _correcto_, deberias estar viendo tu app corriendo en tu _emulador_ o _dispositivo_ _fisisco_ correctamente.

Tambien puedes correr tu aplicación desde _Android_ _Studio_ y _Xcode_ respectivamente.

## Step 3: Modificando tu App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!
### Plugins 
npm i jail-monkey

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
