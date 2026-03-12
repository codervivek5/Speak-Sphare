import { Link } from 'react-router-dom';
import { ArrowRight, Mic, MessageCircle, Headphones, Trophy, Sparkles, Zap, Target, Play, ChevronDown, ChevronUp, Users, Briefcase, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const features = [
    {
      icon: <Mic size={48} />,
      title: 'Speaking Practice',
      description: 'Improve your pronunciation and fluency with interactive speaking exercises',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Headphones size={48} />,
      title: 'Listening Skills',
      description: 'Enhance your listening comprehension with real-world conversations',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <MessageCircle size={48} />,
      title: 'Conversation Practice',
      description: 'Engage in realistic dialogues and scenario-based conversations',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Trophy size={48} />,
      title: 'Track Progress',
      description: 'Monitor your improvement with detailed analytics and achievements',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const stats = [
    { icon: <Target size={32} />, value: '10K+', label: 'Active Learners' },
    { icon: <Sparkles size={32} />, value: '50+', label: 'Interactive Lessons' },
    { icon: <Zap size={32} />, value: '95%', label: 'Success Rate' },
  ];

  const heroFeatures = [
    { icon: <Users size={20} />, text: 'All Levels Welcome' },
    { icon: <Briefcase size={20} />, text: 'Ace Job Interviews' },
    { icon: <TrendingUp size={20} />, text: 'Boost Your Career' },
  ];

  const testimonials = [
    {
      name: 'Sachin',
      role: 'Software Engineer',
      quote: 'Buying this course has been the best decision I made. Thanks to SpeakSphere, I\'ve noticed a marked improvement in my vocabulary, pronunciation, and overall fluency.',
      avatar: 'S',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Muskan Tripathi',
      role: 'VP Product',
      quote: 'I\'ve been using the SpeakSphere app for a while now, and it\'s truly fantastic! The lessons are well-structured and engaging.',
      avatar: 'M',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Vijay Yadav',
      role: 'Product Manager',
      quote: 'The SpeakSphere app is a very useful tool for anyone who wants to improve their spoken English. My experience has been wonderful.',
      avatar: 'V',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Preeti Salhotra',
      role: 'Sales Manager',
      quote: 'SpeakSphere is the best platform, the tutors are experienced and supportive. The interactive lessons really help improve speaking skills.',
      avatar: 'P',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Sunit',
      role: 'Software Engineer',
      quote: 'I can see huge difference in my fluency and vocabulary because of the continuous guidance and efforts of talented tutors.',
      avatar: 'S',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Mayank Agarwal',
      role: 'Businessman',
      quote: 'Their tutors are very friendly and encourage you to express yourself without any hesitation. Highly recommended!',
      avatar: 'M',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const faqs = [
    {
      question: 'What is SpeakSphere?',
      answer: 'SpeakSphere is an interactive English learning platform that helps you master communication skills through live sessions, AI-powered practice, and personalized learning paths.'
    },
    {
      question: 'How to book a trial?',
      answer: 'You can book a trial session by clicking on "Try Free Lesson" button on the homepage. Select your preferred time slot and you\'re all set!'
    },
    {
      question: 'What comes with our subscription?',
      answer: 'Our subscription includes unlimited access to all courses, live tutoring sessions, practice exercises, progress tracking, and personalized recommendations.'
    },
    {
      question: 'How can SpeakSphere help my career?',
      answer: 'SpeakSphere helps improve your professional communication skills, interview preparation, presentation abilities, and business English - all essential for career growth.'
    },
    {
      question: 'How to book regular sessions?',
      answer: 'After signing up, you can book regular sessions through your dashboard. Choose your tutor and schedule recurring sessions that fit your routine.'
    }
  ];

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 lg:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Master English
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent pb-1">
                Communication
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Transform your English speaking skills with interactive lessons, real-time feedback, and AI-powered practice sessions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/courses"
                className="group flex items-center justify-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Get Started
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/practice"
                className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-lg text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 active:scale-95"
              >
                Try Free Lesson
              </Link>
            </div>

            {/* Hero Features */}
            <div className="flex flex-wrap gap-3 pt-4">
              {heroFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
                >
                  <span className="text-white/80">{feature.icon}</span>
                  <span className="text-sm text-white font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 md:pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-center mb-2 text-white/90">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-slide-in-right order-first md:order-last mb-12 md:mb-0">
            <div className="relative glass-effect rounded-3xl p-6 md:p-8 shadow-2xl animate-float max-w-md mx-auto md:max-w-none">
              <div className="flex items-center justify-center w-full h-64 md:h-80 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-2xl">
                <Mic size={100} className="text-white animate-pulse-slow md:size-[120px]" />
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-6 py-3 rounded-full shadow-xl font-bold animate-bounce-slow">
                🎯 95% Success
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-400 to-cyan-500 text-white px-6 py-3 rounded-full shadow-xl font-bold animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
                ⭐ 10K+ Students
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose <span className="gradient-text">SpeakSphere</span>?
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Discover powerful features designed to accelerate your English learning journey
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass-card rounded-2xl p-6 card-hover animate-fade-in-up border border-white/5 shadow-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Get Inspired by Our Learners
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            See how SpeakSphere has transformed the lives of thousands of English learners
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-slate-300 leading-relaxed mb-6 text-sm">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-primary-400 font-medium">{testimonial.role}</p>
                </div>
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold shadow-lg`}>
                  {testimonial.avatar}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
            View All Success Stories
          </button>
        </div>
      </section>

      {/* Practical Learning Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="glass-effect rounded-3xl p-8 md:p-12 animate-fade-in-up">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-400 to-secondary-400 rounded-2xl p-8 flex items-center justify-center">
                <div className="relative">
                  <div className="w-48 h-48 md:w-64 md:h-64 bg-white/20 rounded-full flex items-center justify-center">
                    <Play size={48} className="text-white ml-2" />
                  </div>
                  <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 shadow-lg">
                    <p className="text-xs text-white/60">Greetings!</p>
                    <p className="text-sm font-semibold text-white">Your Progress so far!</p>
                    <div className="flex gap-4 mt-2">
                      <div>
                        <p className="text-lg font-bold text-primary-600">32</p>
                        <p className="text-xs text-gray-500">Sessions</p>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-secondary-600">4</p>
                        <p className="text-xs text-gray-500">Level</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                We Believe In Practical Learning
              </h3>
              <p className="text-slate-300 text-lg">
                Improve Your English By Speaking It! With A Personal Trainer By Your Side, Achieve Results 3x Faster.
              </p>
              <div className="flex flex-wrap gap-3 pt-4 justify-center md:justify-start">
                <span className="px-4 py-2 bg-primary-500/20 text-primary-300 border border-primary-500/30 rounded-full text-sm font-medium">Live Sessions</span>
                <span className="px-4 py-2 bg-secondary-500/20 text-secondary-300 border border-secondary-500/30 rounded-full text-sm font-medium">Personal Trainer</span>
                <span className="px-4 py-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full text-sm font-medium">3x Faster Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-white/80">
            Got questions? We've got answers!
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-effect rounded-xl overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="font-semibold text-white pr-4">{faq.question}</span>
                {openFaq === index ? (
                  <ChevronUp size={20} className="text-primary-600 flex-shrink-0" />
                ) : (
                  <ChevronDown size={20} className="text-primary-600 flex-shrink-0" />
                )}
              </button>
              {openFaq === index && (
                <div className="px-5 pb-5">
                  <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 mb-12 md:mb-16">
        <div className="glass-effect rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-center space-y-4 md:space-y-6 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Ready to Improve Your English?
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
            Join thousands of learners mastering English communication with our interactive platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              to="/courses"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Start Learning Today
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/practice"
              className="inline-flex items-center gap-3 bg-gray-200 text-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-300 transition-all duration-300 hover:scale-105"
            >
              Try Free Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
