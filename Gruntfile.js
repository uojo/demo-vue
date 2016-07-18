module.exports = function(grunt) {
	
	var pkg = grunt.file.readJSON('package.json');
	
	
	// 项目配置(任务配置)
	grunt.initConfig({
		// 读取我们的项目配置并存储到pkg属性中
		pkg: pkg,
        // 通过watch任务，来监听文件是否有更改
		connect: {
		  options: {
			// Change this to '0.0.0.0' to access the server from outside.
			hostname: '127.0.0.1',	port: 9000,
			keepalive: true,
			// This does not perform live reloading. this port is used by watch task to trigger a live reloading action.
			//livereload: 35729 
		  },
		  all: {
			options: {
			  open: true,
			  base: [
				''
			  ]
			}
		  }
		},
        watch: {
            client: {
                // 我们不需要配置额外的任务，watch任务已经内建LiveReload浏览器刷新的代码片段。
                options: {
                    livereload: true
                },
                files: ['src/**','demo/**'],
				// tasks:["rollup"]
            }
        }
	});
	// grunt.initConfig配置完毕
	
	
	// watch
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
	
	//启动文件服务器
	grunt.registerTask('serve', ['connect:all']);
	
	grunt.registerTask('blive', ['watch:client']);
	
	
};