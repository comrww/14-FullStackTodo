.factory('ContactService', function ($http) {
	var myCoolFactory = {}
	myCoolFactory.GetTodo = function () {
		return http.get('../VSTDA/Todos')
	}
}); 