// 'use strict';

var app = angular.module('app.home');

app.controller("timeDataController", ["$scope", "$firebaseObject",
    function($scope, $firebaseObject) {
       
        var ref = firebase.database().ref();

        var varText = ref.child('varText');
       
        varText.on("value", function(snapshot) {
           
            var varText = snapshot.val();
            $scope.showerTests = varText.tesla.testData;
            $scope.testLocation = varText.tesla.location;

        });


    }
]);

app.controller("HomeController", ["$scope", "$firebaseObject",
    function($scope, $firebaseObject) {
       
        var dateTimeShowerTest = moment().format("YYYY-MM-DD:HH:MM:sss");
        var ref = firebase.database().ref();
        var obj = $firebaseObject(ref);

        // var firebaseObj = $firebaseObject(ref).$bindTo($scope, "fbData");
       

            obj.$loaded().then(function() {
                // console.log("loaded record:", obj.$id, obj);

               // To iterate the key/value pairs of the object, use angular.forEach()
               angular.forEach(obj, function(value, key) {
                    if(key == 'syncData'){
                        $scope.light = value.Shower;
                    }
               });
             });
        // console.log(firebaseObj);

        $scope.turnOn = function() {
            console.log('on');
            var varText = ref.child('syncData');


            var firstNode = varText.child(showerTestDT);
            
            firstNode.set({
                datetime: dateTimeShowerTest
                
            });
            $scope.syncData.Shower = 'on';
        };

        $scope.turnOff = function() {
             console.log('on');
            var varText = ref.child('syncData');
             console.log(varText);
            
            console.log('off');
            $scope.light = 'off';
        };
          
    }
]);