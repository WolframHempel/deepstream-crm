define(function( require ){

	var ko = require( 'ko' ),
		userListTemplate = require( 'text!./html/user-list.html' ),
		UserListViewModel = require( './js/user-list-view-model' );

	require( 'css!./css/user-list.css' );

	var UserList = function( container, state ) {
		this.viewmodel = new UserListViewModel( container, state );
		container.getElement().html( userListTemplate );
		ko.applyBindings( this.viewmodel, this.template );
	};

	return UserList;
});