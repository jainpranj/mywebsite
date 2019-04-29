var myApp = angular.module("myApp", ["ngRoute", "ngAnimate"]);

myApp.config(function($routeProvider) {
  $routeProvider
    .when("/skills", {
      templateUrl: "partials/skill-list.html",
      controller: "BookListCtrl"
    })
    .when("/about", {
      templateUrl: "partials/about.html",
      controller: "BookListCtrl"
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
      name: "React, Redux, Webpack",
    },
    {
      name: "AngularJS, NodeJS, HapiJS",
    },
    {
      name: "Docker, Traefik, Vault"
    },
    {
      name: "Java, JavaEE, ES6"
    },
    {
      name: "HTML5, CSS3, REST, Apigee"
    },
    {
      name: "jQuery, GraphQL, SQL"
    },
    {
      name: "Consul, AWS, Google Cloud Platform, Hadoop, Hive"
    },
    {
      name: "Apache Kafka, Datadog, Spark",
    },
    {
      name: "Redis, MongoDB, Neo4j"
    },
    {
      name: "Jenkins, Git, Splunk"
    },
    {
      name: "Python, Shell Scripting, R"
    },
    {
      name: "Azure Machine learning, Tableau, luigi, Spring MVC, Adobe Experience Manager"
    }
  ];

  return {
    getBooks: function() {
      return books;
    }
  };
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
  };
});

myApp.controller("BookListCtrl", function($scope, bookService) {
  $scope.books = bookService.getBooks();
});
