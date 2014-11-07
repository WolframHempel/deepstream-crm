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
		this.isSelected = ko.observable( false );
		eventHub.on( 'userSelected', this._onUserSelected, this );
	};

	UserListEntry.prototype.selectUser = function() {
		eventHub.emit( 'userSelected', this._record.getName() );
	};

	UserListEntry.prototype._onUserSelected = function( userRecordName ) {
		this.isSelected( this._record.getName() === userRecordName );
	};
	
	return UserListEntry;
});