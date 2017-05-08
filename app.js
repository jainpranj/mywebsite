var myApp = angular.module("myApp", ["ngRoute", "ngAnimate"]);

myApp.config(function($routeProvider) {
	$routeProvider
		.when("/skills", {
			templateUrl: "partials/skill-list.html",
			controller: "BookListCtrl"
		})
        .when("/about", {
            templateUrl: "partials/about.html",
            controller: "aboutCtrl"
        })
        .when("/exp", {
            templateUrl: "partials/experience.html",
            controller: "expCtrl"
        })
        .when("/proj", {
            templateUrl: "partials/projects.html",
            controller: "projCtrl"
        })
        .when("/conn", {
            templateUrl: "partials/connections.html",
            controller: "connCtrl"
        })
        .when("/acad", {
            templateUrl: "partials/academic.html",
            controller: "acadCtrl"
        })
	.otherwise({
		redirectTo: "/about"
	});
});



myApp.factory("bookService", function() {
	var books = [
		{

			name: "Java, JavaEE",
			rating: 90,

		},
        {

            name: "Python, Shell Scripting, R",
            rating: 80,

        },
        {

            name: "HTML5, CSS3",
            rating: 80,

        },
    {

		name: "Java Script, Jquery",
        rating: 95,

    },
        {

            name: "Angular JS , NodeJS",
            rating: 80,

        },
        {

            name: "AWS, Google Cloud Platform",
            rating: 80,

        },
        {

            name: "Spring MVC, Adobe Experience Manager",
            rating: 90,

        },
        {

            name: "Hadoop, Apache Spark, Pig , Hive",
            rating: 85,

        },
        {

            name: "Redis,Mongo DB, Neo4j",
            rating: 80,

        },
        {

            name: "Jenkins, Docker, Git",
            rating: 90,

        },
        {

            name: "Azure Machine learning, Tableau, luigi",
            rating: 85,

        }


	];
	
	return {
		getBooks: function() {
			return books;
		},

	}
});



myApp.controller("HeaderCtrl", function($scope, $location) {
	$scope.appDetails = {};
	$scope.appDetails.title = "Pranjal Jain";
	$scope.appDetails.tagline = "Full Stack Developer";
	
	$scope.nav = {};
	$scope.nav.isActive = function(path) {
		if (path === $location.path()) {
			return true;
		}
		
		return false;
	}
});

myApp.controller("BookListCtrl", function($scope, bookService) {
	$scope.books = bookService.getBooks();
	

});