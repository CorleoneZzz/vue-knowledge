var app =new Vue({
			el:'#app',
			methods: {
				    onClick: function () {
				      console.log('click');
				    },//点击事件
				    onEnter:function(){
				    	console.log('onEnter')
				    },//鼠标移入事件
				     onOut:function(){
				    	console.log('onOut')
				    },//鼠标移出事件
				      onSubmit:function(e){
				      	e.preventDefault();
				    	console.log('e.submitte')
				    },//鼠标点击冒泡事件
				      onKeyup:function(){
				    	console.log('key pressed')
				    },//键盘事件
				      onEnter:function(){
				    	console.log('onEnter  回车')
				    },

				  },
			data:{
				name:'A',
				age:null,
				sex:'',
				url:'http://www.baidu.com',
				img:'https://p0.ssl.qhimgs4.com/t015391490c0d71f4d0.png',
				klass:'btn btn-default',
				isActive:true,
				
				//foodList:['葱','姜','蒜'] 注意中英文,
				foodList:[
					{
						nz:'葱',
						price:10,
						discount:0.8
					},
					{
						nz:'姜',
						price:12,
						discount:0.5
					},
					{
						nz:'蒜',
						price:6,
						discount:1.5
					}
				]

			}
});