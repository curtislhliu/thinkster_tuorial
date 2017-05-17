angular.module('flapperNews')
.controller('MainCtrl', ['$scope','posts',
  function($scope, posts){
    $scope.test = 'HelloWorld!';
    $scope.posts = posts.posts;

    $scope.addPost = function(){
      if(!$scope.title || $scope.title === '') {return;}
      posts.create({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0
      });
      $scope.title = '';
      $scope.link = '';
      upvotes: 0;
    };

    $scope.incrementUpvotes = function(post){
      posts.upvote(post);
    };
}]);