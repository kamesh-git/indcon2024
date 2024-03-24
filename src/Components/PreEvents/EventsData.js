// const preEventsDataBase = [
//     {
//         eventName: 'MAD ADS',
//         eventDesc: `Teams will be given a product, they have to create a script for the ad and they have to take an ad within the time limit in a camera and need to send the video.
//         The Ads will be evaluated by the judges and prize will be given to the best Ad among them.`,
//         eventCost: 'free',
//         eventContactMail: 'mail',
//         eventContactNumber: 'Number',
//         deadline: '31/03/2023',
//         date: '04/11/2023',
//         brochure: "https://drive.google.com/file/d/1ShRuse25IY5_c4H4BxtbwKp5FPFtqO2f/preview",
//         collection: 'paper presentation',
//         time1: '10.00am - 3.00pm',
//         day: '04/11/2023',

//     },
//     {
//         eventName: 'Project display',
//         eventDesc: `Project display is the platform which helps to unleash the potential of our students.The objective of this event is to provide platform and encourage the students to exhibit their innovative ideas in the form of working models, prototypes etc.
//         General Rules and Guidelines for expo:

// 1.Each team can have maximum of 1-4 members.

// 2.Any engineering student from any discipline can submit their ideas.

// 3.The competition is open to only undergraduate and postgraduate students.

// 4.Members should have a valid student ID card of their college.

// 5.Multiple project ideas can be submitted, the best ones will be filtered out.

// Important note:
// 1.It should be fully working module.

// 2.All selected participants will receive participation certificate.

// 3.Participants should bring all their requirements to execute their project.

// Selection Criteria:
// 1.Innovation.

// 2.Design (Compactness and the efficiency of work done).

// 3.Efficiency (Performance of said task).

// 4.Relevance with practical need.`,



//         eventOneLine: `Project display is the platform which helps to unleash the potential of our students.The objective of this event is to provide platform and encourage the students to exhibit their innovative ideas in the form of working models, prototypes etc.`,
//         eventCost: 'free',
//         eventContactMail: 'mail',
//         eventContactNumber: 'Number',
//         deadline: '05/04/2023',
//         date: '04/11/2023',
//         collection: 'Project display',
//         posters: ['/events/project display/', 3],
//         time1: '10.00am - 3.00pm',
//         day: '04/11/2023',


//     },
// ]
const fieldEventsDatabase = [
    {
        eventName: 'SIE Trophy',
        eventOneLine: `Inter- department Cricket tournament
        For men only`,
    },
    {
        eventName: `Badminton`,
        eventOneLine: `Intra-college tournament
        For Women only`,
    },
    {
        eventName: `INDCON Cricket`,
        eventOneLine: `Intra-department Cricket tournament
        For men only`,
    },
    {
        eventName: `Volleyball doubles`,
        eventOneLine: `Intra-department Volleyball tournament
        For women only`,
    },
]


const template = {
    eventName: '',
    eventDesc: ``,
    eventOneLine: ``,
    eventCost: '',
    eventContactMail: '',
    eventContactNumber: '',
    deadline: '',
    date: '',
    brochure: "",
    collection: ''
}
const preEventsDataBase = [
    {
        eventName: 'MAD ADS',
        eventOneLine: `Teams will be given a product, they have to create a script for the ad and they have to take an ad within the time limit in a camera and need to send the video.
        The Ads will be evaluated by the judges and prize will be given to the best Ad among them.`,
        deadline: '02/11/2023'
    },
]

const onlineEventsDatabase = [
    {
        eventName: 'Photography',
        eventOneLine: `📸Freeze the time and create everlasting moments📸
        ✨ Participate in the SIGMA'23 Photography Contest and let your lens tell the story!🖼✨ Gear up to capture the extraordinary and unleash your creativity.💥
        
        Make sure you read the rules in the google form provided.
        
        Submission link: https://forms.gle/CCfTDgkMChjR4mud6 `,
        deadline: '02/11/2023'
    },
    {
        eventName: 'Mad Ads',
        eventOneLine: `🚀 Ignite your marketing genius in the SIGMA'23 Mad Ads competition for a one-of-a-kind experience! 🌟 This is your moment to flaunt your skills and embrace the challenge. Be ready to be part of the excitement! 💥

        Make sure you read the rules in the google form provided before submission.
        
        Submission Link: https://forms.gle/5P4wdcW8M2vKYxkL6 `,
        deadline: '02/11/2023'
    },
]

