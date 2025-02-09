import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
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
    firstName: "Austin",
    lastName: "Ellerman",
    initials: "ae", // the example uses first and last, but feel free to use three or more if you like.
    position: "an Aspiring Data Analyst",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the US'
        },
        {
            emoji: "💼",
            text: "this is a test"
        },
        {
            emoji: "📧",
            text: "ellermansteam@hotmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/ellerman4",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Austin. I'm an aspiring self taught data analyst. I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
        {
            proficientWith: ['python', 'pandas/numpy', 'sql', 'excel', 'github', 'tableau', 'photoshop', 'google 🧑🔍'],
            exposedTo: ['javascript', 'html/css', 'R', 'tensorflow']
        }
    ,
    hobbies: [
        {
            label: 'learning',
            emoji: '📖'
        },
        {
            label: 'comedy',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'computers',
            emoji: '💻'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Portfolio Project",
            live: "https://ellerman4.github.io/ellerman4_portfolio/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/ellerman4/ellerman4_portfolio", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Surf Stats Dashboard",
            live: "https://share.streamlit.io/ellerman4/surf-stats-dashboard/quickstart.py",
            source: "https://github.com/ellerman4/surf-stats-dashboard",
            image: mock2
        },
        {
            title: "CS:GO Weapons Stats",
            live: "https://ellerman4-csgo-weapons-dashboard-app-l3k5mr.streamlitapp.com/",
            source: "https://github.com/ellerman4/csgo-weapons-dashboard",
            image: mock3
        },
        {
            title: "Delaunay Triangulation Art",
            live: "https://share.streamlit.io/ellerman4/python_art_deployable1/art.py",
            source: "https://github.com/ellerman4/python_art_deployable",
            image: mock4
        },
        {
            title: "Placeholder",
            live: "https://github.com/ellerman4",
            source: "https://github.com/ellerman4",
            image: mock5
        }
    ]
}
