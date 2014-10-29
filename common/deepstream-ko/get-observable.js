define(function( require ){
	
	var ko = require( 'ko' );
	
	return function( record, path ) {
			
		var downStreamFormatter = null, 
			upStreamFormatter = null,
			observable = ko.observable( record.get( path ) ),
			onRecordChange,
			subscription;

		onRecordChange = function( value ) {
			if( downStreamFormatter === null ) {
				observable( value );
			} else {
				observable( downStreamFormatter( value ) );
			}
		};
		
		record.subscribe( path, onRecordChange );
		
		subscription = observable.subscribe(function( value ){
			if( upStreamFormatter === null ) {
				record.set( path, value );
			} else {
				record.set( path, upStreamFormatter( value ) );
			}
		});

		observable.destroyBindings = function() {
			record.unsubscribe( path, onRecordChange );
			subscription.dispose();
			delete observable.destroyBindings;
			delete observable.formatDownStream;
			delete observable.formatUpStream;
		};

		observable.formatDownStream = function( format ) {
			downStreamFormatter = format;
		};

		observable.formatUpStream = function( format ) {
			upStreamFormatter = format;
		};

		return observable;

	};
});