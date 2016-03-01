angular.module('blog',['ngAnimate', 'ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url:'/',
				templateUrl: 'static/home.html'
			})
			.state('note', {
				url: '/note',
				templateUrl:'static/note.html'
			})
			.state('front-end', {
				url: '/front-end',
				templateUrl:'static/front-end.html'
			})
			.state('design', {
				url: '/design',
				templateUrl:'static/design.html'
			})
			.state('novel', {
				url: '/novel',
				templateUrl:'static/novel.html'
			})
			.state('music', {
				url: '/music',
				templateUrl:'static/music.html'
			})
			.state('about', {
				url: '/about',
				templateUrl:'static/about.html'
			});
	})

	.directive('headerNav', function(){
		return {
			templateUrl: 'module/headerNav.html'
		}
	});