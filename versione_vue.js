const App = new Vue({

    el: '#root',

    created(){
        //lancio chiamata axios
        axios.get('http://localhost/php-ajax-dischi/server.php')
            .then( (response) => {
                // handle success
                console.log(response);
                this.discs = response.data;
                console.log(this.discs);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

        //lancio chiamata axios per generi
        axios.get('http://localhost/php-ajax-dischi/server.php')
            .then( (response) => {
                // handle success
                console.log(response);
                
                response.data.forEach(disc => {
                    if(!this.genres.includes(disc.genre)){
                        this.genres.push(disc.genre);
                    }
                });

                console.log(this.genres);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            })    
    },

    data : {
        //array dischi
       discs : [], 

       // array generi
       genres: [],
    },

    computed: {
        genreFilter: function() {
            return if
        }
    }

})