import { AsyncStorage } from 'react-native';

export function logout(){
    console.log("logout")
}

module.exports = {
    retrieve: async (value) => {
        try {
            let data = await AsyncStorage.getItem(value);
            return data;
        } catch (err) {
            return err;
        }
    },
    store: async (key, value) => {
        try {
            // stringify the value since value can only be string.
            if (typeof (value) === 'object')
                value = JSON.stringify(value)
            return await AsyncStorage.setItem(key, value);
        } catch (err) {
            console.log(err)
            return err;
        }
    }
}