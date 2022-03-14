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

    },

    data : {
       discs : [], 
    }

})