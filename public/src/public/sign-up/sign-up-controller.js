(function () {
"use strict";

angular.module('public')
.controller('signUpController', SignUpController);

SignUpController.$inject = ['PublicService'];
function SignUpController(PublicService) {

	var signUp = this;

	signUp.bool = false;
	signUp.menuList = [];
	signUp.menuTotalList;

	signUp.index = '';

	PublicService.menuItems().then(function(result){
		
		var list = result.data.menu_items;
		signUp.menuTotalList = list;
		//console.log(list);

		for(var i=0; i<list.length; i++){
			signUp.menuList.push(list[i].short_name);
		}
	}).then(function(){
		//console.log(signUp.menuList)
	})


	signUp.go = function(){
		//console.log(signUp.firstName, signUp.lastName, signUp.email, signUp.phone,
			 //signUp.menu);

		var foodName;
		var foodDescription;

		for(var i=0; i<signUp.menuTotalList.length; i++){
			
			if(signUp.menuTotalList[i].short_name == signUp.menu){
				foodName = signUp.menuTotalList[i].name;
				foodDescription = signUp.menuTotalList[i].description;
				//console.log(foodName, foodDescription);
			}
		}

		PublicService.isRegistered = true;
		PublicService.userData.push(signUp.firstName);
		PublicService.userData.push(signUp.lastName);
		PublicService.userData.push(signUp.email);
		PublicService.userData.push(signUp.phone);
		PublicService.userData.push(signUp.menu);
		PublicService.userData.push(foodName);
		PublicService.userData.push(foodDescription);
		signUp.bool = true;
		//console.log(PublicService.userData);
	}
}

})();
