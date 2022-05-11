/**
 * @format
 */

import AppProvider from '$App/AppProvider';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppProvider);
