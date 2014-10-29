define(function( require ){

	var ko = require( 'ko' ),
		deepstream = require( 'services/deepstream' ),
		getObservable = require( 'common/deepstream-ko/get-observable' );

	var UserListViewModel = function( container, state ) {
		this._record = deepstream.getRecord( 'user/wolfram' );
		this.name = getObservable( this._record, 'firstname' );
	};

	return UserListViewModel;
});