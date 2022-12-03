import { createContext, ReactNode, useEffect, useState } from "react";

import AsyncStorage from '@react-native-async-storage/async-storage';

import * as AuthSession from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';

import axios from "axios";

WebBrowser.maybeCompleteAuthSession();

interface UserProps {
    email: string,
    id: string,
    name: string,
    avatarUrl: string,
}

interface AuthContextType {
    user: UserProps | undefined;
    signIn: () => Promise<void>;
    appIsLoading: boolean;
    signOut: () => Promise<void>;
}

interface AuthContextProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState<UserProps>();
    const [appIsLoading, setAppIsLoading] = useState(true);
    const [request, response, promptasync] = Google.useAuthRequest({
        clientId: '894873223394-19j3jgkb33rmvm2s641qnd54ho8glv31.apps.googleusercontent.com',
        redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
        scopes: ['profile', 'email'],
    })

    async function saveUserDataStorage(user: UserProps) {
        const dataKey = '@miauApp:user';
        const userToStorage = JSON.stringify(user);
        await AsyncStorage.setItem(dataKey, userToStorage);
    }

    async function fetchUseData() {
        try {
            setAppIsLoading(true);
            const dataKey = '@miauApp:user';
            const response = await AsyncStorage.getItem(dataKey);
            if (response) {
                const storage = JSON.parse(response);
                setUser(storage);
            }
        setAppIsLoading(false);
        } catch(error) {
            console.log(error);
        } finally {
            setAppIsLoading(false);
        }
    }

    async function signIn() {
        try {
            await promptasync();
        } catch {
            console.log('erro');
        }
    }

    async function signOut() {
        setUser(undefined);
        await AsyncStorage.removeItem('@miauApp:user');
    }

    async function signInWithGoogle(accessToken: string) {
        setAppIsLoading(true);
        try {
            const response = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                }
            });
            const { data } = response;
            const userInfo: UserProps = {
                email: data.email,
                id: data.id,
                name: data.name,
                avatarUrl: data.picture,
            };
            setUser(userInfo);
            saveUserDataStorage(userInfo);
        } catch (error) {
            console.log(error);
        }
        setAppIsLoading(false);
    }

    useEffect(() => {
        if (response?.type === 'success') {
            signInWithGoogle(response.authentication.accessToken);
        }
    }, [response]);

    useEffect(() =>{
        fetchUseData();
    },[]);

    return (
        <AuthContext.Provider value={{
            user,
            signIn,
            appIsLoading,
            signOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}