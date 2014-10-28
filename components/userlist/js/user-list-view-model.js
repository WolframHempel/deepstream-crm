define(function( require ){

	var ko = require( 'ko' );

	var UserListViewModel = function( container, state ) {
		this.name = ko.observable( 'Wolfram' );
	};

	return UserListViewModel;
});