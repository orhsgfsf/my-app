import { NavigationContainer } from '@react-navigation/native';
// navigation
import { MainStackNavigator } from './navigation';
// i18n
import './locales/i18n';

export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};
