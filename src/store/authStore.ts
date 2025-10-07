import { create } from 'zustand'


interface User {
    id: string;
    email: string;
    nombre: string;
    apellido: string;
    telefono: string;
}

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    actions: {

        setUser: (user: User) => void;
        clearUser: () => void;
    }

}


const useAuthStore = create<AuthState>((set, get) => ({
    user: null,
    isAuthenticated: false,
    actions: {
        setUser: (userData) => (set({
            user: userData,
            isAuthenticated: !!userData,
        })),
        clearUser: () => (
            set({
                user: null,
                isAuthenticated: false
            })
        )

    }
}))

export default useAuthStore;