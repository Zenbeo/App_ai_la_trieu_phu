
import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import { Apps, Login } from './Apps';

import ForgotPass from './Apps/Login/ForgotPass';
import Information from './Apps/Login/Informations';
import Registeri from './Apps/Login/Registeri';
import Supports from './Apps/Login/Supports';
import Question1 from './Apps/Question/Question1';
import Question2 from './Apps/Question/Question2';
import Settings from './Apps/Question/Settings';
import TouchMoney from './Apps/Question/TouchMoney';
import Values from './Apps/Question/Values';

// AppRegistry.registerComponent(appName, () => HomeMain);
// AppRegistry.registerComponent(appName, () => Login);
// AppRegistry.registerComponent(appName, () => Registeri); 
// AppRegistry.registerComponent(appName, () => ForgotPass);
AppRegistry.registerComponent(appName, () => Apps); 
// AppRegistry.registerComponent(appName, () => Settings); 