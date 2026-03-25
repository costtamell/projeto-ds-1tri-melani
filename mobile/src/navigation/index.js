import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import Home from '../screens/Home';
import Medicos from '../screens/Medicos';
import Agenda from '../screens/Agenda';
import Confirmacao from '../screens/Confirmacao';
import MeusAgendamentos from '../screens/MeusAgendamentos';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Medicos" component={Medicos} />
      <Stack.Screen name="Agenda" component={Agenda} />
      <Stack.Screen name="Confirmacao" component={Confirmacao} />
      <Stack.Screen name="MeusAgendamentos" component={MeusAgendamentos} />
    </Stack.Navigator>
  );
}