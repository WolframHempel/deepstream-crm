define(function( require ){

	var ko = require( 'ko' ),
		deepstream = require( 'services/deepstream' ),
		getObservable = require( 'common/deepstream-ko/get-observable' ),
		shell = require( 'shell' ),
		template = require( 'text!../html/user-list-entry.html' );

	shell.registerTemplate( 'user-list-entry', template );
	var UserListViewModel = function( container, state ) {
		this._record = deepstream.getRecord( 'user/wolfram' );
		this.name = getObservable( this._record, 'firstname' );
		this.people = ko.observableArray([
			{ name: 'Wolfram' },
			{ name: 'Arthur' },
			{ name: 'Egon' }
		]);
	};

	return UserListViewModel;
});