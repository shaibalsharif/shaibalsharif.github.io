import liberty from '../images/portfolio/liberty.jpg'
import shutterbug from '../images/portfolio/shutterbug.jpg'
import clouds from '../images/portfolio/clouds.jpg'
import beetle from '../images/portfolio/beetle.jpg'
import lighthouse from '../images/portfolio/lighthouse.jpg'
import salad from '../images/portfolio/salad.jpg'
import m_liberty from '../images/portfolio/modals/m-liberty.jpg'
import m_shutterbug from '../images/portfolio/modals/m-shutterbug.jpg'
import m_clouds from '../images/portfolio/modals/m-clouds.jpg'
import m_beetle from '../images/portfolio/modals/m-beetle.jpg'
import m_lighthouse from '../images/portfolio/modals/m-lighthouse.jpg'
import m_salad from '../images/portfolio/modals/m-salad.jpg'


export const TITLE = ['FRONT-END DEVELOPER', 'Web DEVELOPER', 'React Developer', 'Ui/Ux Designer']
export const SOCIALS = [
    { name: 'facebook', icon: 'fa fa-facebook', link: 'link', color: '#ffffff' },
    { name: 'behance', icon: 'fa fa-behance', link: 'link', color: '#ffffff' },
    { name: 'twitter', icon: 'fa fa-twitter', link: 'link', color: '#ffffff' },
    { name: 'dribbble', icon: 'fa fa-dribbble', link: 'link', color: '#ffffff' },
    { name: 'instagram', icon: 'fa fa-instagram', link: 'link', color: '#ffffff' },]

export const INTRODUCTION = {
    title: 'about', main: 'Let me introduce myself.',
    description: `Front End Developer with five years of experience working with JavaScript,
         HTML/CSS to deliver exceptional customer experiences. Adept at contributing to a highly collaborative work environment,
          finding solutions, and determining customer satisfaction.`,
    profile: {
        title: 'profile', description: `Front End Developer with five years of experience working with JavaScript,
         HTML/CSS to deliver exceptional customer experiences. Adept at contributing to a highly collaborative work environment,
          finding solutions, and determining customer satisfaction.`,
        content: {
            fullname: 'Mohshin Aahmed Sharif Shaibal', birth_date: 'June 25, 1998',
            job: 'Freelancer, Frontend Developer', website: 'shaibal.vercel.app', email: 'shaibalsharif@gmail.com'
        }
    },
    skills: {
        title: 'skills', description:  `Front End Developer with five years of experience working with JavaScript,
        HTML/CSS to deliver exceptional customer experiences. Adept at contributing to a highly collaborative work environment,
         finding solutions, and determining customer satisfaction.`,
        content: { HTML5: '90%', CSS3: '80%', JQUERY: '75%', 'React.js': '70%', Typescript: '95%', Tailwind:'80%', 'Node.js':'50%' }
    }

}
export const RESUME = {
    title: 'resume', main: 'More of my credentials.',
    description: 'Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem ipsum Consectetur ut in in eu do.',
    work: {
        title: 'Work Experience', icon: 'fa fa-briefcase',
        content: [{
            title: 'UI Designer', duration: 'July 2015 - Present', place: 'Awesome Studio',
            description: 'Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.',
        },
        {
            title: 'Front-end Developer', duration: 'July 2014 - June 2015', place: 'Super Cool Agency',
            description: 'Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.',
        },
        {
            title: 'Web Designer', duration: 'May 2013 - June 2014', place: 'Great Designs Studio',
            description: 'Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.',
        },
        ]
    },
    education: {
        title: 'Education', icon: 'fa fa-graduation-cap',
        content: [{
            title: 'Master Degree', duration: 'July 2015 - Present', place: 'University of Life',
            description: 'Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.',
        },
        {
            title: 'Bachelor Degree', duration: 'July 2014 - June 2015', place: 'State Design University',
            description: 'Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.',
        },
        {
            title: 'Bachelor Degree', duration: 'May 2013 - June 2014', place: 'Design College',
            description: 'Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.',
        },
        ]
    }
}
export const PORTFOLIO = {
    title: 'PORTFOLIO',
    main: 'Check Out Some of My Works.',
    description: 'Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem ipsum Consectetur ut in in eu do.',
    content: [
        {
            title: 'Liberty', sub: 'graphic design', description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
            photo: liberty, photo_m: m_liberty
            , modalid: 'modal-01'
        },
        {
            title: 'shutterbug', sub: 'web design', description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
            photo: shutterbug, photo_m: m_shutterbug, modalid: 'modal-02'
        },
        {
            title: 'clouds', sub: 'web design', description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
            photo: clouds, photo_m: m_clouds
            , modalid: 'modal-03'
        },
        {
            title: 'beetle', sub: 'branding', description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
            photo: beetle, photo_m: m_beetle
            , modalid: 'modal-04'
        },
        {
            title: 'lighthouse', sub: 'web development', description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
            photo: lighthouse, photo_m: m_lighthouse, modalid: 'modal-05'
        },

        {
            title: 'salad', sub: 'branding', description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
            photo: salad, photo_m: m_salad
            , modalid: 'modal-06'
        },
    ]
}

export const SERVICES = {
    title: 'SERVICES',
    main: 'What Can I Do For You?',
    description: 'Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem ipsum Consectetur ut in in eu do.',
    content: [
        { title: 'webdesign', icon: 'icon-earth', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.' },
        { title: 'web development', icon: 'icon-window', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.' },
        { title: 'Branding', icon: 'icon-paint-brush', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.' },
        { title: 'UI/UX Design', icon: 'icon-toggles', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.' }, { title: 'webdesign', icon: '', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.' },
        { title: 'Graphics Design', icon: 'icon-image', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.' },
        { title: 'consultancy', icon: 'icon-chat', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.' }, { title: 'webdesign', icon: '', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.' },
    ]
}


export const STATS = [
    { icon: 'icon-pencil-ruler', count: '1500', text: 'PROJECTS COMPLETED' },
    { icon: 'icon-users', count: '900', text: 'HAPPY CLIENTS' },
    { icon: 'icon-badge', count: '200', text: 'AWARDS RECEIVED' },
    { icon: 'icon-light-bulb', count: '120', text: 'CRAZY IDEAS' },
    { icon: 'icon-cup', count: '1500', text: 'COFFEE CUPS' },
    { icon: 'icon-clock', count: '7200', text: 'HOURS' },
]
export const CONTACT = {
    title: 'contact',
    main: 'I\'d Love To Hear From You.',
    description: 'Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem ipsum Consectetur ut in in eu do.',
    content: [
        { name: 'name', type: 'text' },
        { name: 'email', type: 'email' },
        { name: 'subject', type: 'text' },
        { name: 'message', type: 'textfield' },
    ],
}
export const CONTACT_DETAILS = {
    address: {
        title: 'where to find me',
        icon: 'icon-pin',
        content: ['1600 Amphitheatre Parkway', 'Mountain View, CA',
            '94043 US'],
    },
    email: {
        title: 'Email Me At',
        icon: 'icon-mail',
        content: ['someone@kardswebsite.com', 'info@kardswebsite.com'],
    },
    phone: {
        title: 'Call Me At',
        icon: 'icon-phone',
        content: ['Phone: (+63) 555 1212', 'Mobile: (+63) 555 0100',
            'Fax: (+63) 555 0101'],
    }
}
