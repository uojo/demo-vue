// hello world
new Vue({
  el: '#app1',
  data: {
    message: 'Hello Vue.js!'
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