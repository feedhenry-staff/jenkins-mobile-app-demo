module.exports = function(grunt) {
  grunt.initConfig({
    clean: {
      ios: [__dirname + "/deploy/ios"]
    },
    mkdir: {
      ios: {
        options: {
          create: [__dirname + "/deploy/ios"]
        }
      }
    },
    copy: {
      ios: {
        expand: true,
        cwd: __dirname + "/client/platforms/ios/",
        src: "**",
        dest: "./deploy/ios/"
      }
    },
    git_deploy: {
      ios: {
        options: {
          url: 'git@psdev-t.sandbox.feedhenry.com:psdev-t/Jenkins-demo-iOS-Client.git',
          branch:"develop"
        },
        src: 'deploy/ios/'
      },
    }
  });

  require('load-grunt-tasks')(grunt);
  grunt.registerTask("deploy:ios", ["clean:ios", "mkdir:ios", "copy:ios","git_deploy:ios"]);
}
