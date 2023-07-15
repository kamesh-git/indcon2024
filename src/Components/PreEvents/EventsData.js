const preEventsDataBase = [
    {
        eventName: 'Paper Presentation',
        eventDesc: `This traditional event gives students the opportunity to present their latest research, ideas and findings on the most trending theme of the time. The event aims to improve coordination and accuracy while also increasing focus, preparatory and presentation skills. The authors are invited to submit their extended abstracts of original unpublished work. The length of the paper should not exceed 10,000 words and the extended abstract should not exceed 700 words. Plagiarism report should be submitted along with the papers. Plagiarism should not exceed 7%. The extended abstracts are to be sent via e-mail only to 'sieofficial23@gmail.com' . Full papers should be submitted only after the acceptance of extended abstracts. All the papers submitted will be blind reviewed by a committee of experts.`,
        eventOneLine: `Papers presented in the Symposium will be evaluated
        by the team of faculty members and industry experts.
        Best papers that are presented will be given Cash
        Awards and Certificates.`,
        eventCost: 'free',
        eventContactMail: 'mail',
        eventContactNumber: 'Number',
        deadline: '31/03/2023',
        date: '12/04/2023',
        brochure: "https://drive.google.com/file/d/1ShRuse25IY5_c4H4BxtbwKp5FPFtqO2f/preview",
        collection: 'paper presentation',
        time1: '10.00am - 3.00pm',
        day: '12/04/2023',

    },
    {
        eventName: 'Project display',
        eventDesc: `Project display is the platform which helps to unleash the potential of our students.The objective of this event is to provide platform and encourage the students to exhibit their innovative ideas in the form of working models, prototypes etc.
        General Rules and Guidelines for expo:

1.Each team can have maximum of 1-4 members.

2.Any engineering student from any discipline can submit their ideas.

3.The competition is open to only undergraduate and postgraduate students.

4.Members should have a valid student ID card of their college.

5.Multiple project ideas can be submitted, the best ones will be filtered out.

Important note:
1.It should be fully working module.

2.All selected participants will receive participation certificate.

3.Participants should bring all their requirements to execute their project.

Selection Criteria:
1.Innovation.

2.Design (Compactness and the efficiency of work done).

3.Efficiency (Performance of said task).

4.Relevance with practical need.`,



        eventOneLine: `Project display is the platform which helps to unleash the potential of our students.The objective of this event is to provide platform and encourage the students to exhibit their innovative ideas in the form of working models, prototypes etc.`,
        eventCost: 'free',
        eventContactMail: 'mail',
        eventContactNumber: 'Number',
        deadline: '05/04/2023',
        date: '12/04/2023',
        collection: 'Project display',
        posters: ['/events/project display/', 3],
        time1: '10.00am - 3.00pm',
        day: '12/04/2023',


    },
]
const preEventsDataBaseDummy = [
    {
        eventName: 'Flashmob',
        eventDesc: 'Flashmob',
        eventCost: 'free',
        eventContactMail: 'mail',
        eventContactNumber: 'Number',
    },
    {
        eventName: 'Marathon',
        eventDesc: 'Marathon',
        eventCost: 'free',
        eventContactMail: 'mail',
        eventContactNumber: 'Number',
    },
    {
        eventName: 'Talentina',
        eventDesc: 'Talentina',
        eventCost: 'free',
        eventContactMail: 'mail',
        eventContactNumber: 'Number',
    },
    {
        eventName: 'Fire safety demo',
        eventDesc: 'Fire safety demo',
        eventCost: 'free',
        eventContactMail: 'mail',
        eventContactNumber: 'Number',
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

const onlineEventsDatabase = [
    {
        eventName: 'Poster Play',
        eventOneLine: `Design a poster on any of the following social issues

        Digital literacy, Gender Equality, Sustainable living, Nuclear disarmament, Zero Hunger, Obesity, No smoking, Alcohol -injurious to health, Blood donation, Suicide prevention
`,
        deadline: '07/04/2023'
    },
    {
        eventName: 'Reels contest',
        eventOneLine: `Theme : ' Dance and Dialogue'
        Dance, the movement of the body in a rhythmic way, usually to music and within a given space, for the purpose of expressing an idea or emotion releasing energy, or simply taking delight in the movement itself.                
        `,
        deadline: '07/04/2023'
    },
]
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
const techEventsDatabase = [
    {
        eventName: `Word Ventures`,
        eventOneLine: `The event intends to build public speaking skills and spontaneity in students. It also checks their level of technical and general knowledge. `,
        time1: '09.30am - 12.00pm',
        time2: '1.30pm-3.00pm',
        day: '12/04/2023',
    },
    {
        eventName: `Rookie Genius`,
        eventOneLine: `Pen & Paper event on trending technology, current affairs, market scenario and engineering will be presented to the player in three sections— crosswords / fact or not / guesstimate.`,
        time1: '09.30am - 12.00pm',
        time2: '02.00pm-04.00pm',
        day: '12/04/2023',
    },
    {
        eventName: `Stock bazaar`,
        eventOneLine: `To maximise return on investment, prudently invest the provided funds in the greatest way feasible. Portfolio diversification for risk management will also receive weighting in the evaluation. Use the information that is readily available to the public from a variety of sources, such as the company website and financial reports. For your investments, use technical and fundamental analysis skills carefully.`,
        time1: '10.00am - 03.30pm',
        day: '13/04/2023',
    },
    {
        eventName: `Market Philia`,
        eventOneLine: `The event is intended to improve the marketing knowledge and skills (communication and creativity, etc) of the participants.`,
        time1: '10.00am - 12.00pm',
        time2: '1.30pm-3.00pm',
        day: '13/04/2023',
    },
    {
        eventName: `Innovate`,
        eventOneLine: `The event focuses on cultivating creative thinking in the students.`,
        time1: '09.00am - 12.00pm',
        time2: '01.30pm-03.00pm',
        day: '13/04/2023',
    },
]

const nonTechEventsDatabase = [
    {
        eventName: `Save the egg`,
        eventOneLine: `The participants' task is to create a model out of the provided egg and predetermined materials that will withstand being dropped from a height without breaking.  The participants' creativity, teamwork and time management will all be improved by this event.`,
        time1: '09.30am - 12.15pm',
        time2: '01.30pm-04.00pm',
        day: '12/04/2023',
    },
    {
        eventName: `FIT Fest`,
        eventOneLine: `Physical fitness tests (both skill and health based tests) and participants who fall under excellent category according to norms get gift hampers! `,
        time1: '04.00pm - 06.00pm',
        day: '12/04/2023',
    },
    {
        eventName: `Mime Time`,
        eventOneLine: `Mime Time is a performance art form in which the performer uses body movements, facial expressions, and gestures to convey a story or message without the use of words or props.`,
        time1: '09.30am - 12.00pm',
        day: '13/04/2023',
    },
    {
        eventName: `IPL Auction`,
        eventOneLine: `IPL Auction is a fun event for all those Cricket fans out there! This event judges the participants’ Cricket knowledge through sweat-breaking rounds.`,
        time1: '02.00pm - 04.00pm',
        time2: '10.00pm-12.00pm',
        day: '12/04/2023 & 13/04/2023',
    },
    {
        eventName: `Fun zone`,
        eventOneLine: `A collection of mini fun events!`,
        time1: '10.00am - 03.00pm',
        day: '12/04/2023 & 13/04/2023',
    },
    {
        eventName: `Bomb b’o’ard`,
        eventOneLine: `This event is organized, for fun and interaction between friends.`,
        time1: '10.00am - 03.00pm',
        day: '12/04/2023 & 13/04/2023',
    },
]



export { preEventsDataBase, onlineEventsDatabase, fieldEventsDatabase, techEventsDatabase, nonTechEventsDatabase }