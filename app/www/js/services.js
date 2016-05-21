angular.module('starter')

/**
 * DB services using Firebase
 */
.factory('fireBaseData', function($firebase) {
    var ref = new Firebase("https://shouthack.firebaseio.com/"),
        refUsers = new Firebase("https://shouthack.firebaseio.com/users"),
        refFeeds = new Firebase("https://shouthack.firebaseio.com/feeds");
    return {
        ref: function() {
            return ref;
        },
        refExpenses: function() {
            return refExpenses;
        },
        refRoomMates: function() {
            return refRoomMates;
        }
    }
})

.factory('InstructionsService', [ function() {

  var instructionsObj = {};

  instructionsObj.instructions = {
    newLocations : {
      text : 'To add a new location, tap and hold on the map',
      seen : false
    }
  };

  return instructionsObj;

}])

.factory('LocationsService', [ function() {

  var locationsObj = {};

  locationsObj.savedLocations = [
    {
      name : "Washington D.C., USA",
      lat : 38.8951100,
      lng : -77.0363700
    },
    {
      name : "London, England",
      lat : 51.500152,
      lng : -0.126236
    },
    {
      name : "Paris, France",
      lat : 48.864716,
      lng : 2.349014
    },
    {
      name : "Moscow, Russia",
      lat : 55.752121,
      lng : 37.617664
    },
    {
      name : "Rio de Janeiro, Brazil",
      lat : -22.970722,
      lng : -43.182365
    },
    {
      name : "Sydney, Australia",
      lat : -33.865143,
      lng : 151.209900
    }

  ];

  return locationsObj;

}])
;