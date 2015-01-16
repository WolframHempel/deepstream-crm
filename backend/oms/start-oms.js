var deepstream = require( 'deepstream.io-client-js' ),
	Rfq = require( './rfq' ),
	client = deepstream( 'localhost:6021' ),
	orders = client.record.getList( 'orders' );

client.on( 'error', function( msg ){
	console.log( 'ERROR', msg );
});

client.login({ user: 'test-oms' }, function( loggedIn, error, errorMsg ){
	if( loggedIn ) {
		console.log( 'logged in' );
	} else {
		console.log( errorMsg );
	}
});

client.rpc.provide( 'fx-spot-rfq', function( data, response ){
	var rfqName = 'fx-spot-rfq/' + client.getUid();
	orders.addEntry( rfqName );
	new Rfq( client.record.getRecord( rfqName ) );
	response.send( rfqName );
});
