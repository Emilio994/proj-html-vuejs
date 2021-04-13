// `


Vue.config.devtools = true;

const app = new Vue({
    el : '#root',
    data : {
        myImagesPath : 'imgs/',

        images : {
            header :'medical_logo_1x_light.png',
            jumbotron : '/header-image-homepage.jpg',
            footer : 'medical_logo_1x_dark.png'
        },

        nav_lists: {
            head : ['home', 'about', 'departments', 'articles'],

            footer : {
                infos : {
                    location : '121 King Street, London United Kingdom',
                    phone : '1.800.458.556' 
                },
                
                departments : ['Cardiology', 'Pediatrics', 'Diabetes Care', 'Pre-natel Care','Ultrasound Echocardiogram'],

                credits : ['© Copyright 2012-2020','Avada theme by', 'All Rights Reserved', 'Powered by ']
            }
        },        

        button_styles : {
            empty : {
                background : 'transparent',
                borderRadius : '2px',
            },
            marine : {
                background : '#39afbb',
                borderRadius : '2px',
                color : 'white'
            }
        },

        button_tags : {
            learn : 'LEARN MORE',
            appointment : 'MAKE AN APPOINTMENT',
            departments : 'VIEW OUR DEPARTMENTS'
        },
        
        font_awsome : {
            map_marker : 'fas fa-map-marker-alt', 
            phone : 'fas fa-phone', 
            right_arrow : 'fas fa-angle-right',
            upward_arrow : 'fas fa-chevron-up'
        },

        socials : {
            classes : ['fb', 'tw', 'in', 'yt'],
            icons : ['fab fa-facebook-f', 'fab fa-twitter', 'fab fa-instagram', 'fab fa-youtube']
        },

        myArrays : {
            footerInfos : ['121 King Street, London United Kingdom', '1.800.458.556'],
            footerInfosIcons : ['fas fa-map-marker-alt', 'fas fa-phone']
        }        
    },
})





