import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView} from 'react-native';
import BottomTab from './navigation/BottomTab';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import FullArticle from './components/FullArticle';
import Home from './screens/Home';

const stack = createNativeStackNavigator()
export default function App() {
  return (
    // <SafeAreaView style={styles.droidSafeArea}>
        <NavigationContainer >
          <StatusBar style='light' backgroundColor='#000333' />
          <stack.Navigator initialRouteName='BottomTab' screenOptions={{headerShown:false}}>
            {/* <stack.Screen name='Home' component={Home} /> */}
            <stack.Screen name="BottomTab" component={BottomTab} />
            <stack.Screen name='FullArticle' component={FullArticle} />
          </stack.Navigator>
        </NavigationContainer>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 35 : 0
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
