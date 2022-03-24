// Descrizione:
// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
// Generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const app = new Vue({
	el:'#app',
	data: {
		generatedEmails : [],
		visible : false
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
		},
		// function that sets visible value to true
		showList(){
			this.visible = true;
		},
		// function that resets pre-existing list and sets visible value to false
		resetList(){
			this.visible = false;
			this.generatedEmails = [];
			this.getRandomMails(this.generatedEmails, 10);
		}
	},
	mounted(){
		this.getRandomMails(this.generatedEmails, 10);
	}
})

