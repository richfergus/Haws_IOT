// 'use strict';

var app = angular.module('app.home');

app.controller("timeDataController", ["$scope", "$firebaseObject",
    function($scope, $firebaseObject) {
       
        var ref = firebase.database().ref();

        var varText = ref.child('varText');
        // var firstNode = varText.child('my first node');
        // $scope.syncData = $firebaseObject(ref);
        var testData = [];
        varText.on("value", function(snapshot) {
            var varText = snapshot.val();
                          //   angular.forEach(varText, function(value, index) {
                          //           angular.forEach(value, function(x) {
                                        
                          //               // $scope.showerTests = x.testData;
                          //                   testData.push(x);
                          //       });

                          // });
            // console.log('bla');
                                            console.log(varText.tesla.testData);

            $scope.showerTests = varText.tesla.testData;
            $scope.testLocation = varText.tesla.location;

        });


    }
]);

app.controller("HomeController", ["$scope", "$firebaseObject",
    function($scope, $firebaseObject) {
        
        var dateTimeShowerTest = moment().format("YYYY-MM-DD:HH:MM:sss");
        var ref = firebase.database().ref();

        var firebaseObj = $firebaseObject(ref).$bindTo($scope, "syncData");
        console.log(firebaseObj);
      

        $scope.turnOn = function() {
            console.log('on');
            var varText = ref.child('vertex');

            var firstNode = varText.child(showerTestDT);
            firstNode.set({
                datetime: dateTimeShowerTest,
                label: 'I am blue'
            });
            $scope.syncData.Shower = 'on';
        };
        $scope.turnOff = function() {
            console.log('off');
            $scope.syncData.Shower = 'off';
        };
        // var showerData = {
        //         labels : ["January","February","March","April","May","June"],
        //         datasets :
        //          [
        //             {
        //               fillColor : "rgba(172,194,132,0.4)",
        //               strokeColor : "#ACC26D",
        //               pointColor : "#fff",
        //               pointStrokeColor : "#9DB86D",
        //               data : [0,1,1,0,1,1]
        //             }
        //          ]
        //         };

        //           var showerChart = document.getElementById('showerChart').getContext('2d');
        //                new Chart(showerChart).Line(showerData);    
    }
]);