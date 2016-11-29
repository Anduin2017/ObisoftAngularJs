/// <binding />
'use strict';
var LIVERELOAD_PORT, lrSnippet, mountFolder;

LIVERELOAD_PORT = 35728;

lrSnippet = require('connect-livereload')({
    port: LIVERELOAD_PORT
});

mountFolder = function (connect, dir) {
    return connect['static'](require('path').resolve(dir));
};

module.exports = function (grunt) {
    var yeomanConfig;
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
    yeomanConfig = {
        app: 'wwwroot',
        dist: 'dist'
    };
    try {
        yeomanConfig.app = require('./bower.json').appPath || yeomanConfig.app;
    } catch (_error) { }
    grunt.initConfig({
        yeoman: yeomanConfig,
        watch: {
            js: {
                files: ['<%= yeoman.app %>/scripts/**/*.js'],
                tasks: ['concat']
            },
            sass: {
                files: ['<%= yeoman.app %>/styles/**/*.{scss,sass}'],
                tasks: ['sass:server']
            },
            less: {
                files: ['<%= yeoman.app %>/styles-less/**/*.less'],
                tasks: ['less:server']
            },
            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: ['<%= yeoman.app %>/index.html', '<%= yeoman.app %>/views/**/*.html', '<%= yeoman.app %>/styles/**/*.scss', '<%= yeoman.app %>/styles-less/**/*.less', '.tmp/styles/**/*.css', '{.tmp,<%= yeoman.app %>}/scripts/**/*.js', '<%= yeoman.app %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}']
            }
        },
        connect: {
            options: {
                port: 9000,
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [lrSnippet, mountFolder(connect, '.tmp'), mountFolder(connect, yeomanConfig.app)];
                    }
                }
            },
            test: {
                options: {
                    middleware: function (connect) {
                        return [mountFolder(connect, '.tmp'), mountFolder(connect, 'test')];
                    }
                }
            },
            dist: {
                options: {
                    middleware: function (connect) {
                        return [mountFolder(connect, yeomanConfig.dist)];
                    }
                }
            }
        },
        open: {
            server: {
                url: 'http://localhost:<%= connect.options.port %>'
            }
        },
        clean: {
            dist: {
                files: [
                {
                    dot: true,
                    src: ['.tmp', '<%= yeoman.dist %>/*', '!<%= yeoman.dist %>/.git*']
                }
                ]
            },
            server: '.tmp'
        },
        jshint: {
            jshintrc: '.jshintrc',
            gruntfile: {
                src: 'Gruntfile.js'
            },
            src: {
                src: ['wwwroot/scripts/**/*.js']
            }
        },
        sass: {
            server: {
                options: {
                    style: 'expanded',
                    noCache: true,
                    lineNumbers: false,
                    debugInfo: false,
                    sourcemap: 'none'
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/styles',
                    src: ['*.scss'],
                    dest: '.tmp/styles',
                    ext: '.css'
                }]
            },
            dist: {
                options: {
                    style: 'compressed',
                    noCache: true,
                    lineNumbers: true,
                    debugInfo: false,
                    sourcemap: 'none'
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/styles',
                    src: ['*.scss'],
                    dest: '.tmp/styles',
                    ext: '.css'
                }]
            }
        },
        less: {
            server: {
                options: {
                    strictMath: true,
                    dumpLineNumbers: true,
                    sourceMap: true,
                    sourceMapRootpath: '',
                    outputSourceFiles: true
                },
                files: [
                {
                    expand: true,
                    cwd: '<%= yeoman.app %>/styles-less',
                    src: 'main.less',
                    dest: '.tmp/styles',
                    ext: '.css'
                }
                ]
            },
            dist: {
                options: {
                    cleancss: true,
                    report: 'min'
                },
                files: [
                {
                    expand: true,
                    cwd: '<%= yeoman.app %>/styles-less',
                    src: 'main.less',
                    dest: '.tmp/styles',
                    ext: '.css'
                }
                ]
            }
        },
        htmlmin: {
            dist: {
                options: {},
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    src: '{,*/}*.html',
                    dest: '<%= yeoman.dist %>'
                }]
            },
        },
        useminPrepare: {
            html: '<%= yeoman.app %>/index.html',
            options: {
                dest: '<%= yeoman.dist %>',
                flow: {
                    steps: {
                        js: ['concat'],
                        css: ['cssmin']
                    },
                    post: []
                }
            }
        },
        usemin: {
            html: ['<%= yeoman.dist %>/**/*.html', '!<%= yeoman.dist %>/bower_components/**'],
            css: ['<%= yeoman.dist %>/styles/**/*.css'],
            options: {
                dirs: ['<%= yeoman.dist %>']
            }
        },
        copy: {
            dist: {
                files: [
                {
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: ['favicon.ico', 'bower_components/font-awesome/css/*', 'bower_components/font-awesome/fonts/*', 'bower_components/weather-icons/css/*', 'bower_components/weather-icons/font/*', 'fonts/**/*', 'i18n/**/*', 'images/**/*', 'styles/fonts/**/*', 'styles/img/**/*', 'styles/ui/images/*', 'views/**/*']
                }, {
                    expand: true,
                    cwd: '.tmp',
                    dest: '<%= yeoman.dist %>',
                    src: ['styles/**', 'assets/**']
                }, {
                    expand: true,
                    cwd: '.tmp/images',
                    dest: '<%= yeoman.dist %>/images',
                    src: ['generated/*']
                }
                ]
            },
            styles: {
                expand: true,
                cwd: '<%= yeoman.app %>/styles',
                dest: '.tmp/styles/',
                src: '**/*.css'
            }
        },
        concurrent: {
            server: ['sass:server', 'copy:styles'],
            dist: ['sass:dist', 'copy:styles', 'htmlmin'],
            lessServer: ['less:server', 'copy:styles'],
            lessDist: ['less:dist', 'copy:styles', 'htmlmin']
        },
        cssmin: {
            options: {
                keepSpecialComments: '0'
            },
            dist: {}
        },
        concat: {
            options: {
                separator: grunt.util.linefeed + ';' + grunt.util.linefeed
            },
            dist: {}
        },
        uglify: {
            options: {
                mangle: false,
                compress: {
                    drop_console: true
                }
            },
            dist: {
                files: {
                    '<%= yeoman.dist %>/scripts/app.js': ['.tmp/**/*.js', '<%= yeoman.app %>/scripts/**/*.js']
                }
            }
        }
    });
    grunt.registerTask('server', function (target) {
        if (target === 'dist') {
            return grunt.task.run([
            'build',
            'open',
            'connect:dist:keepalive']);
        }
        return grunt.task.run([
        'clean:server',
        'concurrent:server',
        'connect:livereload',
        'open',
        'watch']);
    });
    grunt.registerTask('lessServer', function (target) {
        if (target === 'dist') {
            return grunt.task.run([
            'lessBuild',
            'open',
            'connect:dist:keepalive']);
        }
        return grunt.task.run([
        'clean:server',
        'concurrent:server',
        'connect:livereload',
        'open',
        'watch']);
    });
    grunt.registerTask('build', [
    'clean:dist',
    'useminPrepare',
    'concurrent:dist',
    'copy:dist',
    'cssmin',
    'concat',
    'uglify',
    'usemin']);
    grunt.registerTask('hint',['jshint']);
    grunt.registerTask('lessBuild', [
    'clean:dist',
    'useminPrepare',
    'concurrent:lessDist',
    'copy:dist',
    'cssmin',
    'concat',
    'uglify',
    'usemin']);
    return grunt.registerTask('default', ['server']);
};