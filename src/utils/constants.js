const GOOGLE_API_KEY="AIzaSyAeWu3_YOkhWyJRaSODxVlFd3LYhb9Jjso";


export const YOUTUBE_VIDEOS_API=
 "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+ GOOGLE_API_KEY;


export const YOUTUBE_SEARCH_API="https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";


export const commentsData=[
    {
        name:"Naruto Uzumaki",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero",
        replies:[],
    },

    {
        name:"Tsunade Sama",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero",
        replies:[
            {
                name:"Master Jiraya",
                text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero",
                replies:[],
            },
            {
                name:"Kakashi Hatake",
                text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero",
                replies:[
                    {
                        name:"Hokage Sama",
                        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero",
                        replies:[
                            {
                                name:"Guy Sensei",
                                text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero",
                                replies:[
                                    {
                                        name:"Orochimaru",
                                        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero",
                                        replies:[  {
                                            name:"Naruto Uzumaki",
                                            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero",
                                            replies:[  {
                                                name:"Naruto Uzumaki",
                                                text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero",
                                                replies:[],
                                            },],
                                        },
                                        {
                                            name:"Sakura Chan",
                                            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero",
                                            replies:[],
                                        },
                                    
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },

    {
        name:"Hinata Hyuga",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero",
        replies:[],
    },

    {
        name:"Sasuke Uchiha",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero",
        replies:[],
    },

    {
        name:"Itachi Uchiha",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero",
        replies:[],
    },
];