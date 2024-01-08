import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import {store} from './src/state/store'
import Navigation from './src/navigations/Navigation';


export default function App() {
 
  return (
    <Provider store={store}>
        {/* <RegisterComponent></RegisterComponent> */}
        <Navigation></Navigation>
    </Provider>
  );
}
