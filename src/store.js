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
    ]
})