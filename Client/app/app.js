angular.module("todoListApp", [])

//Todos Controller
angular.module('todoListApp').controller('todosController', function(todosFactory) {
	var vm = this;

	vm.newTodo = {};
	vm.addTask = addTodo;

	activate();

	////////////

	function activate() {
		todos.todosFactory.getTodos().then(
			function (todos) {
				vm.todos = todos;
			},
			function(error) {
        	alert('Error getting todo');
        	}
		);
	}

	function addTask() {
	      vm.saving = true;
	      todosFactory.addTask(vm.newTodo).then(
	        function() {
	          vm.saving = false;
	          alert('Successfully added ');
	        },
	        function() {
	        	alert('Error saving todo');
	        }
	      );
	    }
	  });

// Todos Factory
  angular.module('app').factory('todosFactory', function($http, $q) {
    var service = {
      getTodos: getTodos,
      addTodos: addTodos
    }

    return service;

    ////////////

    function getTodos() {
      var defer = $q.defer();

      $http.get('http://localhost:56182/api/todoes').then(
        function(response) {
          defer.resolve(response.data);
        },
        function(error) {
          defer.reject(error);
        }
      );

      return defer.promise;
    }

    function addTodos(vehicle) {
      var defer = $q.defer();

      $http.post('http://localhost:56182/api/todoes', vehicle).then(
        function(response) {
          defer.resolve(response.data);
        },
        function(error) {
          defer.reject(error);
        }
      );

      return defer.promise;
    }
  });