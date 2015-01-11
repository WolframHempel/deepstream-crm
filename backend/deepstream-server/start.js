var deepstream = new (require( 'deepstream.io' ))();

deepstream.set( 'permissionHandler', {
	isValidUser: function( handshakeData, authData, callback ) {
		if( authData.user === 'test-oms' || authData.user === 'test-client' ) {
			callback( null, authData.user );
		} else {
			callback( 'Invalid user' );
		}
		
	},

	canPerformAction: function( username, message, callback ) {
		callback( null, true );
	}
});

deepstream.start();