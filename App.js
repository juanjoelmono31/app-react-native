import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, } from 'react-native';
import { Main } from './src/components/Main';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="ligth" />

        <Main />
      </View>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
