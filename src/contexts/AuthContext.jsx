import { useState } from 'react';
import { AuthContext } from './AuthContextInstance';

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        try {
            const savedUser = localStorage.getItem('speak_sphere_user');
            return savedUser ? JSON.parse(savedUser) : null;
        } catch (e) {
            console.error("Failed to load user from storage", e);
            return null;
        }
    });

    const login = (email) => {
        const isAdmin = email === 'muskansingh292001@gmail.com';
        const userData = {
            email,
            role: isAdmin ? 'ROLE_ADMIN' : 'ROLE_USER',
            isAdmin
        };
        setUser(userData);
        localStorage.setItem('speak_sphere_user', JSON.stringify(userData));
        return userData;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('speak_sphere_user');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading: false }}>
            {children}
        </AuthContext.Provider>
    );
}
