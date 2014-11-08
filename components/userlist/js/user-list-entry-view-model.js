define(function( require ){
	var ko = require( 'ko' ),
		deepstream = require( 'services/deepstream' ),
		getObservable = require( 'common/deepstream-ko/get-observable' ),
		template = require( 'text!../html/user-list-entry.html' ),
		eventHub = require( 'services/eventhub' );

	require( 'shell' ).registerTemplate( 'user-list-entry', template );

	var UserListEntry = function( recordName, viewList ) {
		this._record = deepstream.getRecord( recordName );
		this._viewList = viewList;

		this.firstname = getObservable( this._record, 'firstname' );
		this.lastname = getObservable( this._record, 'lastname' );
		this.isSelected = ko.observable( false );
		this.isOpen = ko.observable( false );

		requestAnimationFrame( this.isOpen.bind( this, true ) );
		eventHub.on( 'userSelected', this._onUserSelected, this );
	};

	UserListEntry.prototype.selectUser = function() {
		eventHub.emit( 'userSelected', this._record.getName() );
	};

	UserListEntry.prototype.onDeleteClick = function( viewModel, e ) {
		e.stopPropagation();
		this.isOpen( false );
		setTimeout( this._deleteEntry.bind( this ), 300 );
	};

	UserListEntry.prototype._deleteEntry = function() {
		this._record.remove();
		this._viewList.getList().removeEntry( this._record.getName() );
	};

	UserListEntry.prototype._onUserSelected = function( userRecordName ) {
		this.isSelected( this._record.getName() === userRecordName );
	};
	
	return UserListEntry;
});