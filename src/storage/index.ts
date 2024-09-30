import {MMKV} from 'react-native-mmkv';

interface IStorage {
  onboardingCompleted: boolean;
}

export const storage = new MMKV();

export const setStorage = (key: string, value: any) => {
  storage.set(key, value);
};

export const getStorage = (key: keyof IStorage) => {
  return storage.getBoolean(key);
};
