import AsyncStorage from '@react-native-async-storage/async-storage';

module.exports = {
    logout: () =>{
        console.log("logout");
    },
    printAsyncStorage: async () => {    //TODO:- Unused function yet, but required    
        AsyncStorage.getAllKeys((err, keys) => { 
            AsyncStorage.multiGet(keys, (error, stores) => {  
              let asyncStorage = {}
              stores.map((result, i, store) => {
                asyncStorage[store[i][0]] = store[i][1]
              });
            });
        });
    },
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