module.exports = function(grunt) {
  const sass = require("node-sass");
  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    copy: {
      build: {
        files: [
          {
            expand: true,
            cwd: "source",
            src: ["fonts/**/*.{woff,woff2}", "css/**", "img/*.svg"],
            dest: "dist/",
          },
        ],
      },
    },
    clean: {
      build: ["dist"],
    },
    sass: {
      options: {
        implementation: sass,
        sourceMap: true,
      },
      style: {
        files: {
          "dist/css/style.css": "source/sass/style.scss",
        },
      },
    },
    postcss: {
      style: {
        options: {
          map: true,
          processors: [require("autoprefixer")()],
        },
        dist: {
          src: "dist/css/*.css",
        },
      },
    },
    csso: {
      compress: {
        options: {
          report: "gzip",
        },
        files: {
          "dist/css/style.min.css": ["dist/css/style.css"],
        },
      },
    },
    babel: {
      options: {
        sourceMap: true,
        presets: ["env"],
      },
      dist: {
        files: {
          "dist/js/app.js": "source/js/app.js",
        },
      },
    },
    uglify: {
      js: {
        options: {
          beautify: true,
        },
        files: {
          "dist/js/app.min.js": ["dist/js/app.js"],
        },
      },
    },
    posthtml: {
      options: {
        use: [require("posthtml-include")({ root: "./", encoding: "utf-8" })],
      },
      build: {
        files: [
          {
            dot: true,
            cwd: "source/",
            src: ["*.html"],
            dest: "dist/",
            expand: true,
          },
        ],
      },
    },
    watch: {
      html: {
        files: ["source/*.html"],
        tasks: ["posthtml"],
      },
      style: {
        files: ["source/sass/**/*.scss"],
        tasks: ["sass", "postcss", "csso"],
        options: {
          livereload: true,
        },
      },
      js: {
        files: ["source/js/*.js"],
        tasks: ["babel", "uglify"],
        options: {
          reload: true,
        },
      },
    },
    browserSync: {
      server: {
        bsFiles: {
          src: ["dist/*.html", "dist/css/*.css", "dist/js/*.js"],
        },
        options: {
          server: "dist/",
          watchTask: true,
        },
      },
    },
    stylelint: {
      options: {
        configFile: ".stylelintrc",
        formatter: "string",
        ignoreDisables: false,
        failOnError: true,
        outputFile: "",
        reportNeedlessDisables: false,
        syntax: "",
      },
      all: ["source/sass/**/*.scss"],
    },
  });

  grunt.registerTask("sasslint", ["stylelint"]);
  grunt.registerTask("serve", ["browserSync", "watch"]);
  grunt.registerTask("build", [
    "clean",
    "copy",
    "stylelint",
    "sass",
    "postcss",
    "csso",
    "babel",
    "uglify",
    "posthtml",
  ]);
};
