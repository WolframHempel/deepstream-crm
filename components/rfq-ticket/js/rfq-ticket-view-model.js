define(function( require ){
	var ko = require( 'ko' ),
		getObservable = require( 'common/deepstream-ko/get-observable' );

	var RfqTicketViewModel = function( state, container ) {
		this._state = state;
		this._container = container;
		
		this.currencyPair = ko.observable( 'GBPEUR' );
		this.amount = ko.observable( 1000000 );
	};

	RfqTicketViewModel.prototype.getQuote = function() {

	};

	return RfqTicketViewModel;
});