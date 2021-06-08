module.exports = function (grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                expand: true,
                files: [
                    {
                        expand: true,
                        cwd: 'less',
                        src: 'compiled-global-styles/*.less',
                        dest: 'css_min',
                        ext: '.min.css',
                    },
                    {
                        expand: true,
                        cwd: 'less',
                        src: 'modules/page-dt/*.less',
                        dest: 'css_min',
                        ext: '.min.css',
                    }
                ]
            }
        },
        watch: {
            styles: {
                files: ['less/**/*.less'], // which files to watch
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.registerTask('createDirectories', function () {
        grunt.file.mkdir('css_min/modules/page-dt');
    });

    grunt.registerTask('default', ['createDirectories', 'less', 'watch']);
};