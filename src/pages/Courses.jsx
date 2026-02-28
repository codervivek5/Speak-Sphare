import { Link } from 'react-router-dom';
import { Clock, Users, BookOpen, Star } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'English Basics for Beginners',
      level: 'Beginner',
      duration: '4 weeks',
      students: 1250,
      lessons: 24,
      rating: 4.8,
      description: 'Master fundamental English communication skills',
      topics: ['Greetings & Introductions', 'Basic Vocabulary', 'Simple Conversations', 'Pronunciation Basics'],
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 2,
      title: 'Conversational English',
      level: 'Intermediate',
      duration: '6 weeks',
      students: 890,
      lessons: 36,
      rating: 4.9,
      description: 'Build confidence in everyday English conversations',
      topics: ['Daily Conversations', 'Social Interactions', 'Travel English', 'Phone Conversations'],
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 3,
      title: 'Business English Communication',
      level: 'Intermediate',
      duration: '8 weeks',
      students: 670,
      lessons: 42,
      rating: 4.7,
      description: 'Professional English for workplace success',
      topics: ['Presentations', 'Meetings', 'Email Writing', 'Networking'],
      color: 'from-blue-400 to-cyan-500'
    },
    {
      id: 4,
      title: 'Advanced Speaking & Pronunciation',
      level: 'Advanced',
      duration: '10 weeks',
      students: 450,
      lessons: 48,
      rating: 4.9,
      description: 'Perfect your pronunciation and fluency',
      topics: ['Accent Reduction', 'Idioms & Expressions', 'Debate Skills', 'Public Speaking'],
      color: 'from-red-400 to-pink-500'
    }
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-700 border-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-primary-100 text-primary-700 border-primary-200';
    }
  };

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16 animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Explore Our <span className="gradient-text">Courses</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect course to match your English learning goals and skill level
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="glass-card rounded-3xl p-8 card-hover shadow-lg animate-fade-in-up group border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex-1">
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold border ${getLevelColor(course.level)} mb-4`}>
                    {course.level}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {course.description}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 mb-6 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock size={20} className="text-primary-500" />
                  <span className="font-medium">{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <BookOpen size={20} className="text-primary-500" />
                  <span className="font-medium">{course.lessons} lessons</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users size={20} className="text-primary-500" />
                  <span className="font-medium">{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Star size={20} className="text-yellow-500 fill-yellow-500" />
                  <span className="font-medium">{course.rating}</span>
                </div>
              </div>

              {/* Topics */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">What you'll learn:</h4>
                <ul className="space-y-3">
                  {course.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600">
                      <span className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${course.color} flex items-center justify-center text-white text-sm font-bold mt-0.5`}>
                        ✓
                      </span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <Link
                to={`/course/${course.id}`}
                className={`block w-full text-center bg-gradient-to-r ${course.color} text-white px-6 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105`}
              >
                Enroll Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
