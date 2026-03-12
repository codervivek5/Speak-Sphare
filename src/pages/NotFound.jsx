import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4">
            <div className="text-center space-y-8 animate-fade-in-up">
                <div className="relative">
                    <h1 className="text-9xl font-black text-white/[0.03] select-none">404</h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                            Page Not Found
                        </p>
                    </div>
                </div>

                <p className="text-lg text-white/80 max-w-md mx-auto">
                    Oops! The page you're looking for seems to have wandered off into another sphere.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center gap-2 text-white hover:text-primary-400 transition-colors font-semibold"
                    >
                        <ArrowLeft size={20} />
                        Go Back
                    </button>
                    <Link
                        to="/"
                        className="flex items-center gap-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    >
                        <Home size={20} />
                        Return Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
