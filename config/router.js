import { createStackNavigator } from 'react-navigation';

import Users from '../screens/users';
import Detail from '../screens/userDetail';

const AppNavigator = createStackNavigator(
  {
    Users: { screen: Users },
    Detail: { screen: Detail },
  },
  {
    initialRouteName: 'Users',
  }
);

export default AppNavigator;