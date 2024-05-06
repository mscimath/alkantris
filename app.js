const app = Vue.createApp({
    data() {
        return {
            title: 'title', 
            lastName: '',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/lego/5.jpg',
            lyrics: []
        };
    },
    created() {
        this.fetchLyrics();
    },
    methods: {
        async fetchLyrics() {
            try {
                const res = await fetch('https://raw.githubusercontent.com/mscimath/apis/main/lyrixs')
                const {lyrics} = await res.json()
                this.lyrics = lyrics;
                this.title = this.lyrics[0].title; //Set the first lyric's title
                //alert("uploaded!")
            } catch (error) {
                console.error('Error fetching items:', error);
            }           
        },

        async   getSong() {
            try {
                if(this.lyrics.length === 0 ) {
                    //If lyrics have not been fetched yet, fetch them first
                    await this.fetchLyrics();
                }
                const number_of_songs = 8 /*Przy odpalaniu randomowej piosenki trzeba uwzględnić,
                że liczby, które się generują to 0, 1 a być może 2 :) najlepiej napisać 'out of range case',
                czyli przy braku piosenki o podanej liczbie porządkowej ma się pojawić ta wybrana przeze mnie.*/
                const random_number = Math.floor(Math.random()*number_of_songs);
                //alert(random_number);
      //        const res = await fetch('https://raw.githubusercontent.com/mscimath/apis/main/lyrixs')
      //        const {lyrics} = await res.json()
                alert(random_number)
                console.log(this.lyrics[random_number]);

                //Access the fetched lyrics from the component's data
                const selectedLyric = this.lyrics[random_number];
                this.title = selectedLyric.title;
                this.lastName = selectedLyric.title;
                this.email = 'sam@gmail.com'
                this.gender = 'female'
                this.picture = 'https://randomuser.me/api/portraits/women/10.jpg'
            } catch (error){
                console.error('Error getting song:', error);
            }       
        }
    }
})

app.mount('#app')