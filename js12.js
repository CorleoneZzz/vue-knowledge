Vue.component('balance',{
	template:`
	<div>
	<show @show-balance="show_balance"></show>
	<div v-if="show">支付宝余额1000000
	</div>
	</div>`,
 	methods:{
 		show_balance:function(data){
 			this.show=true;
 			console.log('data:',data)
 		}
 	},
 	data:function(){
 		return{
 			show: false,
 		}
 	}
 });

Vue.component('show',{
template: '<button @click="on_click()">显示余额</button>',
methods:{
	on_click() {
		this.$emit('show-balance',{a:1,b:2});
	}
}
});

new Vue({
	el:'#app',

});

//1、父组件可以使用 props 把数据传给子组件。
//2、子组件可以使用 $emit 触发父组件的自定义事件。
//Event.$emit('msg',this.msg); 发送数据，
//第一个参数是发送数据的名称，接收时还用这个名字接收，
//第二个参数是这个数据现在的位置；