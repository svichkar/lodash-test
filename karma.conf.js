module.exports = function (karma) {
  karma.set({
    basePath: '',
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['browserify', 'mocha'],
    // list of files / patterns to load in the browser
    files: [
      'test/**/*.js'
    ],
    // list of files to exclude
    exclude: [],
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/**/*.js': ['browserify']
    },
    browserify: {
      debug: true,
      transform: ['brfs']
    },
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,
    // enable / disable colors in the output (reporters and logs)
    colors: true,
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: karma.LOG_DEBUG,
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
};
