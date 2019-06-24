Vue.component('alert',{
	    //template:'<button @click="onClick"> 噹铛铛 </button>',
		template:'<a :href="\'/user/\'+username">{{username}}</a>',
	//props:['msg'],
	props:['username'],
	methods:{
		// onClick:function () {
		// alert(this.msg);
		// }
	},
});
new Vue({
	el:'#app',
});

