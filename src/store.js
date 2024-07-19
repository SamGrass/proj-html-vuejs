import { reactive } from "vue";

export const store = reactive({
    sponsorList: [
        {
            imageUrl: '/sponsor1.png',
        },
        {
            imageUrl: '/sponsor2.png',
        },
        {
            imageUrl: '/sponsor3.png',
        },
        {
            imageUrl: '/sponsor4.png',
        },
        {
            imageUrl: '/sponsor5.png',
        },
        {
            imageUrl: '/sponsor6.png',
        }
    ],
    teamList: [
        {
            imageUrl: '/team1.png',
            name: 'Robert Coleman',
            role: 'Owner & Creative Director'
        },
        {
            imageUrl: '/team2.png',
            name: 'Don Woods',
            role: 'Administrator'
        },
        {
            imageUrl: '/team2.png',
            name: 'Tomas Nash',
            role: '2d animator & Compositor'
        },
        {
            imageUrl: '/team4.png',
            name: 'Hector Vargas',
            role: 'Project Lead & Senior Animator'
        },
    ],
    serviceList: [
        {
            image: '/process1.png',
            title: 'Motion Graphics',
            paragraph: 'The best in the business, served to your audience\'s eyeballs.'
        },
        {
            image: '/process2.png',
            title: 'Character Design',
            paragraph: 'The best in the business, served to your audience\'s eyeballs. '
        },
        {
            image: '/smart1.png',
            title: 'Storyboards',
            paragraph: 'The best in the business, served to your audience\'s eyeballs. '
        },
        {
            image: '/smart2.png',
            title: 'Animatics',
            paragraph: 'The best in the business, served to your audience\'s eyeballs.'
        },
        {
            image: '/smart3.png',
            title: 'Film and TV',
            paragraph: 'The best in the business, served to your audience\'s eyeballs.'
        },
        {
            image: '/smart1.png',
            title: 'Script writing',
            paragraph: 'The best in the business, served to your audience\'s eyeballs.'
        },
    ],
    processList: [
        {
            image: '/process1.png',
            title: 'Scripting',
            paragraph: 'We\'ll take your idea and create a technical script which consists of action notes and animation descriptions'
        },
        {
            image: '/process2.png',
            title: 'Pre-Production',
            paragraph: 'We\'ll take your idea and create a technical script which consists of action notes and animation descriptions'
        },
        // {
        //     image: '/process1.png',
        //     title: 'Scripting',
        //     paragraph: 'We\'ll take your idea and create a technical script which consists of action notes and animation descriptions'
        // },
        // {
        //     image: '/process2.png',
        //     title: 'Pre-Production',
        //     paragraph: 'We\'ll take your idea and create a technical script which consists of action notes and animation descriptions'
        // },
    ]
})