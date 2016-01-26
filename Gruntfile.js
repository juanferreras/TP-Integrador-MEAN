module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			build: {
				options: {
					outputStyle: 'compressed'
				},
				files: {
					'lib/css/custom.css' : 'lib/scss/custom.scss'
				}
			},
			dev: {
				options: {
					outputStyle: 'expanded'
				},
				files: {
					'lib/css/custom.css' : 'lib/scss/custom.scss'
				}
			}
		},
		postcss: {
			options: {
				map: true,
				processors: [
					require('autoprefixer-core')({browsers: ['last 5 versions', 'ie 8', 'ie 9']}),
				]
			},
			dist: {
				src: 'lib/css/custom.css'
			}
		}
	});
	
	// Load the plugins.
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-sass');
 
	// Default task(s).
	grunt.registerTask('dev', ['sass:dev','postcss']);
	grunt.registerTask('build', ['sass:build', 'postcss']);
	
};