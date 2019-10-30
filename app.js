new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
        	showAlert: function(text) {
        		alert(text);
        	},
        	updateValue: function(event) {
        		this.value = event.target.value;
        	}
        }
    });