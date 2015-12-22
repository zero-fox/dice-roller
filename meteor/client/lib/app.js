angular.module('dice', ['angular-meteor',
    'ui.router',
    'ionic',
    'ngCordova', 'as.sortable'])


    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    });


function onReady() {
    angular.bootstrap(document, ['dice']);
    if (window.cordova) {
      screen.lockOrientation('landscape');
    }
}

if (Meteor.isCordova) {
    angular.element(document).on("deviceready", onReady);
}
else {
    angular.element(document).ready(onReady);
}
