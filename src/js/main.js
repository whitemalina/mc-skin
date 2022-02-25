const mojang = "https://playerdb.co/api/player/minecraft/"

//avatar, renders/head, renders/body
const crafatar = "https://crafatar.com/"

const app = new Vue({
    el: '#app',
    data: {
        nickname: '',
        show: false,
        UUID: null,
        url: '',
        loader: false,
        nicknamebuff : '',
    },
    mounted() {

    },
    methods: {
        async getData(){
            
            console.log(this.nickname)
            this.nicknamebuff = this.nickname
            this.show = false
            this.loader = true
            this.url = "https://crafthead.net/"
            setTimeout(() => {
                this.loader = false
                this.show = !this.show
            }, 00);

            fetch('https://api.minetools.eu/uuid/Jeb_', {
                method: 'GET',
                headers: {
                    'Content-Type': `application/json`
                },
            })
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    console.log(data)
                })
        },
        
    },
});