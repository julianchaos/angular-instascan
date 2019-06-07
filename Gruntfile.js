module.exports = function(grunt){
	grunt.initConfig({
		browserify: {
			demo: {
				files: {
					'demo/lib/app.js': ['app/app.js', 'app/angular-instascan.js'],
				}
			},
			build: {
				files: {
					'dist/angular-instascan.js': ['app/angular-instascan.js']
				}
			}
		},

		watch: {
			demo: {
				files: [
					'app/app.js',
					'app/angular-instascan.js'
				],
				tasks: [
					'browserify:app'
				]
			}
		}
	});

	// importa tudo oq o grunt vai usar de modulos
	require('load-grunt-tasks')(grunt);

	grunt.registerTask('build', ['browserify:build']);
	grunt.registerTask('demo', ['browserify:demo']);
	grunt.registerTask('default', ['browserify:demo', 'watch:demo']);
};
