// hello world
new Vue({
  el: '#app1',
  data: {
    message: 'Hello Vue.js!',
	a1:100
  }
});


// 双向绑定
new Vue({
  el: '#app2',
  data: {
    message: 'Hello Vue.js!'
  }
});


// 列表
new Vue({
  el: '#app3',
  data: {
    todos: [
		{ text: 'Learn JavaScript' },
		{ text: 'Learn Vue.js' },
		{ text: 'Build Something Awesome' }
	]
  }
});

// 修饰符
new Vue({
  el: '#app4',
  data: {a1:10,a2:20,a3:""},
  methods:{
	  fn1:function(e){
		  this.a1++
	  },
	  fn2:function(e){
		  console.log("阻止单击事件冒泡 === e.stopPropagation()");
		  console.log("阻止默认行为 === e.preventDefault()");
	  },
	  fn3:function(e){
		  this.a3=e.keyCode;
		  console.log("keyCode", e.keyCode);
	  }
  }
});

// 组件
var MyComponent1 = Vue.extend({
	template: '<div>custom component A! <b>{{a1}}</b></div>',
	data:function(){
		return {a1:1,a2:2};
	}
});
// 注册到全局
Vue.component('my-component1', MyComponent1)

// 在一个步骤中扩展与注册
Vue.component('my-component2', {
	template: '<div>custom component B!</div>'
})


var Child1 = Vue.extend({
	template: '<span>局部组件</span>'
});
var Child2 = Vue.extend({
	template: '#child2_tpl',
	data:function(){
		console.log("Child2", this);
		return {msg:"hello"};
	},
	props: ['ppa','ppb','ppc'],
	methods: {
		fnc1: function () {
			if (this.msg.trim()) {
				this.$dispatch('evt1', this.msg);
				this.msg = '';
			}
		}
	}
});

// 注册到全局
Vue.component('my-component3', Vue.extend({
	template:"#component3_tpl",
	props:["pa1"],
	data:function(){
		console.log("Component3", this);
		return {"pa0":[1,2], "pb1":"组件3.attr1"};
	},
	components:{
		"child1":Child1,
		"child2":Child2
	}
}));


// 创建根实例
new Vue({
	el: '#app5',
	data:{msgs:[], pa1:"root.apple"},
	events:{
		"evt1":function(msg){
			this.msgs.push(msg);
		}
	}
})
