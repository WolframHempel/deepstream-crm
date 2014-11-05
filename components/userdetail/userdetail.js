define(function( require ){

	var ko = require( 'ko' ),
		userDetailTemplate = require( 'text!./html/user-detail.html' ),
		UserDetailViewModel = require( './js/user-detail-view-model' );

	require( 'css!./css/user-detail.css' );

	var UserDetail = function( container, state ) {
		this.viewmodel = new UserDetailViewModel( container, state );
		container.getElement().html( userDetailTemplate );
		ko.applyBindings( this.viewmodel, container.getElement()[ 0 ] );
	};

	return UserDetail;
});