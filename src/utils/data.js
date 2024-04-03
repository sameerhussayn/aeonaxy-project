const categories = ['All', 'Popular', 'Extensions & Apps' , 'Calendars',
'Sales & CRM',
'Video Conferencing',
'Marketing',
'Recruiting & ATS',
'Payments',
'Analytics',
'API & Connectors',
'Email Messaging',
'Embed Calendly',
'Other Integrations']

const intergrations = [
    {
        title: 'Zoom',
        tagLine: 'Add your Zoom link to every Calendly event automatically.',
        imgUrl: 'https://images.ctfassets.net/k0lk9kiuza3o/23iy41NdhiEpf1LEIEj8N6/c1f66cb1ca7a9bc48dfed5335bce594e/Zoom.svg'
    },
    {
        title: 'Salesforce',
        tagLine: 'Calendly takes the work out of updating Salesforce so you can sell more.',
        imgUrl: 'https://images.ctfassets.net/k0lk9kiuza3o/10mFB6Lw4elL2kPZqwfl7f/2ac0b1a1f9dfaf9e4a8caa3a7944065b/Salesforce.svg'
    },
    {
        title: 'HubSpot',
        tagLine: 'Keep HubSpot records up to date and add instant, account-matched scheduling to your HubSpot forms.',
        imgUrl: 'https://images.ctfassets.net/k0lk9kiuza3o/2APzJ2NNOwzzKC0mZam9mB/3158e0780a9db488ff243f5f08a48cef/hubspot.svg'
    },
   
    {
        title: 'Microsoft Teams Chat',
        tagLine: 'Get Calendly notifications, directly in Microsoft Teams chat.',
        imgUrl: 'https://images.ctfassets.net/k0lk9kiuza3o/g0x5VKS8AvnjqKWOKASv6/58af893490320b866de7826dac58c3fd/Teams.svg'
    },
    {
        title: 'Loom',
        tagLine: 'Allow your viewers to schedule meetings directly from your Loom videos.',
        imgUrl: 'https://images.ctfassets.net/k0lk9kiuza3o/5zQ16B3QJKnKvtwtSLw2o2/c50467c0593b3a58f2d56fad99e5484c/loom_icon_color_1.svg'
    },
    {
        title: 'Gong',
        tagLine: 'One-click access to Calendly directly from Gong Engage.',
        imgUrl: 'https://images.ctfassets.net/k0lk9kiuza3o/k5u1aoWgLdVtFfc4tsyg3/cf5a1fde1257d49e42041b3187c75090/gong-logo__1_.svg'
    },
    {
        title: 'Typeform',
        tagLine: 'Gather, qualify, and schedule.',
        imgUrl: 'https://images.ctfassets.net/k0lk9kiuza3o/tFi5S5uhxfOROMr1DF6Eq/71cabfedf0f8781c4d98cf403556006d/Typeform.svg'
    },
    {
        title: 'Notion',
        tagLine: 'Bring Calendly booking pages into Notion.',
        imgUrl: 'https://images.ctfassets.net/k0lk9kiuza3o/2fg0lND6En0iz8BXYjMagm/eb4d9bdfe4c361e16d2fa8639238aae3/notion-logo.svg'
    },
    {
        title: 'Webex',
        tagLine: 'Connect from anywhere and eliminate administrative work.',
        imgUrl: 'https://images.ctfassets.net/k0lk9kiuza3o/4DaLXMiJ2kwAv3qpPblkwG/3e2dcf1bf1a4b80858cd321ad67691b8/webex-logomark-01.svg'
    },
    {
        title: 'Slack',
        tagLine: 'Automate smarter workflows and incorporate Calendly right into your organization\'s Slack channels.',
        imgUrl: 'https://images.ctfassets.net/k0lk9kiuza3o/tyMQf8oDIXPzJCjtDrQuL/1a61afdbf054adc5e684e8c3625f6621/Full_logo.svg'
    },
    {
        title: 'Microsoft Teams',
        tagLine: 'Automatically include your Microsoft Teams Conferencing link in your Calendly events.',
        imgUrl: 'https://images.ctfassets.net/k0lk9kiuza3o/g0x5VKS8AvnjqKWOKASv6/58af893490320b866de7826dac58c3fd/Teams.svg'
    },
    {
        title: 'Zapier',
        tagLine: 'Connect Calendly to your other tools and automate your workflows.',
        imgUrl: 'https://images.ctfassets.net/k0lk9kiuza3o/7IU0UscUOSuao8Il3Hpr1c/ab75dff98ea249357720528ebf141b3b/zapier-logo_black.svg'
    },
    {
        title: 'Marketo',
        tagLine: 'Instantly schedule qualified website leads- directly from your Marketo forms.',
        imgUrl: 'https://images.ctfassets.net/k0lk9kiuza3o/5iAeUQQE6OlXKG4DAFk0bP/0870fc5102ca202196104d44400f70af/marketo-icon-70x70.svg'
    },
    {
        title: 'PayPal',
        tagLine: 'Simplify billing and reduce no-shows with an integrated PayPal account.',
        imgUrl: 'https://images.ctfassets.net/k0lk9kiuza3o/263kzYvoG2EGkeRpsrnkrA/b4ff427c85ce29d44a2af026691e985e/Logomark.svg'
    },
    {
        title: 'Intercom',
        tagLine: 'Schedule meetings with leads and customers right from Intercom Messenger',
        imgUrl: 'https://images.ctfassets.net/k0lk9kiuza3o/5iPdwT125pfQPNafr27mny/e866d175ee0169c23f90a3e438b65b21/intercom.svg'
    },
    {
        title: 'Stripe',
        tagLine: 'Simplify billing and reduce no-shows with an integrated Stripe account.',
        imgUrl: 'https://images.ctfassets.net/k0lk9kiuza3o/3WKUhfweGCPQqkgx9wLCY5/c54406a32963407e61d777a127806cc3/stripe.svg'
    },
    {
        title: 'Google Analytics',
        tagLine: 'Improve campaign tracking using Calendly with your Google Analytics account.',
        imgUrl: 'https://images.ctfassets.net/k0lk9kiuza3o/48vpHQswyLuVAX03A00yAQ/bb1298c9141c98a0d7760cb317b118db/googleanlaytics.svg'
    }, {
        title: 'Calendly APIs',
        tagLine: 'Leverage Calendly\'s APIs for custom Calendly integrations within your product.',
        imgUrl: 'https://images.ctfassets.net/k0lk9kiuza3o/2Gawt22zMm75SSOiK0FcrR/5c9a1cad852c0b3e6c16f101f7701d20/Calendly_API.svg'
    }, {
        title: 'Chrome',
        tagLine: 'Use Calendly while you\'re on the web, without switching tabs.',
        imgUrl: 'https://images.ctfassets.net/k0lk9kiuza3o/1iXaOfSTG4LH14hl3jhgLV/9c262e7842e1e78a9e595a4477ecde7d/Chrome.svg'
    },
]
// 
const footerLinks = {
    About: ['About Calendly', 'Contact Sales' ,'Newsroom' ,'Careers',  'Security' ],
    Solutions: ['Customer Success' , 'Sales' , 'Recruiting' , 'Information Technology','Marketing' ],
    'Popular Features' : ['Embed Calendly', 'Availability' ,'Sending Notifications', 'Using Calendly Mobile' ], 
    Support: ['Help Center' , 'Video Tutorials', 'Cookie Settings'],
    'Add-Ons' : ['Download for Chrome', 'Download for Firefox'],
    Developers: ['Developer Tools']
}
const questions = ['What are Calendly apps?', 'What are Calendly integrations?', 'How do I install and use integrations?', 'How can I request a new integration?', 'Want to build a Calendly integration? Learn about our API.' ]
export {categories, intergrations, questions, footerLinks}