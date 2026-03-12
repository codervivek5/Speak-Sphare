import { User, Mail, Phone, MapPin, Edit2, Calendar, Award, Clock, Book, Settings } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const { user: authUser } = useAuth();

  const user = {
    name: authUser?.name || 'Muskan Singh',
    roles: authUser?.role === 'ROLE_ADMIN' ? 'Data Analyst | IELTS Trainer' : 'Learner',
    position: authUser?.role === 'ROLE_ADMIN' ? 'Founder- SpeakSphere' : 'Student',
    email: authUser?.email || 'muskansingh292001@gmail.com',
    phone: '+91-6295742275',
    location: 'India',
    joinDate: 'January 2024',
    level: 'Advanced',
    totalHours: 120,
    picture: authUser?.picture
  };

  const userDetails = [
    { icon: <User size={24} />, label: 'Full Name', value: user.name },
    { icon: <Mail size={24} />, label: 'Email Address', value: user.email },
    { icon: <Phone size={24} />, label: 'Phone Number', value: user.phone },
    { icon: <MapPin size={24} />, label: 'Location', value: user.location },
  ];

  const learningStats = [
    { icon: <Award size={32} />, value: user.level, label: 'Current Level', color: 'from-purple-500 to-pink-500' },
    { icon: <Clock size={32} />, value: `${user.totalHours}h`, label: 'Total Learning Time', color: 'from-blue-500 to-cyan-500' },
    { icon: <Calendar size={32} />, value: user.joinDate, label: 'Member Since', color: 'from-green-500 to-emerald-500' },
  ];

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Profile Hero Header */}
        <div className="glass-card rounded-[2rem] p-8 md:p-12 mb-10 border border-white/5 shadow-2xl relative overflow-hidden animate-fade-in">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full -ml-32 -mb-32"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-[0_0_30px_rgba(99,102,241,0.3)]">
                <div className="w-full h-full rounded-full bg-[#0f172a] overflow-hidden flex items-center justify-center border-4 border-[#0f172a]">
                  {user.picture ? (
                    <img
                      src={user.picture}
                      alt={user.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <User size={80} className="text-white/20" />
                  )}
                </div>
              </div>
              <button className="absolute bottom-1 right-1 p-2.5 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-500 transition-colors border-2 border-[#0f172a]">
                <Edit2 size={16} />
              </button>
            </div>

            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-4">
                <Award size={14} />
                <span>Advanced Learner</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                {user.name}
              </h1>
              <p className="text-xl text-slate-300 mb-4 font-medium">{user.roles}</p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-indigo-400" />
                  <span>{user.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-purple-400" />
                  <span>Joined {user.joinDate}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/5 text-center px-6">
                <p className="text-3xl font-bold text-white mb-1">{user.totalHours}</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Total Hours</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/5 text-center px-6">
                <p className="text-3xl font-bold text-white mb-1">12</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Courses</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Navigation Sidebar */}
          <div className="lg:w-72 flex-shrink-0">
            <div className="glass-card rounded-2xl p-4 border border-white/5 shadow-xl sticky top-24">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('personal')}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all ${activeTab === 'personal' ? 'bg-indigo-600 text-white font-semibold shadow-[0_0_20px_rgba(79,70,229,0.3)]' :
                    'text-slate-400 hover:bg-white/5 hover:text-white'
                    }`}
                >
                  <User size={20} />
                  <span>Personal Info</span>
                </button>
                <button
                  onClick={() => setActiveTab('learning')}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all ${activeTab === 'learning' ? 'bg-indigo-600 text-white font-semibold shadow-[0_0_20px_rgba(79,70,229,0.3)]' :
                    'text-slate-400 hover:bg-white/5 hover:text-white'
                    }`}
                >
                  <Book size={20} />
                  <span>Learning Stats</span>
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all ${activeTab === 'settings' ? 'bg-indigo-600 text-white font-semibold shadow-[0_0_20px_rgba(79,70,229,0.3)]' :
                    'text-slate-400 hover:bg-white/5 hover:text-white'
                    }`}
                >
                  <Settings size={20} />
                  <span>Account Settings</span>
                </button>
              </nav>

              <div className="mt-8 pt-6 border-t border-white/5 px-4">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Account Status</p>
                <div className="flex items-center gap-3 text-emerald-400">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                  <span className="text-sm font-medium">Verified Account</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tab Content Area */}
          <div className="flex-1 min-w-0">
            {activeTab === 'personal' && (
              <div className="space-y-6 animate-fade-in">
                <div className="glass-card rounded-2xl p-8 border border-white/5 shadow-xl">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-white">Personal Information</h2>
                    <button className="text-indigo-400 hover:text-indigo-300 text-sm font-bold transition-colors">Update Info</button>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-8">
                    {userDetails.map((detail, index) => (
                      <div key={index} className="space-y-1.5 p-4 rounded-2xl bg-white/2 hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                        <div className="flex items-center gap-3 text-indigo-400 mb-1">
                          {detail.icon}
                          <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">{detail.label}</span>
                        </div>
                        <p className="text-white text-lg font-medium pl-9">{detail.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-8 border border-white/5 shadow-xl">
                  <h2 className="text-2xl font-bold text-white mb-6">Bio & Expertise</h2>
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                      <p className="text-slate-300 leading-relaxed italic">
                        "{user.roles}. Dedicated to mastering communication and analytics to build world-class learning experiences."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'learning' && (
              <div className="space-y-8 animate-fade-in">
                {/* Stats Grid */}
                <div className="grid sm:grid-cols-3 gap-6">
                  {learningStats.map((stat, index) => (
                    <div key={index} className="glass-card rounded-2xl p-6 border border-white/5 text-center group hover:bg-white/10 transition-all duration-300">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.color} text-white mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                        {stat.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                      <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Detailed Progress */}
                <div className="glass-card rounded-2xl p-8 border border-white/5 shadow-xl">
                  <h2 className="text-2xl font-bold text-white mb-8">Course Progress</h2>
                  <div className="space-y-10">
                    {[
                      { name: 'Conversational English', progress: 75, lessons: 36, color: 'from-blue-500 to-indigo-500' },
                      { name: 'Business English Communication', progress: 45, lessons: 42, color: 'from-purple-500 to-pink-500' },
                      { name: 'English Basics for Beginners', progress: 100, lessons: 24, color: 'from-green-500 to-emerald-500' }
                    ].map((course, idx) => (
                      <div key={idx} className="group">
                        <div className="flex justify-between items-end mb-4">
                          <div className="space-y-1">
                            <h4 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">{course.name}</h4>
                            <p className="text-sm text-slate-500">{course.lessons} lessons • {course.progress}% complete</p>
                          </div>
                          <span className="text-2xl font-black text-white/20 group-hover:text-white/40 transition-colors">{course.progress}%</span>
                        </div>
                        <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${course.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="glass-card rounded-2xl p-8 border border-white/5 shadow-xl animate-fade-in text-center py-20">
                <Settings size={48} className="text-slate-600 mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-white mb-2">Account Settings</h2>
                <p className="text-slate-400 max-w-sm mx-auto mb-8">
                  Profile editing and account preferences are currently in beta and will be available soon.
                </p>
                <div className="flex justify-center gap-4">
                  <button className="px-6 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors border border-white/10">Privacy Policy</button>
                  <button className="px-6 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors border border-white/10">Password Reset</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
