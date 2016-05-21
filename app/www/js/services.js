angular.module('starter')

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