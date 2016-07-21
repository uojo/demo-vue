// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~自定义全局指令
Vue.directive('order1', {
	bind: function () {
		// 准备工作
		// 例如，添加事件处理器或只需要运行一次的高耗任务
		console.log('bind order1',this);
	},
	update: function (value) {
		// console.log( this );
		this.el.innerHTML =
		'name - '       + this.name + '<br>' +
		'expression - ' + this.expression + '<br>' +
		'argument - '   + this.arg + '<br>' +
		'modifiers - '  + JSON.stringify(this.modifiers) + '<br>' +
		'value - '      + value
	},
	unbind: function () {
		// 清理工作
		// 例如，删除 bind() 添加的事件监听器
	}
});

Vue.directive('order2', {
	bind: function () {
		// 准备工作
		// 例如，添加事件处理器或只需要运行一次的高耗任务
		console.log('bind order2',this);
	},
	update: function (value) {
		console.log( value, this );
	},
	unbind: function () {
		// 清理工作
		// 例如，删除 bind() 添加的事件监听器
	}
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~元素指令，不能接受参数或表达式
Vue.elementDirective('my-directive', {
	// API 同普通指令
	bind: function () {
		// 操作 this.el...
		console.log(this);
		
		
	}
});

var vm = new Vue({
	el: '#app1',
	data: {
		msg: 'hello'

	},
	methods:{
		fn1:function(){
			console.log(arguments);
		}
	}
});




