import { useState } from 'react';
import { LayoutDashboard, BookOpen, Users, BarChart3, Plus, Search, MoreVertical, Edit, Trash2 } from 'lucide-react';

const Admin = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const stats = [
        { label: 'Total Learners', value: '12,540', icon: <Users size={24} />, color: 'bg-blue-500' },
        { label: 'Courses Active', value: '24', icon: <BookOpen size={24} />, color: 'bg-purple-500' },
        { label: 'Avg. Progress', value: '68%', icon: <BarChart3 size={24} />, color: 'bg-emerald-500' },
    ];

    return (
        <div className="min-h-screen pt-20 md:pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Admin Sidebar */}
                    <div className="lg:w-64 flex-shrink-0">
                        <div className="glass-card rounded-2xl p-4 border border-white/5 sticky top-24">
                            <div className="mb-8 px-4 pt-2">
                                <h2 className="text-xl font-bold text-white">Admin Panel</h2>
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Management Hub</p>
                            </div>

                            <nav className="space-y-2">
                                <button
                                    onClick={() => setActiveTab('overview')}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'overview' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
                                >
                                    <LayoutDashboard size={20} />
                                    <span className="font-medium">Overview</span>
                                </button>
                                <button
                                    onClick={() => setActiveTab('courses')}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'courses' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
                                >
                                    <BookOpen size={20} />
                                    <span className="font-medium">Courses</span>
                                </button>
                                <button
                                    onClick={() => setActiveTab('users')}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'users' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
                                >
                                    <Users size={20} />
                                    <span className="font-medium">User List</span>
                                </button>
                            </nav>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 min-w-0">
                        {activeTab === 'overview' && (
                            <div className="space-y-8 animate-fade-in">
                                {/* Stats Grid */}
                                <div className="grid sm:grid-cols-3 gap-6">
                                    {stats.map((stat, idx) => (
                                        <div key={idx} className="glass-card rounded-2xl p-6 border border-white/5 flex items-center gap-5">
                                            <div className={`p-4 rounded-xl ${stat.color} text-white shadow-lg`}>
                                                {stat.icon}
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
                                                <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Placeholder Table / Chart */}
                                <div className="glass-card rounded-2xl p-8 border border-white/5">
                                    <div className="flex items-center justify-between mb-8">
                                        <h3 className="text-xl font-bold text-white">Recent Activity</h3>
                                        <button className="text-indigo-400 text-sm font-bold">View All</button>
                                    </div>
                                    <div className="space-y-4">
                                        {[1, 2, 3].map((_, i) => (
                                            <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/2 border border-white/5">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-indigo-400 font-bold">L</div>
                                                    <div>
                                                        <p className="text-white font-medium">New Learner Joined</p>
                                                        <p className="text-xs text-slate-500">2 hours ago</p>
                                                    </div>
                                                </div>
                                                <span className="text-xs px-2 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded">Success</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'courses' && (
                            <div className="space-y-6 animate-fade-in">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h2 className="text-2xl font-bold text-white">Course Management</h2>
                                        <p className="text-slate-400">Manage and update your curriculum</p>
                                    </div>
                                    <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/20">
                                        <Plus size={20} />
                                        Add Course
                                    </button>
                                </div>

                                <div className="glass-card rounded-2xl border border-white/5 overflow-hidden">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-white/5 border-b border-white/10">
                                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Title</th>
                                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Level</th>
                                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Enrollment</th>
                                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Status</th>
                                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/5">
                                            {[
                                                { title: 'Conversational English', level: 'Intermediate', students: 890, status: 'Active' },
                                                { title: 'Business English', level: 'Advanced', students: 670, status: 'Draft' },
                                                { title: 'IELTS Mastery', level: 'Expert', students: 450, status: 'Active' },
                                            ].map((c, i) => (
                                                <tr key={i} className="hover:bg-white/2 transition-colors">
                                                    <td className="px-6 py-4 text-white font-medium">{c.title}</td>
                                                    <td className="px-6 py-4 text-slate-400">{c.level}</td>
                                                    <td className="px-6 py-4 text-slate-400">{c.students}</td>
                                                    <td className="px-6 py-4">
                                                        <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${c.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-slate-500/10 text-slate-400 border border-slate-500/20'}`}>
                                                            {c.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center gap-3">
                                                            <button className="text-slate-400 hover:text-indigo-400 transition-colors"><Edit size={18} /></button>
                                                            <button className="text-slate-400 hover:text-red-400 transition-colors"><Trash2 size={18} /></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
