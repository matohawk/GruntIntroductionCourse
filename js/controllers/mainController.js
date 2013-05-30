app.controller('mainController', function($scope, $timeout){

    var i = 0;
    $scope.mainTitle = "This is a modern web project with old fashioned ideas";

    var myInterval = function(){
        var cancelRefresh = $timeout(function myFunction(){

                if(i != 1){
                    $scope.myStyle = {'position': 'relative','left': "100px"};
                    i = 1;
                } else {
                    $scope.myStyle = {'position': 'relative','left': "0px"};
                    i = 0;
                }
        cancelRefresh = $timeout(myFunction, 500);
    } ,500);
    };

    myInterval();

});