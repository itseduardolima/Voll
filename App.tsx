import Login from "./src/screens/login/Login";
import { Themes } from "./src/styles/themes";

import {NativeBaseProvider, StatusBar} from "native-base"

export default function App() {
  return (

    <NativeBaseProvider theme={Themes} >

      <StatusBar backgroundColor={Themes.colors.blue[800]} />

      <Login />

    </NativeBaseProvider>

  )
}
