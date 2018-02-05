import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import reducers from './reducers';


class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyBhuOdjKot2zLwapErLPbiFr3jbthlLYIs',
            authDomain: 'react-manager-6da0a.firebaseapp.com',
            databaseURL: 'https://react-manager-6da0a.firebaseio.com',
            projectId: 'react-manager-6da0a',
            storageBucket: '',
            messagingSenderId: '983981057819'
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>Yo</Text>
                </View>
            </Provider>
        );
    }
}

export default App;