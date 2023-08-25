const quizzes = [
    {
        id: 1,
        title: 'HTML Quiz',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7z3TC6MpeLZyN8Jh3x32hs1pk1Qacj7JZktowRPI&s',
        questions: [
            'What does the abbreviation HTML stand for?',
            'How many sizes of headers are available in HTML by default?',
            'What is the smallest header in HTML by default?',
        ],
        options: [
            ['HyperText Markup Language.', 'HighText Markup Language.', 'Hypertext markdown Language.'],
            ['5', '1', '6'],
            ['h1', 'h6', 'h7'],
        ],
        correctOptions: [0, 2, 1,0] 
    },
    {
        id: 2,
        title: 'CSS Quiz',
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
        questions: [
            'What does CSS stand for?',
            'Which property is used to change the background color of an element?',
            'What does the "C" in CSS refer to?'
        ],
        options: [
            ['Computer Styled Sections', 'Creative Style Sheets', 'Cascading Style Sheets'],
            ['background-color', 'color', 'text-color'],
            ['Cascading', 'Colorful', 'Creative']
        ],
        correctOptions: [2, 0, 0]
    },
    {
        id: 3,
        title: 'JS Quiz',
        thumbnail: 'https://blog.kakaocdn.net/dn/bhn7TL/btrs3VixGKw/EUob1oTur0Ud5sUtrbDZvk/img.png',
        questions: [
            'What does the acronym "JS" stand for?',
            'Which keyword is used to declare a variable in JavaScript?',
            'Which function is used to add a new element to the end of an array?'
        ],
        options: [
            ['Java Source', 'JavaScript', 'JustScript'],
            ['var', 'let', 'variable'],
            ['push()', 'add()', 'insert()']
        ],
        correctOptions: [1, 0, 0]
    }
];

export default quizzes;