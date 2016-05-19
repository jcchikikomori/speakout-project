angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope, ionicMaterialInk, ionicMaterialMotion, $ionicSideMenuDelegate, $timeout) {

  $timeout(function(){
    ionicMaterialInk.displayEffect();
      ionicMaterialMotion.ripple();
  },0);

  $scope.attendees = [
    { firstname: 'Nicolas', lastname: 'Cage' },
    { firstname: 'Jean-Claude', lastname: 'Van Damme' },
    { firstname: 'Keanu', lastname: 'Reeves' },
    { firstname: 'Steven', lastname: 'Seagal' }
  ];

  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
})

.controller('CheckinCtrl', function($scope, ionicMaterialInk, ionicMaterialMotion, $timeout) {

  $timeout(function(){
    ionicMaterialInk.displayEffect();
      ionicMaterialMotion.ripple();
  },0);


  $scope.showForm = true;

  $scope.shirtSizes = [
    { text: 'Large', value: 'L' },
    { text: 'Medium', value: 'M' },
    { text: 'Small', value: 'S' }
  ];

  $scope.attendee = {};
  $scope.submit = function() {
    if(!$scope.attendee.firstname) {
      /*jshint ignore:start*/
      alert('Info required');
      /*jshint ignore:end*/
      return;
    }
    $scope.showForm = false;
    $scope.attendees.push($scope.attendee);
  };

})

.controller('AttendeesCtrl', function($scope, ionicMaterialInk, ionicMaterialMotion, $timeout) {

  $timeout(function(){
    ionicMaterialInk.displayEffect();
      ionicMaterialMotion.ripple();
  },0);


  $scope.activity = [];
  $scope.arrivedChange = function(attendee) {
    var msg = attendee.firstname + ' ' + attendee.lastname;
    msg += (!attendee.arrived ? ' has arrived, ' : ' just left, ');
    msg += new Date().getMilliseconds();
    $scope.activity.push(msg);
    if($scope.activity.length > 3) {
      $scope.activity.splice(0, 1);
    }
  };

})

.controller('DashCtrl', ['$scope', '$riffle', function($scope, $riffle) {
    $scope.response = "";
    $scope.connected = false;
    
    // Setup the domain we want to send messages to
    $scope.hello = $riffle.subdomain("Container.hello");
    // Login Anonymously via the Auth appliance using Auth Level 0
    $riffle.login();
    
    // When the connection is established this function is fired!
    $scope.$on("$riffle.open", function() {
        console.log("Connected to the fabric!");
    });

    ionicMaterialInk.displayEffect();
    ionicMaterialMotion.ripple();
    
    // When they press the button, this function is fired!
    $scope.echo = function(text) {
        if(!$riffle.connected) {
            $scope.response = "No connection - please check your token and connection.";
        } else {
            if(text === undefined) {
                text = "Hello World!";
            }
            
            // This makes the actual call, using the "hello" domain to send to the "echo" endpoint
            // the result is returned as a promise, and any errors are handled the standard way.
            $scope.hello.call("echo", text).want(String).then(function(s) {
                $scope.response = s;
            },
            function(error) {
                console.log(error);
                $scope.response = "Unable to communicate with echo. Please check your token, permissions, and connection.";
            });
        }
    }
}]);

