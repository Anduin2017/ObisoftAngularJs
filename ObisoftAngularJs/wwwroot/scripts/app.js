'use strict';
angular.module('ObisoftAngularJs', [
'ngRoute',
'ngAnimate',
'ngSanitize',
'ui.bootstrap',
'easypiechart',
'textAngular',
'ui.tree',
'ngMap',
'ngTagsInput',
'slick',
'ui.select',
'selectApp',
'ui.calendar',
'tablesorting',
'inlineedittable',
'app.controllers',
'app.apis',
'app.directives',
'app.localization',
'app.nav',
'app.ui.ctrls',
'app.ui.directives',
'app.form.validation',
'app.ui.form.ctrls',
'app.ui.form.directives',
'app.tables',
'app.notice',
'app.team',
'app.signin',
'app.forgotPassword',
'app.signup',
'app.chart.ctrl',
'app.chart.directives',
'angular-animate',
'app.calendar',
'xeditable',
'FullscreenApp',
'galleryApp',
'datatables',
'app.support',
'app.article'
])
.config([
'$routeProvider', function ($routeProvider) {
    var routes = [
    'dashboard/dashboard-v1',
    'dashboard/notice',
    'teams/team',
    'teams/createnew',
    'teams/teamprofile',
    'ui/typography',
    'ui/buttons',
    'ui/icons',
    'ui/grids',
    'ui/widgets',
    'ui/components',
    'ui/timeline',
    'ui/nested-lists',
    'ui/fontawesome',
    'ui/animation',
    'ui/panel',
    'ui/xeditable',
    'tables/static',
    'tables/dynamic',
    'tables/responsive',
    'forms/elements',
    'forms/layouts',
    'forms/validation',
    'forms/select',
    'forms/wizard',
    'charts/flot',
    'charts/morris',
    'charts/highcharts',
    'pages/404',
    'pages/500',
    'pages/blank',
    'pages/forgot-password',
    'pages/invoice',
    'pages/lock-screen',
    'pages/profile',
    'pages/signin',
    'pages/signup',
    'pages/directory',
    'pages/faq',
    'pages/gallery',
    'mail/compose',
    'mail/inbox',
    'mail/mailview',
    'calender/calender',
    'ngtable/ngtable',
    'settings/settings-panel',
    'support/community',
    'support/faq',
    'support/settings',
    'support/article',
    'support/publish'
    ];
    routes.forEach(function (route) {
        var url = '/' + route;
        var config = {
            templateUrl: 'views/' + route + '.html'
        };
        $routeProvider.when(url, config);
        return $routeProvider;
    });
    return $routeProvider.when('/', {
        redirectTo: 'dashboard/dashboard-v1'
    }).when('/404', {
        templateUrl: 'views/pages/404.html'
    }).otherwise({
        redirectTo: '/404'
    });
}]);