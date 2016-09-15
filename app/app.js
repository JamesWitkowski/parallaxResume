/* global Firebase */
var app = angular.module('appointment', [
    'firebase'
]);

app.constant('FBREF', 'https://riverviewdental.firebaseio.com/')


app.controller('ApptController', function($scope, FBREF, $firebaseArray){
    
    
    var db = new Firebase(FBREF);
    
    $scope.AppointmentsArr = $firebaseArray(new Firebase(FBREF + 'appointments'));
    
    $scope.addAppointment = function () {
        //Sets today as the requested on
        $scope.newPatient.apptRequestDate = Date.now();
        $scope.newPatient.aDate = $scope.newPatient.aDate.toISOString();
        //adds appointment to firebase
        $scope.AppointmentsArr.$add($scope.newPatient)
        //Clears Form Data
        $scope.newPatient = {};
       
        
    }
    
    
})