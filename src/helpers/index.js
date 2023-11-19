import AsyncStorage from '@react-native-async-storage/async-storage';

module.exports = {
    logout: () =>{
        console.log("logout");
    },
    asyncStoreSetData: async (key, value) => {
        try {
          await AsyncStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
          console.warn(error);
        }   
    },

    asyncStoreGetData: async (key, handler) => {
        await AsyncStorage.getItem(key)
        .then((value) => {
            handler(value);
        })
    }
}
