import {projectDataType} from "../Types";
import moneyTracker from "../Images/MoneyTracker.jpg"
import ticketingMobile from "../Images/TicketingMobile.jpg";
import ticketingWeb from "../Images/TicketingWeb.jpg";

export const projects:projectDataType[] = [
    {
        image:moneyTracker,
        name:'Money Tracker',
        description:'An Android Application that helps the user to track the income and expenses ',
        technology:[
            'Java',
            'Android',
            'Firebase',
            'Social Authentication'
        ],
        buttonText:'Download Link',
        link:''
    },
    {
        image:ticketingWeb,
        name:'Ticketing System Web',
        description:'A FullStack Web Application to book tickets for the public buses',
        technology:[
            'HTML',
            'CSS',
            'Javascript',
            'Typescript',
            'Nodejs',
            'MongoDB',
            'Twillio',
            'Custom Authentication System',
            'Google Maps'
        ],
        buttonText:'Code Link',
        link:'https://github.com/h4k5r/Ticketing-Web-FrontEnd'
    },
    {
        image:ticketingMobile,
        name:'Ticketing System Mobile App',
        description:'An Android Application to book tickets for the public buses',
        technology:[
            'Java',
            'Android',
            'Firebase',
            'Google Maps API',
            'Social Authentication'
        ],
        buttonText:'Code Link',
        link:''
    },
]