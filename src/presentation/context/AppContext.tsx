// AppContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import AxiosApi from "../../infrastruture/api/AxiosApi";
import UserRepositoryImpl from "../../infrastruture/repositories/UserRepositoryImpl";
import UserRepository from "../../domain/repositories/UserRepository";

// Definindo o tipo para o contexto
interface AppContextType {
    user: any | null;
    setUser: (user: any | null) => void;
    userRepository: UserRepository;
}
const api = new AxiosApi("https://api.example.com");
const userRepository: UserRepository = new UserRepositoryImpl(api);
const AppContext = createContext<AppContextType>({
    user: null,
    setUser: () => { },
    userRepository
});

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
    children
}) => {
    const [user, setUser] = useState<any | null>(null);

    return (
        <AppContext.Provider value={{ user, setUser, userRepository }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);

