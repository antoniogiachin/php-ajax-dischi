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

       //valore genere select
       value: '',
    },

    computed: {
        // creo array dischi filtrato
        genreFiltered: function() {

            // se la value e' '' allora mostra tutti i dischi
            if(this.value==""){
                // il valore di ritorno sara' l'array di dischi completo
                return this.discs
            } else {
                // altrimenti filtra l'array di dischi e ritorna solo quelli il cui vgenere e' uguale al value della select
                return this.discs.filter(disc =>{
                    return disc.genre == this.value;
                })
            }
        }
    }

})