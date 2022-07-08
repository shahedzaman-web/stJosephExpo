import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import theme from "./src/theme/appTheme";
import Root from "./src/navigation/RootNavigator";
import Toast from "react-native-toast-message";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./src/store";
import LoadingScreen from "./src/view/LoadingScreen/LoadingScreen";

function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={<LoadingScreen />} persistor={persistor}>
          <StatusBar style="dark" />
          <NavigationContainer>
            <Root />
          </NavigationContainer>
          <Toast />
        </PersistGate>
      </Provider>
    </NativeBaseProvider>
  );
}
export default App;
