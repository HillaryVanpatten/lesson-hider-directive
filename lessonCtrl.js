angular.module('directivePractice').controller('lessonCtrl', function($scope){
  $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
  $scope.lesson = 'Two-way data binding!';
  $scope.announceDay = function(lesson, day) {
    if (!day) {
      alert(lesson + 'is active on' + day + '.');
      return;
    }
    alert(lesson + 'is avtive on' + day + '.');
  }
});
