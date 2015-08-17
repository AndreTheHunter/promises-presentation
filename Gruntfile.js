module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

		connect: {
			server: {
				options: {
					port: grunt.option('port') || 8000,
					base: grunt.option('base') || '.',
					livereload: true,
					open: true
				}
			}
		},

		watch: {
			options: {
				livereload: true
			},
			html: {
				files: [ 'index.html']
			}
		}
	});

	grunt.registerTask( 'serve', [ 'connect', 'watch' ] );
};
