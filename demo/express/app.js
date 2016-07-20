var vm = new Vue({
	el: '#app1',
	data: {
		// text
		mod1: ["red","blue"],
		mod2: {"green":true},
		class1: ["red","ft12"],
		class2: {"red":true, "green":true},
		classA:"red",
		classB:"blue",
		isA:true,
		isB:false,
		a:1,
		b:2,
		e:{id:1,name:"xxx"}
	},
	computed:{
		c:function(){
			return this.a+this.b;
		},
		d:{
			set:function(){
				console.log( "set", arguments );
			},
			get:function(){
				console.log( "get",arguments );
				return this.a+this.b;
			}
		}
	},
	watch:{
		b:function(val, oldVal){
			console.log('watch1 > new: %s, old: %s', val, oldVal);
		},
		c:"fn2",
		e:{
			handler: function (val, oldVal) { 
				console.log('watch3 > new: %s, old: %s', val, oldVal)
			},
			deep: true
		}
	},
	methods:{
		fn1:function(arguments){
			console.log(arguments);
		},
		fn2:function(val, oldVal){
			console.log('watch2 > new: %s, old: %s', val, oldVal);
		},
		fn3:function(a1){
			console.log("");
		}
	}
});

vm.c = 100; //计算属性无法通过这种方式设置
vm.d = 4; //触发 set
console.log( "触发 get", vm.d ); //触发 get

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~观察模式
vm.b=10; //触发 c属性的计算

vm.e.id=2; //deep:true 才会触发 handler

var unwatch = vm.$watch('a', vm.fn3);
// 之后取消观察
unwatch()







