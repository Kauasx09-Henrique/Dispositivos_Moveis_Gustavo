import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PaperProvider } from 'react-native-paper'
import StackRoutes from './src/Screens/routes/StackRoutes.jsx';

const Stack = createStackNavigator();

export default function App() {
  return (
<PaperProvider>
      <NavigationContainer>
<StackRoutes/>
      </NavigationContainer>
      </PaperProvider>

  );
}
