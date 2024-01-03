import yo from "../img/yo.png"


/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(147, 149, 196), rgb(228, 161, 117)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */
 
export const info = {
    firstName: "Santiago", 
    lastName: "Martinez", 
    initials: ":", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Backend Developer",
    selfPortrait: yo, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by Quindiano coffee' 
        },
        { 
            emoji: '🌎',
            text: 'based in the CO'
        },
        {
            emoji: "💼",
            text: "Systems Engineer" 
        },
        {
            emoji: "📧",
            text: "ipfixbala@gmail.com"
        }
    ], 
    socials: [
        {
            link: "https://www.facebook.com/santiago.martinezayala.52/",
            icon: 'fa fa-facebook',
            label: 'facebook' 
        },
        {
            link: "https://www.instagram.com/fixbala/?hl=es-la", 
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/fixbala", 
            icon: "fa fa-github", 
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/santiago-martinez-ayala/",
            icon: "fa fa-linkedin",
            label: 'linkedin' 
        } 
       

    ],
    bio: "Hello! I am Santiago. I am a Systems Engineer and Solid computing backend development experience, specialized in the creation and solution optimization efficient and scalable. Outstanding for the skill in the use of technologies such as Java, Go, Spring Boot, Python and SQL for building robust systems and reliable. Committed to the programming best practices and with a constant capacity of learning and adaptation to new technological trends.",
    skills: 
        {   
            proficientWith: ['Javascript','Go','Bootstrap','Django','Postgresql','Microsoft Azure','MongoDB','MySQL','Spring Boot','Google Cloud','Aws','Git','Github'], 
            exposedTo: ['Java'  ,  'python', ' '] 
        }  
    ,
    hobbies: [
        {
            label: 'Soccer', 
            emoji: '⚽'
           
        },
        {
            label: 'Movies', 
            emoji: '🎥'
        }, 
        {
            label: 'Reading',
            emoji: '📖'
        },
        {
            label: 'Sport',
            emoji: '🏃'
        },
        {
            label: 'Dance', 
            emoji: '🕺'
           
        },
        {
            label: 'Travel', 
            emoji: '✈️'
        },
        {
            label: 'Technology', 
            emoji: '💻' 
        } 

        
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Detector de Objetos",   
            source: "https://github.com/fixbala/detector" 
        },
        { 
            title: "Reservacion de Hotel", 
            source: "https://github.com/fixbala/ReservacionHotel"
            
        },
        {
            title: "Ecommerce", 
            source: "https://github.com/fixbala/EcommerceFinal"
        },
        {
            title: "Admin parqueadero",  
            source: "https://github.com/fixbala/GestionParqueadero"
        },
        {
            title: "Chatbot", 
            source: "https://github.com/fixbala/chatbot"
        },
        {
            title: "Sistema de Cine",
            source: "https://github.com/fixbala/Unicine", 
        }
    ]
}