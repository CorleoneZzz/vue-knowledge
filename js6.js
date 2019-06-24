var app =new Vue({
			el:'#app',
			data:{
				role:'hr',
				name:'刘德华',
				price:58,
				sex:'fmale',
				hobby:['js'],
				form:1,
				dest:[],
				article:'Mode when deploying for production.',
				math:90,
				physice:78,
				english:60
			},
	computed:{
		sum:function () {
			//parseFloat() 函数可解析一个字符串，并返回一个浮点数。
			return parseFloat(this.math)+parseFloat(this.physice)+parseFloat(this.english)
		},

		average:function () {
		return Math.round((this.sum)/3)
	}


	}

});