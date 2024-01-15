


export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/", key: "about", label: "About" },
  { href: "/", key: "services", label: "Services" },
  { href: "/", key: "contact", label: "Contact" },

];


export const SERVICES = [
  {
    title: "Wedding",
    images: [
      { src: "/weddingPic.png", alt: "" },
      { src: "/weddingPic1.png", alt: "" },
      { src: "/weddingPic2.png", alt: "" },
      { src: "/weddingPic3.png", alt: "" },
      { src: "/weddingPic4.png", alt: "" },
    ],
    videos: [
      { src: "weddingVideo1.mp4", type: "video/mp4" },
      { src: "weddingVideo2.mp4", type: "video/mp4" },
      { src: "weddingVideo3.mp4", type: "video/mp4" },

    ],
    buttonLabel: "Details",
    href: "/service1",
    key: "wedding",
    details: {
      image: {
        src : "/WeddingEventDetailsPic.jpeg",
        alt : "image of a details pic"
      },
      description: "We assure you that we'll arrange the best catering services, wedding decorations, and everything necessary for a successful wedding. Through our connections, you can avail discounts on all wedding essentials. All of this will be provided at a reasonable price, unmatched anywhere else.",
      button: "Book Now",
      bulletPoints: [
        { title: "Travel and Accommodation Assistance", icon: "icon1.png", message: "We'll assist the couple and their guests with travel and accommodation arrangements. We'll provide information about the best nearby hotels with discounts." },
        { title: "Logistics Planning", icon: "icon2.png", message: "We'll coordinate transportation for the bridal party and make any other necessary arrangements." },
        { title: "Vendor Coordination", icon: "icon2.png", message: "Get details about the best photographers, catering services, and more at the destination, with exclusive discounts." },
        { title: "Wedding Design and Decor", icon: "icon2.png", message: "We'll work with the couple and their family to create the wedding design, providing samples and all the necessary information." },
        { title: "On-Site Coordination", icon: "icon2.png", message: "On the wedding day, we'll ensure everything runs smoothly, from the ceremony to the reception, with on-site coordination." },
        { title: "Photography and Videography", icon: "icon2.png", message: "Our connections with top photographers and videographers ensure a variety of options tailored to your needs." },

      ],
    },
  },

  {
    title: "Birthday",
    images: [{ src: "/birthdayPic.png", alt: "" },
    { src: "/birthdayPic2.png", alt: "" },
    { src: "/birthdayPic3.png", alt: "" },
    ],
    videos: [
      { src: "birthdayVideo.mp4", type: "birthdayVideo1.mp4" },

    ],
    buttonLabel: "Details",
    href: "/service2",
    key: "birthday",
    details: {
      image: {
        src : "/BirthdayEventDetailsPic.png",
        alt : "image of a details pic"
      },
      description: "We assure you that we will arrange everything for a fantastic birthday party, including catering services, decorations, and themes. We have connections that can get you discounts on all the necessary items for the birthday celebration. All of this will be provided at a reasonable price, and you won't find a better deal anywhere else.",
      button: "Book Now",
      bulletPoints: [
        { title: "Theme Development", icon: "icon1.png", message: "We'll work together with you to choose a theme for the birthday party, and all designs, coordination, and decorations will be based on the selected theme." },
        { title: "Venue Setup", icon: "icon2.png", message: "We'll handle the setup and decoration of the venue, including chairs, tables, and all essentials for the party." },
        { title: "Entertainment and Activities", icon: "icon2.png", message: "We'll organize entertainment options like DJs, live bands, magicians, and other performers at discounted rates. Interactive games will be tailored to the age group and preferences of your guests." },
        { title: "Catering Services", icon: "icon2.png", message: "Our catering services are top-notch and customizable based on your preferences, considered the best among all services available." },
        { title: "Invitations Management", icon: "icon2.png", message: "We'll design and send out invitations, managing and keeping track of guest lists." },
        { title: "Cake and Dessert Coordination", icon: "icon2.png", message: "Choose from the best bakeries with discounts for your cake and dessert needs." },
        { title: "Photography and Videography", icon: "icon2.png", message: "Our connections with top photographers and videographers ensure a variety of options tailored to your needs." },
        { title: "Gifts and Favours", icon: "icon2.png", message: "We'll assist you in selecting gifts and party favours for your guests." },





      ],
    },
    
  },

];

export const BookNowDefaultValues = {
  name: "",
  phoneNumber: "",
  budget: "",
  category: "",
  requirements: "",
  startDateTime: new Date(),
  endDateTime: new Date(),
  guestsNumber: "",
}

export const EventCategory = [
  {id:"wedding", title: "Wedding"},
  {id:"birthday", title: "Birthday Party and Baby Shower"},
  {id:"sangeet", title: "Sangeet"},
  {id:"Haldi", title: "Haldi and Mehendi Ceremony"},
  {id:"cermony", title: "Ring Ceremony"},






]

