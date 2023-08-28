import AsyncStorage from '@react-native-async-storage/async-storage';


export const saveToken = async (token) => {
    try {
        await AsyncStorage.setItem('UserAccessToken', token);
    } catch (error) {
        console.error(error);
    }
};

// Извлечение токена доступа
export const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem('UserAccessToken');
        return token;
    } catch (error) {
        console.error(error);
    }
};