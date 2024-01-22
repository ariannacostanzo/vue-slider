// console.log(Vue)

const {createApp} = Vue;

const app = createApp ({
    name: 'image slider',
    data() {
        return {
            destinations,
            currentImageIndex: 0, 
            interval: null
        }
    },
    methods: {
        currentImageDisplayed(i) {
            return this.currentImageIndex === i
        },
        setDisplayedImage (target) {
            if (target === 'next') {
                if (this.lastIndex) {
                    this.currentImageIndex = -1
                }
                this.currentImageIndex++
            } else if (target === 'prev') {
                if (this.firstIndex) {
                    this.currentImageIndex = this.destinations.length
                }
                this.currentImageIndex--
            } else {
                this.currentImageIndex = target
            }

        }
    },
    computed: {
        firstIndex() {
            return this.currentImageIndex === 0
        },
        lastIndex() {
            return this.currentImageIndex === this.destinations.length -1
        }

    },
    mounted() {
        interval = setInterval(() => 
            {this.setDisplayedImage('next')
        }, 3000)
    }

});

app.mount('#root')

