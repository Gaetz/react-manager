import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyBhuOdjKot2zLwapErLPbiFr3jbthlLYIs",
            authDomain: "react-manager-6da0a.firebaseapp.com",
            databaseURL: "https://react-manager-6da0a.firebaseio.com",
            projectId: "react-manager-6da0a",
            storageBucket: "react-manager-6da0a.appspot.com",
            messagingSenderId: "983981057819"        
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <View>
                    <LoginForm></LoginForm>
                </View>
            </Provider>
        );
    }
}

export default App;