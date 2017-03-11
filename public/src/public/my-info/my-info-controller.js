(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', myInfoController);

myInfoController.$inject = ['PublicService'];
function myInfoController(PublicService) {

	var myInfo = this;

	myInfo.status = PublicService.isRegistered;

	myInfo.data = PublicService.userData;

	console.log(myInfo.data);
}

})();