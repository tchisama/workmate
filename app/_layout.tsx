import { SplashScreen, Stack } from 'expo-router';
import {View, useColorScheme } from 'react-native';
import { theme } from '../constants/Colors';
import ButtonNav from '../components/ButtonNav';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};


export default  function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.light.background }}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
      <ButtonNav/>
    </View>
  );
}
