import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile157415Navigator from '../features/UserProfile157415/navigator';
import Tutorial157414Navigator from '../features/Tutorial157414/navigator';
import NotificationList157386Navigator from '../features/NotificationList157386/navigator';
import Settings157385Navigator from '../features/Settings157385/navigator';
import Settings157377Navigator from '../features/Settings157377/navigator';
import UserProfile157375Navigator from '../features/UserProfile157375/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile157415: { screen: UserProfile157415Navigator },
Tutorial157414: { screen: Tutorial157414Navigator },
NotificationList157386: { screen: NotificationList157386Navigator },
Settings157385: { screen: Settings157385Navigator },
Settings157377: { screen: Settings157377Navigator },
UserProfile157375: { screen: UserProfile157375Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
