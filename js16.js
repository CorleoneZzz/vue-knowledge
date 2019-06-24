var base={
	methods:{
		show:function(){
			this.visible=true;
		},
		hide:function(){
			this.visible=false;
		},
		toggle:function(){
		this.visible=!this.visible;
		},
	},
	data: function () {
		return{
			visible:false,
		}
	}
}

Vue.component('tooltip',{
	template:`
		<div>
		<span @mouseenter="show" @mouseleave="hide">bys</span>
			<div v-if="visible">
					猪年大吉
			</div>
		</div>
	`,
	mixins:[base],
	data:function(){
	return{
		visible:true,
	}
}
});

Vue.component('popup',{
	template:`
	<div>
			<button @click="toggle">popup</button>
			<div v-if="visible">
			<span @click="hide">X</span>
			<h2> title</h2>
			第17课 P1918.17 混合 mixins -第17课 P1918.17 混合 mixins -第17课 P1918
			</div>
	</div>`,
	mixins:[base],

})


new Vue({
	el:'#app',
	data:{

	}
})