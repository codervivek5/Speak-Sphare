import { TrendingUp, Award, Target, BookOpen, Flame, Clock } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

const Dashboard = () => {
  const { user } = useAuth();
  const userName = user?.name ? user.name.split(' ')[0] : 'Learner';

  const stats = [
    { icon: <BookOpen size={32} />, value: '3', label: 'Courses Enrolled', color: 'from-blue-500 to-cyan-500' },
    { icon: <Target size={32} />, value: '67%', label: 'Average Score', color: 'from-purple-500 to-pink-500' },
    { icon: <TrendingUp size={32} />, value: '24', label: 'Lessons Completed', color: 'from-green-500 to-emerald-500' },
    { icon: <Award size={32} />, value: '12', label: 'Achievements', color: 'from-yellow-500 to-orange-500' }
  ];

  const recentActivity = [
    { course: 'Conversational English', lesson: 'Lesson 8: Phone Conversations', progress: 75, date: '2 hours ago', color: 'from-blue-500 to-cyan-500' },
    { course: 'Business English', lesson: 'Lesson 5: Email Writing', progress: 100, date: 'Yesterday', color: 'from-purple-500 to-pink-500' },
    { course: 'English Basics', lesson: 'Lesson 12: Greetings', progress: 100, date: '2 days ago', color: 'from-green-500 to-emerald-500' }
  ];

  const achievements = [
    { title: 'First Lesson', description: 'Complete your first lesson', unlocked: true, icon: '🎯' },
    { title: 'Week Streak', description: 'Practice for 7 consecutive days', unlocked: true, icon: '🔥' },
    { title: 'Pronunciation Pro', description: 'Get 90% in pronunciation exercises', unlocked: true, icon: '🎤' },
    { title: 'Course Complete', description: 'Finish your first course', unlocked: false, icon: '📚' },
    { title: 'Speaking Master', description: 'Complete 50 speaking exercises', unlocked: false, icon: '💬' },
    { title: 'Perfect Score', description: 'Get 100% in 10 lessons', unlocked: false, icon: '⭐' }
  ];

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12 animate-fade-in-up">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Welcome back, <span className="gradient-text">{userName}!</span>
            </h1>
            <p className="text-slate-400">Continue your journey to English mastery</p>
          </div>

        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 card-hover animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-lg`}>
                  {stat.icon}
                </div>
                {stat.trend && (
                  <span className="text-emerald-400 text-sm font-semibold flex items-center">
                    <TrendingUp size={16} className="mr-1" />
                    {stat.trend}
                  </span>
                )}
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-slate-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <div className="glass-card rounded-3xl p-8 animate-slide-in-left">
              <div className="flex items-center gap-3 mb-6">
                <Clock size={28} className="text-primary-300" />
                <h2 className="text-2xl font-bold text-white">Recent Activity</h2>
              </div>

              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div
                    key={index}
                    className="bg-white/5 hover:bg-white/10 border border-white/5 p-6 rounded-2xl transition-all duration-300 group shadow-lg"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-slate-300 mb-2">{activity.lesson}</p>
                        <span className="text-sm text-slate-500">{activity.date}</span>
                      </div>
                      <span className={`px-4 py-2 rounded-full bg-gradient-to-r ${activity.color} text-white font-bold text-sm shadow-lg`}>
                        {activity.progress}%
                      </span>
                    </div>

                    <div className="relative w-full h-3 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${activity.color} rounded-full transition-all duration-500`}
                        style={{ width: `${activity.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="lg:col-span-1">
            <div className="glass-card rounded-3xl p-8 animate-slide-in-right h-full">
              <div className="flex items-center gap-3 mb-6">
                <Award size={28} className="text-yellow-400" />
                <h2 className="text-2xl font-bold text-white">Achievements</h2>
              </div>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl transition-all duration-300 border ${achievement.unlocked
                      ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-white border-yellow-500/30 shadow-lg'
                      : 'bg-white/5 border-white/5 opacity-40'
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{achievement.icon}</span>
                      <div>
                        <h4 className={`font-bold mb-1 ${achievement.unlocked ? 'text-white' : 'text-slate-500'}`}>
                          {achievement.title}
                        </h4>
                        <p className={`text-sm ${achievement.unlocked ? 'text-slate-300' : 'text-slate-600'}`}>
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Progress */}
        <div className="mt-6 md:mt-8 glass-card rounded-3xl p-6 md:p-8 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-6">
            <Flame size={28} className="text-orange-500" />
            <h2 className="text-2xl font-bold text-white">Learning Streak</h2>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-4">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center font-bold text-lg transition-transform hover:scale-110 ${index < 5
                  ? 'bg-gradient-to-br from-indigo-500/30 to-purple-500/30 text-indigo-300 border border-indigo-500/40 shadow-lg glow'
                  : 'bg-white/5 text-slate-600 border border-white/5'
                  }`}>
                  {index < 5 ? '✓' : ''}
                </div>
                <span className="text-sm text-slate-500 mt-2 font-medium">{day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
