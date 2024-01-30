const { createApp } = Vue

createApp({
    data() {
        return {
            activeImage: 0,
            images: ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'],
            autoplay: false
        }
    },

    methods: {
        nextClick(){
            if(this.activeImage >= this.images.length - 1){
                this.activeImage = 0;
            }else{
                this.activeImage++
            }
        },

        prevClick(){
            if(this.activeImage <= 0){
                this.activeImage = this.images.length - 1;
            }else{
                this.activeImage--
            }
        },

        goToSlide(index){
            this.activeImage = index;
        },

        startCarousel(){
            intervalNext = setInterval(function(){
                goToSlide(this.activeImage >= this.images.length ? 0 : this.activeImage + 1)
            }, 3000);
        },

        startAutoplay(){
            this.autoplay = setInterval(() => {
                this.nextClick()
            }, 3000)
        },

        stopAutoplay(){
            clearInterval(this.autoplay)
        }
  
    },

    mounted(){
        this.startAutoplay()
    }

}).mount('#app')