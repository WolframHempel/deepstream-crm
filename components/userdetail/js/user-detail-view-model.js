define(function( require ){
	var ko = require( 'ko' ),
		deepstream = require( 'services/deepstream' ),
		getObservable = require( 'common/deepstream-ko/get-observable' ),
		eventHub = require( 'services/eventhub' );

	var UserDetailViewModel = function( recordName ) {
		this._record = deepstream.getAnonymousRecord();
		eventHub.on( 'userSelected', this._setActiveUser, this );
		this.isUserSelected = ko.observable( false );

		// Name
		this.firstname = getObservable( this._record, 'firstname' );
		this.lastname = getObservable( this._record, 'lastname' );

		// Address
		this.streetName = getObservable( this._record, 'streetName' );
		this.streetNumber = getObservable( this._record, 'streetNumber' );
		this.postcode = getObservable( this._record, 'postcode' );
		this.city = getObservable( this._record, 'city' );
	};

	UserDetailViewModel.prototype._setActiveUser = function( recordName ) {
		this._record.setName( recordName );
		this.isUserSelected( true );
	};
	
	return UserDetailViewModel;
});