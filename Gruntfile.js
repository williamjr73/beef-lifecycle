module.exports = function(grunt) {

  grunt.initConfig({



    uglify: {
      dist: {
        src: 'js/**/*.js',
        dest: 'dist/js/app.min.js'
      }
    },
    copy: {
      main: {
        files: [
          {expand: true, flatten: true, src: ['bower_components/jquery/dist/jquery.min.js'], dest: 'dist/js/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['bower_components/normalize.css/normalize.css'], dest: 'dist/css/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['index.html'], dest: 'dist/', filter: 'isFile'},
          {expand: true, src: ['img/**'], dest: 'dist/'},
        ],
      },
    },
    sass: {
      dist: {
        files: {
          'dist/css/styles.css': 'sass/app.scss'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9']
      },
      no_dest_single: {
        src: 'dist/css/styles.css'
      },
    },
    watch: {
      gruntfile: {
        files: ['sass/**/*.scss', 'js/**/*.js', '**/*.html', 'img/**'],
        tasks: ['build']
      },
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');

  // Default task.
  grunt.registerTask('default', ['build', 'watch']);
  grunt.registerTask('build', ['copy', 'uglify', 'sass', 'autoprefixer']);

};
