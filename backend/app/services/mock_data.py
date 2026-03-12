from app.models.schema import Course, UserProfile, UserProgress

MOCK_COURSES = [
    Course(
        id=1,
        title='English Basics for Beginners',
        level='Beginner',
        duration='4 weeks',
        students=1250,
        lessons=24,
        rating=4.8,
        description='Master fundamental English communication skills',
        topics=['Greetings & Introductions', 'Basic Vocabulary', 'Simple Conversations', 'Pronunciation Basics'],
        color='from-blue-500/20 to-indigo-500/20 border-blue-500/30'
    ),
    Course(
        id=2,
        title='Conversational English',
        level='Intermediate',
        duration='6 weeks',
        students=890,
        lessons=36,
        rating=4.9,
        description='Build confidence in everyday English conversations',
        topics=['Daily Conversations', 'Social Interactions', 'Travel English', 'Phone Conversations'],
        color='from-purple-500/20 to-pink-500/20 border-purple-500/30'
    ),
    Course(
        id=3,
        title='Business English Communication',
        level='Intermediate',
        duration='8 weeks',
        students=670,
        lessons=42,
        rating=4.7,
        description='Professional English for workplace success',
        topics=['Presentations', 'Meetings', 'Email Writing', 'Networking'],
        color='from-emerald-500/20 to-teal-500/20 border-emerald-500/30'
    ),
    Course(
        id=4,
        title='Advanced Speaking & Pronunciation',
        level='Advanced',
        duration='10 weeks',
        students=450,
        lessons=48,
        rating=4.9,
        description='Perfect your pronunciation and fluency',
        topics=['Accent Reduction', 'Idioms & Expressions', 'Debate Skills', 'Public Speaking'],
        color='from-orange-500/20 to-red-500/20 border-orange-500/30'
    )
]

MOCK_USER = UserProfile(
    name='Muskan Singh',
    roles='Data Analyst | IELTS Trainer',
    position='Founder- SpeakSphere',
    email='muskansingh292001@gmail.com',
    phone='+91-6295742275',
    location='India',
    joinDate='January 2024',
    level='Advanced',
    totalHours=120
)

MOCK_PROGRESS = [
    UserProgress(name='Conversational English', progress=75, lessons=36, color='from-blue-500 to-indigo-500'),
    UserProgress(name='Business English Communication', progress=45, lessons=42, color='from-purple-500 to-pink-500'),
    UserProgress(name='English Basics for Beginners', progress=100, lessons=24, color='from-green-500 to-emerald-500')
]
