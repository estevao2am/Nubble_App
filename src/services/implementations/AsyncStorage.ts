import AsyncStorage from "@react-native-async-storage/async-storage"

import { Storage } from "../storage/storage"

export const asyncStorage: Storage = {
    getItem: async key => {
      const item = await AsyncStorage.getItem(key)
        if(item) {
            return JSON.parse(item);
            
        }
        return null
    },

    setItem:async (keyof, value) => {
        await AsyncStorage.setItem(keyof, JSON.stringify(value))
    },

    removeItem: async key => {
        await AsyncStorage.removeItem(key)
    }
}