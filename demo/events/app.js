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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~自定义事件
// 创建自定义事件
vm.$on('evt1', function (msg) {
	console.log("自定义事件", msg);
});
// 触发自定义事件 vm.$emit，vm.$dispatch，vm.$broadcast
vm.$emit('evt1', 'hi');

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~派发事件：由内向外
// 创建父链
var parent = new Vue();
var child1 = new Vue({ parent: parent });
var child2 = new Vue({ parent: child1 });
var child3 = new Vue({ parent: child2 });

parent.$on('test', function (msg) {
	console.log('parent notified', msg);
});
child1.$on('test', function (msg) {
	console.log('child1 notified', msg);
	// return true;	//继续向上冒泡
});
/* child2.$on('test', function () {
	console.log('child2 notified');
	
}); */
child3.$on('test', function (msg) {
	console.log('child3 notified', msg);
	
});

// 沿着父链向上冒泡在触发一个监听器后停止
child3.$dispatch('test','派发事件')
// 没有通知 parent，因为 child1 的回调没有返回 true

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~广播事件：由外向内
parent.$broadcast('test','广播事件')

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~触发事件：触发当前实例上的事件
child1.$emit('test','触发事件');

// 删除事件
child1.$off('test');
child1.$emit('test','触发事件');

