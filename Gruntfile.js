module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    

    concat: {
      js:
      {
        options: {
          separator: ';\n',
        },
        dist: {
          src: ['js/bootstrap.js', 'js/myScript.js'],
          dest: 'js/build/global.js',
        },
      },
      css: {
        src: 'css/*.css',
        dest: 'css/build/global.css'
      }
      
    },

  	uglify: {
  		build: {
      	src: 'js/build/global.js',
      	dest: 'js/build/global.min.js'
      	}
    },

    cssmin: {
      css:{
        src: 'css/build/global.css',
        dest: 'css/build/global.min.css'
      }
    },

    responsive_images: {
    	myTask: {
      		options: {
      			engine: 'im',
        		sizes: [{
        			name: 'normal',
          			width: 320,
        		},{
          			name: 'large',
          			width: 640
        		},{
          			name: "large",
          			width: 1024,
          			suffix: "_x2",
          			quality: 60
        		}]
      		},
      		files: [{
        		expand: true,
        		src: ['*.{jpg,gif,png}'],
        		cwd: 'images_src/',
        		dest: 'images/'
      		}]
    	}
    },

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-responsive-images');


  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'responsive_images']);

};
