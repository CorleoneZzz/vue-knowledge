Vue.component('like',{
	template:'<button :class="{likes:likes}" @click="toggle_like()">赞{{like_count}} </button>',
	//template:'#like-component-tpl',
	//ES6 ` 多行
	data:function () {
		return{
			like_count:10,
			likes:false,//坑 likes 不能以like命名
		}
	},
	methods:{
		toggle_like:function(){
			if(!this.likes)
			this.like_count++;
			else
			this.like_count--;
		    this.likes = !this.likes;//点赞后改变状态

			}
		}
})

new Vue({
	el:"#app"
})