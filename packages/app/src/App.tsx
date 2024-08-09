import React from 'react';
import {Text, View} from 'react-native';

const App = () => {
    return (
        <View
            style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red',
            padding: 100
            }}>
            <Text>Hello, world!</Text>
        </View>
    );
};

export default App;