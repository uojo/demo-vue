// checkbox、select、radio 供 v-bind:value
var vm = new Vue({
  el: '#app1',
  data: {
	// text
	mod1: 'keyup',
	mod2: 'keyup'

  },
  methods:{
	  fn1:function(a1,event){
		  console.log(a1, "target", event.target.tagName);

      // 容器3.click 不会冒泡到 容器2

	  },
    fn2:function(a1){
      console.log("阻止表单提交");
      // return false;
	  },
    fn3:function(a1){
      // 可以自定义按键别名
      // Vue.directive('on').keyCodes.f1 = 112

      // 已提供的按键别名：enter、tab、delete、esc、space、up、down、left、right
      console.log(a1);
      // return false;
	  }
  }
});

// vm.
