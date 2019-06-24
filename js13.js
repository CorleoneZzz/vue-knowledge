var Event=new Vue();
//Event 调取器
Vue.component('sunerdan',{
	template:`
	<div>
		我说:<input @keyup="on_change" v-model="i_said"/>
	</div>
	`,
	methods:{
			on_change:function(){
			Event.$emit('srd-said-something',this.i_said)//定义监听事件
			}
		},
	data:function () {
		return{
			i_said:'',
		}
	}

}),
Vue.component('tiecui',{
	template:`<div>
	铁锤说:{{tiecui_said}}</div>
	`,
	data:function(){
		return{
			tiecui_said:'',
		};
	},
	mounted:function(){
		var me=this;
		Event.$on('srd-said-something',function(data){
			me.tiecui_said=data;
         //初始化完毕加载,钩子监听srd-said-something
         //使用Event this 被改变 我们取外部this传给me
		});
	},
}),




new Vue({
	el:'#app',
})