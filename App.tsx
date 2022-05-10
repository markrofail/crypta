import "reflect-metadata"
import React, { useEffect } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { AppNavigator } from './src/navigation/navigator';
import { store } from './src/redux/store';
import theme from "./src/theme/theme"
import { Provider as PaperProvider } from "react-native-paper"
import { initConnection } from "./src/offline-database/connection";
import { initFonts } from "./src/theme/fonts";

export default function App() {

  // initial async loading actions, like loading fonts and RootStore
  useEffect(() => {
    ; (async () => {
      await initConnection()
      await initFonts()
    })()
  }, [])

  return (
    <>
      <ReduxProvider store={store}>
        <PaperProvider theme={theme}>
          <AppNavigator />
        </PaperProvider>
      </ReduxProvider>
    </>
  );
}
