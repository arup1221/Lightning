export const cardData = [
    {
        id: 1,
        image: "/icon1.png",
        alt: "Lightning Fast Speeds",
        heading: "Lightning Fast Speeds",
        description: "Our proxies are hosted on dedicated servers with 10GBps Network Speed, assuring a fast response time and no rate limits."
    },
    {
        id: 2,
        image: "/icon2.png",
        alt: "Global Proxies",
        heading: "Global Proxies",
        description: "Our proxies network contains millions of unique IP addresses from 150+ countries and 1000+ cities. Web scraping has never been so easy since us."
    },
    {
        id: 3,
        image: "/icon3.png",
        alt: "Diversity",
        heading: "Diversity",
        description: "Be it Datacenter, Residential ISP, or IPv6 Proxies, we have everything to scale your business up."
    },
    {
        id: 4,
        image: "/icon4.png",
        alt: "Enhanced Privacy",
        heading: "Enhanced Privacy",
        description: "We have a strict no log policy; your privacy is a top priority for us."
    },
    {
        id: 5,
        image: "/icon5.png",
        alt: "Priority Support",
        heading: "Priority Support",
        description: "We are available 24/7/365, even on holidays, to support you every step of the way, in case you need it."
    },
    {
        id: 6,
        image: "/icon6.png",
        alt: "User-Friendly Dashboard",
        heading: "User-Friendly Dashboard",
        description: "With our advanced featured dashboard, you can easily manage your plans and keep track of your proxy usage."
    },
];



export function getQuestionForItem(item: string): string {
    const questions = {
        'item-1': "What payments method do you accept?",
        'item-2': "Do you provide trials before purchasing any plans?",
        'item-3': "Are there any limitations on proxies?",
        'item-4': "Do you offer proxies based on time or based on GBs?",
        'item-5': "Can I pay with Credit Card/PayPal?",
    }
    return questions[item as keyof typeof questions]
}

export function getContentForItem(item: string): string {
    const contents = {
        'item-1': "Phasellus accumsan augue augue, ac aliquam odio porttitor ut. Ut sollicitudin neque lectus. Pellentesque varius eu ex a imperdiet. Mauris sed eleifend ex. Nam elementum viverra ex, sit amet convallis felis ultrices interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        'item-2': "Yes, we offer a 7-day free trial for all our plans. During this period, you can test all features and determine which plan best suits your needs.",
        'item-3': "While we strive to provide unlimited access, we do have fair usage policies in place to ensure optimal performance for all users. Specific limitations vary by plan and are detailed in our terms of service.",
        'item-4': "We offer both time-based and data-based proxy plans. You can choose the option that best fits your usage patterns and requirements.",
        'item-5': "Yes, we accept both credit card and PayPal payments. We ensure secure transactions through encrypted payment gateways for your peace of mind.",
    }
    return contents[item as keyof typeof contents]
}