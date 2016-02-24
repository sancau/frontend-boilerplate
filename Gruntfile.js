module.exports = function(grunt) {
	grunt.initConfig({
		coffee: {
			scripts: {
				expand: true,
				flatten: true,
				cwd: 'src/coffee/',
				src: ['*.coffee'],
				dest: 'src/js/',
				ext: '.js'
			}
		},
		watch: {
			options: {
				livereload: true
			},
			scripts: {
				files: ['src/coffee/*.coffee'],
				tasks: ['process']
			},
			all: {
				files: ['src/*.*']
			}
		},
		concat: {
			dist: {
				src: ['src/js/*.js'],
				dest: 'src/dist/js/all.js'
			}
		},
		uglify: {
			options: {
				mangle: true
			},
			dist: {
				options: {
					banner: '/* github.com/sancau */ '
				},
				files: {
					'src/dist/js/all.min.js' : ['src/dist/js/all.js']
				}
			}
		},
		express: {
			all: {
				options: {
					port: 9000,
					hostname: 'localhost',
					bases: ['src/'],
					livereload: true
				}
			}
		}		
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-express');
	
	grunt.registerTask('process', ['newer:coffee', 'concat', 'uglify']);
	grunt.registerTask(
		'default', 
		['coffee', 'concat', 'uglify', 'express', 'watch']
	);
};
