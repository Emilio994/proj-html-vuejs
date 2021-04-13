// `


Vue.config.devtools = true;

const app = new Vue({
    el : '#root',
    data : {
        myImagesPath : 'imgs/',
        images : {
            header :'medical_logo_1x_light.png',
            jumbotron : '/header-image-homepage.jpg',
            footer : ''
        },

        nav_list: {
            head : ['home', 'about', 'departments', 'articles']
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
        }
        



        
    }
})





