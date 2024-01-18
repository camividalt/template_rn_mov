import React from 'react';
import {SafeAreaView} from 'react-native';
import {RootNavigation} from './src/presentacion/root-navigation/RootNavigation';
import {store} from './src/aplicacion/proxy/stores/reduxStore';
import {Provider} from 'react-redux';
import 'react-native-get-random-values';
import 'react-native-gesture-handler';

function App(): React.JSX.Element {
    return (
        <Provider store={store}>
            <SafeAreaView style={{flex: 1}}>
                <RootNavigation />
            </SafeAreaView>
        </Provider>
    );
}
export default App;
