import { GoogleLogin } from '@react-oauth/google';
import { X, Globe, ShieldCheck } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const LoginModal = () => {
    const { isLoginModalOpen, closeLoginModal, handleGoogleLogin } = useAuth();
    const navigate = useNavigate();

    if (!isLoginModalOpen) return null;

    const onSuccess = (response) => {
        const user = handleGoogleLogin(response);
        if (user && user.isAdmin) {
            navigate('/admin');
        } else if (user) {
            navigate('/dashboard');
        }
    };

    const onError = () => {
        console.error('Login Failed');
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-[#020617]/80 backdrop-blur-md animate-fade-in"
                onClick={closeLoginModal}
            ></div>

            {/* Modal Container */}
            <div className="relative w-full max-w-md animate-scale-up z-10">
                <div className="glass-card rounded-[2.5rem] p-8 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
                    {/* Background Glows */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[60px] rounded-full -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 blur-[60px] rounded-full -ml-16 -mb-16"></div>

                    {/* Close Button */}
                    <button
                        onClick={closeLoginModal}
                        className="absolute top-6 right-6 p-2 text-slate-500 hover:text-white hover:bg-white/5 rounded-full transition-all"
                    >
                        <X size={20} />
                    </button>

                    <div className="text-center relative z-10">
                        <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl mb-6 shadow-lg shadow-indigo-500/20">
                            <Globe size={32} className="text-white animate-spin-slow" />
                        </div>

                        <h2 className="text-2xl font-bold text-white mb-2">Sign in to SpeakSphere</h2>
                        <p className="text-slate-400 mb-8 text-sm">Continue your journey to English mastery</p>

                        <div className="flex justify-center mb-8">
                            <GoogleLogin
                                onSuccess={onSuccess}
                                onError={onError}
                                useOneTap
                                theme="filled_blue"
                                shape="pill"
                                size="large"
                                text="signin_with"
                                width="320"
                            />
                        </div>

                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-px bg-white/10 flex-1"></div>
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Secure Access</span>
                            <div className="h-px bg-white/10 flex-1"></div>
                        </div>

                        <div className="flex items-center justify-center gap-2 text-slate-500 text-xs mb-8">
                            <ShieldCheck size={14} className="text-indigo-400" />
                            <span>Verified Google Authentication</span>
                        </div>

                        <p className="text-[10px] text-slate-500 px-4">
                            By signing in, you agree to our <a href="#" className="underline hover:text-white transition-colors">Terms</a> and <a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
