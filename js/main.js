// Descrizione:
// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
// Generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const app = new Vue({
	el:'#app',
	data: {
		generatedEmails : [],
		visible : true
	},
	methods: {
		/**
		 * function that gets n random mails through boolean API, then pushes them into the given array
		 * @param {*} array array where n emails will be pushed
		 * @param {*} n desired number of emails 
		 */
		getRandomMails(array, n){
			for( let i = 0; i < n ; i++){
				axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
				.then( (response) => {
					array.push(response.data.response);
				});
			}
			this.visible = true;
		},
		clearList(){
			this.generatedEmails = [];
			this.visible = false;
		}
	}
})

