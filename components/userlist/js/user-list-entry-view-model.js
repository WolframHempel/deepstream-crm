define(function( require ){
	var ko = require( 'ko' ),
		deepstream = require( 'services/deepstream' ),
		getObservable = require( 'common/deepstream-ko/get-observable' ),
		template = require( 'text!../html/user-list-entry.html' ),
		eventHub = require( 'services/eventhub' );

	require( 'shell' ).registerTemplate( 'user-list-entry', template );

	var UserListEntry = function( recordName ) {
		this._record = deepstream.getRecord( recordName );
		this.firstname = getObservable( this._record, 'firstname' );
		this.lastname = getObservable( this._record, 'lastname' );
	};

	UserListEntry.prototype.selectUser = function() {
		eventHub.emit( 'userSelected', this._record.getName() );
	};
	
	return UserListEntry;
});