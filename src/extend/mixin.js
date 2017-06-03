import Vue from 'vue';
Vue.mixin({
	methods: {
		goto: function(value) {
			this.$router.push(value);
		},
		notify: function(value) {
			this.$notify({
				title: value['title'],
				message: value['msg'],
				type: value['type']
			});
		},
		link:function(value){
			window.open(value);
		}
	}
});