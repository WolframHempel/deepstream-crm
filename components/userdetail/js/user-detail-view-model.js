define(function( require ){
	var ko = require( 'ko' ),
		deepstream = require( 'services/deepstream' ),
		getObservable = require( 'common/deepstream-ko/get-observable' ),
		eventHub = require( 'services/eventhub' );
window.deepstream = deepstream;
	var UserDetailViewModel = function( recordName ) {
		this._record = deepstream.getAnonymousRecord();
		this.firstname = getObservable( this._record, 'firstname' );
		this.lastname = getObservable( this._record, 'lastname' );
		eventHub.on( 'userSelected', this._setActiveUser, this );
	};

	UserDetailViewModel.prototype._setActiveUser = function( recordName ) {
		this._record.setName( recordName );
	};
	
	return UserDetailViewModel;
});