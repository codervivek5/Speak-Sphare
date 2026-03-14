import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import Swal from 'sweetalert2';
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

    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const openLoginModal = () => setIsLoginModalOpen(true);
    const closeLoginModal = () => setIsLoginModalOpen(false);

    const handleGoogleLogin = (credentialResponse) => {
        try {
            const decoded = jwtDecode(credentialResponse.credential);
            const email = decoded.email;
            const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;
            const isAdmin = ADMIN_EMAIL ? email === ADMIN_EMAIL : false;

            const userData = {
                email,
                name: decoded.name,
                picture: decoded.picture,
                role: isAdmin ? 'ROLE_ADMIN' : 'ROLE_USER',
                isAdmin
            };

            setUser(userData);
            localStorage.setItem('speak_sphere_user', JSON.stringify(userData));
            closeLoginModal();

            Swal.fire({
                title: 'Welcome Back!',
                text: `Successfully logged in as ${decoded.name}`,
                icon: 'success',
                background: '#0f172a',
                color: '#fff',
                confirmButtonColor: '#4f46e5',
                customClass: {
                    popup: 'glass-card border border-white/10 rounded-[2rem]',
                }
            });

            return userData;
        } catch (error) {
            console.error("Google Login Failed", error);
            Swal.fire({
                title: 'Login Failed',
                text: 'An error occurred during Google sign-in.',
                icon: 'error',
                background: '#0f172a',
                color: '#fff',
                confirmButtonColor: '#ef4444',
            });
        }
    };

    const devLogin = () => {
        const mockUser = {
            email: "dev@speaksphere.com",
            name: "Developer",
            picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dev",
            role: "ROLE_ADMIN",
            isAdmin: true
        };
        setUser(mockUser);
        localStorage.setItem('speak_sphere_user', JSON.stringify(mockUser));
        closeLoginModal();
        
        Swal.fire({
            title: 'Developer Login',
            text: 'Successfully logged in with bypass',
            icon: 'success',
            background: '#0f172a',
            color: '#fff',
            confirmButtonColor: '#4f46e5',
        });
        return mockUser;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('speak_sphere_user');
        Swal.fire({
            title: 'Logged Out',
            text: 'Come back soon!',
            icon: 'info',
            background: '#0f172a',
            color: '#fff',
            timer: 2000,
            showConfirmButton: false
        });
    };

    return (
        <AuthContext.Provider value={{
            user,
            handleGoogleLogin,
            logout,
            devLogin,
            isLoginModalOpen,
            openLoginModal,
            closeLoginModal,
            loading: false
        }}>
            {children}
        </AuthContext.Provider>
    );
}
