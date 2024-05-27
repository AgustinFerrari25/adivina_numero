import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PantallaInicio from './PantallaInicio';
import PantallaJuego from './PantallaJuego';
import PantallaAyuda from './PantallaAyuda';

const Stack = createStackNavigator();

const App=() =>{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='PantallaInicio'>

        <Stack.Screen name='PantallaInicio' component={PantallaInicio} options={{title:'Pantalla de Inicio'}}/>
        <Stack.Screen name='PantallaJuego' component={PantallaJuego} options={{title:'Pantalla del Juego'}}/>
        <Stack.Screen name='PantallaAyuda' component={PantallaAyuda} options={{title:'Pantalla de Ayuda'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
