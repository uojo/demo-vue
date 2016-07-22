// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~全局过滤器
Vue.filter('reverse', function (value) {
  console.log("过滤器的参数",arguments);
  return value.split(",").reverse();
});

Vue.filter('f1', {
  // model -> view
  read: function(val) {
    console.info("filter-f1 read",arguments);
    return '$'+val.toFixed(2);
  },
  // view -> model
  write: function(val, oldVal) {
    console.info("filter-f1 write",arguments);
    var number = +val.replace(/\D/g, '');
    return isNaN(number) ? 0 : parseFloat(number.toFixed(2))
  }
});

Vue.filter('f3', function () {
  console.log("filter-f3",arguments);
  // return oldVal;
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~开始实例
var vm = new Vue({
	el: '#app1',
	data: {
		// text
		mod0: ["red","blue","yellow","green"],
		mod1: ["red","yellow"],
		mod2: {"green":true},
    mod3:50,
		class1: ["red","ft12"],
		class2: {"red":true, "green":true},
		classA:"red",
		classB:"blue",
		isA:true,
		isB:false,
		a:1,
		b:2,
		e:{id:1,name:"xxx"},
    money: 123.45
	},
  // 过滤器
  filters:{
    f2:{
      read:function(val){
        console.info("filter-f2 read",arguments);
        return val;
      },
      write:function(val, oldVal){
        console.info("filter-f2 write",arguments);
        return val;
      }
    }
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
		},
    mod1a:function(){
      return this.mod1.join(",");
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
			console.log();
		}
	}
});

vm.c = 100; //计算属性无法通过这种方式设置
vm.d = 4; //触发 set
console.log( "触发 get", vm.d ); //触发 get

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~观察模式
vm.b=10; //触发 c属性的计算

vm.e.id=2; //deep:true 才会触发 handler

// 观察属性a，change触发
var unwatch1 = vm.$watch('a', vm.fn2);
vm.a=3;
// 取消观察
unwatch1();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var da1={a:1,b:2};
var vm2 = new Vue({
	// el: '#app1',
	data: da1,
	methods:{
		fn1:function(){
			console.log(arguments);
		}
	}
});
Vue.set(da1,"x",1); //追加需要监听的属性
var unwatch2 = vm2.$watch('x', vm2.fn1);
vm2.x = 2;
