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

// 组件-1:~~~~~~~~~~~~~~~~~~start
var MyComponent1 = Vue.extend({
	template: '<div><input v-model="a1" @change="Bfn2" lazy> <button @click="Bfn1">info</button> <b>{{a1}}</b></div>',
	props:["Ba3"],
	data:function(){
		return {a1:"",a2:"",a3:this.Ba3};
	},
	methods:{
		Bfn1:function(){
			console.log( this.a1 );
		},
		Bfn2:function(){
			console.log( this.a3 );
		}
	}
});
// 注册到全局
Vue.component('my-component1', MyComponent1)
// 组件-1:~~~~~~~~~~~~~~~~~~end


// 组件-2:~~~~~~~~~~~~~~~~~~start 在一个步骤中扩展与注册
Vue.component('my-component2', {
	template: '<div><input @keyup="Bfn1" placeholder="绑定Aa3"> {{Ba1}}</div>',
	props:["Ba3"],
	data:function(){

		return {Ba1:"",Ba2:""};
	},
	methods:{
	Bfn1:function(e){
		// console.log(this);
		this.Ba3.name = e.currentTarget.value;
		// console.log();
	}
	}
})
// 组件-2:~~~~~~~~~~~~~~~~~~end

// 组件-3:~~~~~~~~~~~~~~~~~~start 在一个步骤中扩展与注册
var Child1 = Vue.extend({
	template: '<span>局部组件</span>'
});
var Child2 = Vue.extend({
	template: '#child2_tpl',
	data:function(){
		console.log("Child2", this);
		return {Ca4:"hello"};
	},
	props: ['Ca1','Ca2','Ca3'],
	methods: {
		Cfn1: function () {
			if (this.Ca4.trim()) {
				this.$dispatch('evt1', this.Ca4);
				this.Ca4 = '';
			}
		}
	}
});

// 注册到全局
Vue.component('my-component3', Vue.extend({
	template:"#component3_tpl",
	props:["Ba3"],
	data:function(){
		console.log("Component3", this);
		return {"Ba1":[1,2], "Ba2":"组件3.arr"};
	},
	components:{
		"child1":Child1,
		"child2":Child2
	}
}));
// 组件-3:~~~~~~~~~~~~~~~~~~end

// 创建根实例
new Vue({
	el: '#app5',
	data:{ Aa1:[], Aa3:{name:"apple",size:"big"}},
	events:{
		"evt1":function(msg){
			this.Aa1.push(msg);
		}
	}
})
