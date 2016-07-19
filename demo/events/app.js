// checkbox、select、radio 供 v-bind:value
var vm = new Vue({
  el: '#app1',
  data: {
	// text
	message1: 'keyup'
	
  },
  methods:{
	  fn1:function(a1,event){
		  console.log(a1, "target", event.target.tagName);
	  }
  }
});

// vm.