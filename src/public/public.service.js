(function () {
"use strict";

angular.module('public')
.service('PublicService', PublicService);


PublicService.$inject = ['$http', 'ApiPath'];
function PublicService($http, ApiPath) {
  var service = this;

  service.isRegistered = false;



};

})();