const techEventsDatabase = [
    {
        eventName: `Paper Presentation`,
        eventOneLine: `
        The length of the paper should not exceed 10,000 words and the extended abstract should not exceed 700 words. The paper should not have been published in journals or be presented in any other conferences/ workshops/ symposia. Plagiarism report should be submitted along with the full papers. Plagiarism should not exceed 15%. The extended abstracts are to be sent via e-mail only to 'sieofficial.doie@gmail.com'. Full papers should be submitted only after the acceptance of extended abstracts. All the papers submitted will be blind reviewed by a committee of experts.

        `,
        time1: '1.30pm',
        day: '26/03/2024',
        register:"https://forms.gle/LSNF3ajQRjaAiMMq8",
        contHeight:"700px",
        bodyHeight:"450px"
    },
    {
        eventName: `Quizzical Quest`,
        eventOneLine: `
        Embark yourself into the realm of quizzes...! 💫Explore a myriad of challenging questions, test your knowledge, unravel the words and much more🎊

        🎗Get ready to showcase your intellect, engage in friendly competition, and emerge triumphant in this epic quest. Join us, answer questions, and enjoy the excitement together.
        `,
        // time1: '1.30pm',
        // day: '26/03/2024',
    },
    {
        eventName: `Mind Master`,
        eventOneLine: `
        📝 Ready, set, brainstorm! Join us for Mind Master and unleash your team's creativity💡 in a thrilling mind map challenge. Dare to dream, dare to innovate!
        `,
        // time1: '1.30pm',
        // day: '26/03/2024',
    },
    {
        eventName: `Decision Dilemma`,
        eventOneLine: `
        🔍 Ready to tackle tough choices head-on? 🚀 Decision Dilemma beckons with its adrenaline-fueled mix of quick thinking and persuasive prowess. From analyzing scenarios to sealing partnerships, it's all about making the right moves under pressure. Think your team has what it takes to triumph? Join us and let the games begin! 🔥
        `,
        // time1: '1.30pm',
        // day: '26/03/2024',
    },
    {
        eventName: `Formula Face`,
        eventOneLine: `
        📊 Step into the realm of Formula Face at Indcon 24, where exhilarating challenges await and Microsoft Excel is the hero of the day! 📈 Dive into complex problem-solving, demonstrate your analytical skills, and emerge triumphant in this thrilling journey of data-driven conquest! 💻 Come join us, harness Excel's power, and embark on an adventure brimming with excitement and discovery! 🚀
        `,
        // time1: '1.30pm',
        // day: '26/03/2024',
    },
    {
        eventName: `ML Mania`,
        eventOneLine: `
        ⚠Are you prepared to confront the most formidable technology known to mankind? ❌
        🦾Then seize the chance to delve into the realm of machine learning and 🤖engage in a discourse on the superiority of your prognostications, thereby assessing your true potential.⚡
        
        "A breakthrough in machine learning would be worth ten Microsoft-Bill Gates."🔥
        
        
        🏆Engage in INDCON's ML MANIA to bolster your confidence through the mastery of problem-solving challenges in the domain of Machine Learning.🧑‍💻
                `,
        // time1: '1.30pm',
        // day: '26/03/2024',
        // time2: '11.30A.M-12.30P.M',
    },
    {
        eventName: `ReEnginner`,
        eventOneLine: `
        Join us as we reEngineer⚙ the future with innovation and passion! Let's construct the world together.

        Let's embrace the power of innovation and creativity at the reEngineer event - where ideas💡 are transformed into groundbreaking solutions! 

        #creativity #innovation
        `,
        // time1: '1.30pm',
        // day: '26/03/2024',
        // time2: '11.30A.M-12.30P.M',
    },
]

const nonTechEventsDatabase = [
    {
        eventName: `IPL Auction`,
        eventOneLine: `
        Are you the kind of person who stays up late for IPL matches 🏏 , even if it means sacrificing sleep before a crucial assessment 📝 ? Seize this opportunity to showcase your IPL passion! Join the INDCON's IPL Auction and proudly display your dedication 🧠 among fellow cricket enthusiasts.
        `,
        // time1: '1.30pm',
        // day: '26/03/2024',
        // time2: '11.30A.M-12.30P.M',
    },
    {
        eventName: `Musically Connect`,
        eventOneLine: `
        இசை மழையில் நனைய தயாரா !!!!!!! 🎤
        உங்களுக்காக industrial dept நடத்தும் Musically connect🎺 🧩
        
        Certified fun event!!!!
        Get ready to unwind and have a blast at our fun-filled event! From hilarious games to lively music and everything in between, this is your chance to let loose and make unforgettable memories with your friends🫂.
            
         where every note brings us closer together 🎵🎶
         `,
        // time1: '1.30pm',
        // day: '26/03/2024',
        // time2: '11.30A.M-12.30P.M',
    },
    {
        eventName: `Movie Maze`,
        eventOneLine: `
        In the shadowy depths of Movie Mafia's world🎥, whispers of intrigue dance amidst the flickering light. Dare to unravel the mysteries veiled behind the silver screen's facade, where truth and deception intertwine🎬🍿
        `,
        // time1: '1.30pm',
        // day: '26/03/2024',
        // time2: '11.30A.M-12.30P.M',
    },
    {
        eventName: `Reflex Riddle`,
        eventOneLine: `
        ✨Question: Where fun and thinking collide, in a word game enjoyed far and wide? 🤔
        Answer: Reflex Riddle 😎

        💫Don't forget to join us for the event!💫
        `,
        // time1: '1.30pm',
        // day: '26/03/2024',
        // time2: '11.30A.M-12.30P.M',
    },
    {
        eventName: `Spelllink`,
        eventOneLine: `
        Hey there! 🐝✨ Are you a word wizard ready to spell your way to victory? Play our word game, dive into a world of word puzzles  and let your vocabulary sparkle like never before! Embrace the challenge, ignite your imagination, and conquer the world of words. Ready to dazzle?🏆📚 #SpellinkChallenge
        `,
        // time1: '1.30pm',
        // day: '26/03/2024',
        // time2: '11.30A.M-12.30P.M',
    },
]



export { preEventsDataBase, onlineEventsDatabase, fieldEventsDatabase, techEventsDatabase, nonTechEventsDatabase }