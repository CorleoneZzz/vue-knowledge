Vue.component('alert2',{
	template:'<button:class="{likes:likes}" @click="onClick"> 点击 </button>',
	methods:{
		onClick: function(){
			alert('ok.2');
						},
					}
				});



// var Alert={
// 	template:'<button @click="onClick"> 点击 </button>',
// 	methods:{
// 		onClick: function(){
// 			alert('ok.1');
// 						},
// 					}
// 				};

// new Vue({
// 	el:'#seg1',	
// 	components:{
// 		alert:Alert
// 			}
// 		});

new Vue({
	el:'#seg2',	
});