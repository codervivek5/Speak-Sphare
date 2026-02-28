import { useState } from 'react';
import { Mic, Volume2, RefreshCw, CheckCircle, Play } from 'lucide-react';

const Practice = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState(null);

  const exercises = [
    {
      id: 1,
      type: 'Pronunciation',
      title: 'Common Phrases',
      difficulty: 'Beginner',
      color: 'from-green-400 to-emerald-500',
      phrases: [
        'How are you today?',
        'Nice to meet you.',
        'What do you do for a living?',
        'Could you please help me?'
      ]
    },
    {
      id: 2,
      type: 'Listening',
      title: 'Daily Conversations',
      difficulty: 'Intermediate',
      color: 'from-yellow-400 to-orange-500',
      description: 'Listen to the conversation and answer questions'
    },
    {
      id: 3,
      type: 'Speaking',
      title: 'Describe a Situation',
      difficulty: 'Intermediate',
      color: 'from-blue-400 to-cyan-500',
      prompt: 'Describe your daily morning routine in 2 minutes'
    },
    {
      id: 4,
      type: 'Vocabulary',
      title: 'Business English',
      difficulty: 'Advanced',
      color: 'from-red-400 to-pink-500',
      words: ['negotiate', 'collaborate', 'implement', 'strategy']
    }
  ];

  const handleStartRecording = () => {
    setIsRecording(true);
    setTimeout(() => setIsRecording(false), 3000);
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'Advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Practice Zone
          </h1>
          <p className="text-lg sm:text-xl text-white/90">
            Improve your skills with interactive exercises
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 md:gap-8">
          {/* Exercises List */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="glass-effect rounded-2xl p-6 animate-slide-in-left lg:sticky lg:top-24">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Available Exercises</h2>
              <div className="space-y-4">
                {exercises.map((exercise) => (
                  <div 
                    key={exercise.id} 
                    className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                      selectedExercise?.id === exercise.id 
                        ? `bg-gradient-to-r ${exercise.color} text-white shadow-lg scale-105` 
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                    onClick={() => setSelectedExercise(exercise)}
                  >
                    <h3 className={`font-bold text-lg mb-2 ${selectedExercise?.id === exercise.id ? 'text-white' : 'text-gray-800'}`}>
                      {exercise.title}
                    </h3>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        selectedExercise?.id === exercise.id 
                          ? 'bg-white/30 text-white' 
                          : 'bg-primary-100 text-primary-700'
                      }`}>
                        {exercise.type}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        selectedExercise?.id === exercise.id 
                          ? 'bg-white/30 text-white' 
                          : getDifficultyColor(exercise.difficulty)
                      }`}>
                        {exercise.difficulty}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Practice Area */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            {selectedExercise ? (
              <div className="glass-effect rounded-3xl p-8 animate-slide-in-right">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    {selectedExercise.title}
                  </h2>
                  <div className="flex items-center gap-3">
                    <span className={`px-4 py-2 rounded-full font-semibold bg-gradient-to-r ${selectedExercise.color} text-white`}>
                      {selectedExercise.type}
                    </span>
                    <span className={`px-4 py-2 rounded-full font-semibold ${getDifficultyColor(selectedExercise.difficulty)}`}>
                      {selectedExercise.difficulty}
                    </span>
                  </div>
                </div>

                {/* Pronunciation Exercise */}
                {selectedExercise.type === 'Pronunciation' && (
                  <div className="space-y-4 mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Practice These Phrases:</h3>
                    {selectedExercise.phrases.map((phrase, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:shadow-md transition-all">
                        <p className="text-gray-800 font-medium text-lg">{phrase}</p>
                        <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-3 rounded-full hover:scale-110 transition-transform">
                          <Volume2 size={20} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Speaking Exercise */}
                {selectedExercise.type === 'Speaking' && (
                  <div className="mb-8">
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-primary-500 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Your Task:</h3>
                      <p className="text-gray-700 text-lg leading-relaxed">{selectedExercise.prompt}</p>
                    </div>
                  </div>
                )}

                {/* Vocabulary Exercise */}
                {selectedExercise.type === 'Vocabulary' && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Learn These Words:</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {selectedExercise.words.map((word, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl hover:shadow-md transition-all">
                          <span className="text-gray-800 font-semibold text-lg">{word}</span>
                          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full hover:scale-110 transition-transform">
                            <Volume2 size={18} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Controls */}
                <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-200">
                  <button 
                    className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                      isRecording 
                        ? 'bg-red-500 text-white recording' 
                        : 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:shadow-xl hover:scale-105'
                    }`}
                    onClick={handleStartRecording}
                    disabled={isRecording}
                  >
                    <Mic size={24} />
                    {isRecording ? 'Recording...' : 'Start Recording'}
                  </button>
                  
                  <button className="px-6 py-4 bg-gray-200 text-gray-800 rounded-xl font-semibold hover:bg-gray-300 transition-all hover:scale-105 flex items-center justify-center gap-2">
                    <RefreshCw size={20} />
                    Try Again
                  </button>
                  
                  <button className="px-6 py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2">
                    <CheckCircle size={20} />
                    Submit
                  </button>
                </div>
              </div>
            ) : (
              <div className="glass-effect rounded-3xl p-16 text-center animate-fade-in">
                <Mic size={80} className="mx-auto mb-6 text-gray-400" />
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Select an Exercise to Begin</h2>
                <p className="text-gray-600 text-lg">Choose from the list to start practicing your English skills</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;
