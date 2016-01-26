module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			css: {
				files: ['public_html/lib/scss/**/*.scss'],
				tasks: ['sass:dev','postcss']
			}
		},
		sass: {
			build: {
				options: {
					outputStyle: 'compressed'
				},
				files: {
					'public_html/lib/css/custom.min.css' : 'public_html/lib/scss/custom.scss'
				}
			},
			dev: {
				options: {
					outputStyle: 'expanded'
				},
				files: {
					'public_html/lib/css/custom.min.css' : 'public_html/lib/scss/custom.scss'
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
				src: 'public_html/lib/css/custom.min.css'
			}
		}
	});
	
	// Load the plugins.
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-sass');
 
	// Default task(s).
	grunt.registerTask('dev', ['sass:dev','postcss']);
	grunt.registerTask('build', ['sass:build', 'postcss']);
	
};