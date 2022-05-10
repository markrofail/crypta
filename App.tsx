import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { AppNavigator } from './src/navigation/navigator';
import { store } from './src/redux/store';
import theme from "./src/theme/theme"
import { Provider as PaperProvider } from "react-native-paper"

export default function App() {
  return (
    <>
      <PaperProvider theme={theme}>
        <ReduxProvider store={store}>
          <AppNavigator />
        </ReduxProvider>
      </PaperProvider>
    </>
  );
}
