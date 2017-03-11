(function () {
"use strict";

angular.module('public')
.service('PublicService', PublicService);


PublicService.$inject = ['$http'];
function PublicService($http) {
  var service = this;

  service.isRegistered = false;

  service.userData = [];

  service.menuItems = function(){

    return $http.get('https://davids-restaurant.herokuapp.com/menu_items.json');

  };

};

})();
