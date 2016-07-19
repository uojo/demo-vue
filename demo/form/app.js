// checkbox、select、radio 供 v-bind:value
new Vue({
  el: '#app1',
  data: {
	// text
	message1: 'keyup、number、timeout',
	message2: 'blur',
	// checkbox
	checked1:false,
	checkedNames:["Jack","Mike"],
	checked2:false,
	v1:10,
	v2:20,
	// radio
	picked:"One",
	v3:30,
	// select
	selected1:"2",//固有 option
	options:[{"id":1,"name":"A"},{"id":2,"name":"B"},{"id":3,"name":"C"}],
	selected2:"3",//动态生成 option
	// textarea
	mod1:""
	
  },
  methods:{
	  fn1:function(){
		  console.log(this.checked2);
	  }
  }
});

