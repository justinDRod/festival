angular.module('starter.services', [])

.factory('Randomizer', function() {
  
  return {
    refresh: function() {
      var series = [22,24,24,16,24,22,23,22];
      var season = Math.floor(Math.random()*series.length) + 1;
      var episode = Math.floor(Math.random()*series[season - 1] + 1);
      var watch = [season, episode];
      return watch;
    }
  }


});


  