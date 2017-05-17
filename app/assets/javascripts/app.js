
 angular.module('flapperNews', ['ui.router'])
 .config([
   '$stateProvider',
   '$urlRouterProvider',
   function($stateProvider, $urlRouterProvider) {

     $stateProvider
      .state('home', {
        resolve: {
          postPromise: ['posts', function(posts){
          return posts.getAll();
         }]
        },
        url: '/home',
        templateUrl: '/home.html',
        controller: 'MainCtrl'
      })
      .state('posts', {
        resolve: {
          post: ['$stateParams', 'posts', function($stateParams, posts) {
          return posts.get($stateParams.id);
          }]
        },
        url: '/posts/{id}',
        templateUrl: '/posts.html',
        controller: 'PostsCtrl'
    });
      $urlRouterProvider.otherwise('home');
   }])
