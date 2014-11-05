define(function( require ){

	var ko = require( 'ko' ),
		deepstream = require( 'services/deepstream' ),
		ViewList = require( 'common/deepstream-ko/view-list' ),
		UserListEntryViewModel = require( './user-list-entry-view-model' ),
		template = require( 'text!../html/user-list.html' );

	require( 'shell' ).registerTemplate( 'user-list', template );
	
	var UserListViewModel = function( container, state ) {
		this._viewList = new ViewList( UserListEntryViewModel, deepstream.getList( 'users' ) );
		this.people = this._viewList.entries;
	};

	UserListViewModel.prototype.addUser = function() {
		var recordName = 'user/' + deepstream.getUid(),
			entries = this._viewList.getList().getEntries();

		deepstream.getRecord( recordName ).set({
			firstname: 'new',
			lastname: 'user'
		});

		entries.push( recordName );
		this._viewList.getList().setEntries( entries );
	};

	return UserListViewModel;
});