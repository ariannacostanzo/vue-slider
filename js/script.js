// console.log(Vue)

const {createApp} = Vue;

const app = createApp ({
    name: 'image slider',
    data() {
        return {
            destinations,
            currentImageIndex: 0, 
        }
    },
    methods: {
        currentImageDisplayed(i) {
            return this.currentImageIndex === i
        },
        setDisplayedImage (target) {
            if (target === 'next') {
                this.currentImageIndex++
            } else if (target === 'prev') {
                this.currentImageIndex--
            } else {
                this.currentImageIndex = target
            }

        }
    },
    computed: {
        

    }





});

app.mount('#root')