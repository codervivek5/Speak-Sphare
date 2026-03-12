import { User, Mail, Phone, MapPin, Edit2, Calendar, Award, Clock, Book, Settings } from 'lucide-react';
import { useState } from 'react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('personal');

  const user = {
    name: 'Muskan Singh',
    roles: 'Data Analyst | IELTS Trainer',
    position: 'Founder- SpeakSphere',
    email: 'muskansingh292001@gmail.com',
    phone: '+91-6295742275',
    location: 'India',
    joinDate: 'January 2024',
    level: 'Advanced',
    totalHours: 120
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
    <div className="min-h-screen pt-20 md:pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="text-center mb-10 md:mb-12 animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Profile</span>
          </h1>
          <p className="text-lg text-slate-400">
            Manage your personal information and learning preferences
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Profile Card */}
          <div className="md:col-span-1 space-y-6">
            <div className="glass-card rounded-3xl p-6 md:p-8 text-center animate-fade-in-up border border-white/5 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-t-3xl"></div>
              <div className="relative z-10">
                <div className="w-32 h-32 mx-auto rounded-full p-1 bg-gradient-to-br from-indigo-400 to-purple-400 mb-6 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-[#0f172a] overflow-hidden flex items-center justify-center">
                    <User size={64} className="text-white/20" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-white mb-1">{user.name}</h2>
                <p className="text-indigo-400 font-medium mb-4">{user.roles}</p>
                <div className="flex items-center justify-center gap-2 text-slate-400 mb-6">
                  <span>{user.position}</span>
                  <span>•</span>
                  <span>{user.joinDate}</span>
                </div>
                <button className="w-full btn-primary text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                  <Edit2 size={18} />
                  Edit Profile
                </button>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-6 animate-fade-in-up border border-white/5 shadow-xl space-y-2" style={{ animationDelay: '0.1s' }}>
              <button
                onClick={() => setActiveTab('personal')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'personal' ? 'bg-white/10 text-white font-semibold border border-white/10' :
                  'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}
              >
                <User className="flex-shrink-0" size={20} />
                <span>Personal Info</span>
              </button>
              <button
                onClick={() => setActiveTab('learning')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'learning' ? 'bg-white/10 text-white font-semibold border border-white/10' :
                  'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}
              >
                <Book className="flex-shrink-0" size={20} />
                <span>Learning Stats</span>
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'settings' ? 'bg-white/10 text-white font-semibold border border-white/10' :
                  'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}
              >
                <Settings className="flex-shrink-0" size={20} />
                <span>Settings</span>
              </button>
            </div>
          </div>

          {/* Details & Stats */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {/* Personal Information */}
            <div className="glass-card rounded-3xl p-6 md:p-8 animate-slide-in-right border border-white/5">
              <h2 className="text-2xl font-bold text-white mb-6">Personal Information</h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {userDetails.map((detail, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-xl transition-all border border-white/5 group shadow-lg"
                  >
                    <div className="flex-shrink-0 p-3 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl text-indigo-400 border border-indigo-500/30 group-hover:scale-110 transition-transform">
                      {detail.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <label className="block text-sm text-slate-500 mb-1">{detail.label}</label>
                      <p className="text-white font-semibold truncate">{detail.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Stats */}
            <div className="glass-card rounded-3xl p-6 md:p-8 animate-fade-in-up border border-white/5">
              <h2 className="text-2xl font-bold text-white mb-6">Learning Statistics</h2>

              <div className="grid sm:grid-cols-3 gap-6">
                {learningStats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-6 bg-white/5 rounded-2xl transition-all duration-300 group border border-white/5 shadow-lg"
                  >
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${stat.color} text-white mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                      {stat.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{stat.value}</h3>
                    <p className="text-slate-400 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Overview */}
            <div className="glass-card rounded-3xl p-6 md:p-8 animate-fade-in-up border border-white/5">
              <h2 className="text-2xl font-bold text-white mb-6">Course Progress</h2>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <h4 className="font-bold text-white">Conversational English</h4>
                      <p className="text-sm text-slate-400">36 lessons • 75% complete</p>
                    </div>
                    <span className="text-indigo-400 font-bold text-lg">75%</span>
                  </div>
                  <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" style={{ width: '75%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <h4 className="font-bold text-white">Business English Communication</h4>
                      <p className="text-sm text-slate-400">42 lessons • 45% complete</p>
                    </div>
                    <span className="text-purple-400 font-bold text-lg">45%</span>
                  </div>
                  <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]" style={{ width: '45%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <h4 className="font-bold text-white">English Basics for Beginners</h4>
                      <p className="text-sm text-slate-400">24 lessons • 100% complete</p>
                    </div>
                    <span className="text-emerald-400 font-bold text-lg">100%</span>
                  </div>
                  <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
