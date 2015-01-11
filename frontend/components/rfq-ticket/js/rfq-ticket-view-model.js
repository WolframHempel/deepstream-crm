define(function( require ){

	var getObservable = require( 'common/deepstream-ko/get-observable' ),
		deepstreamClient = require( 'services/deepstream' ),
		ko = require( 'ko' );

	var RfqTicketViewModel = function( state, container ) {
		this._state = state;
		this._container = container;
		this._record = deepstreamClient.record.getAnonymousRecord();
		xxx = this;
		this.currencyPair = getObservable( this._record, 'currencyPair' );
		this.amount = getObservable( this._record, 'amount' );
		this.state = getObservable( this._record, 'state' );
		this.rfqTimeout = getObservable( this._record, 'rfqTimeout' );
		this.timeoutTrigger = ko.observable( false );

		this.askPrice = getObservable( this._record, 'askPrice' );
		this.bidPrice = getObservable( this._record, 'bidPrice' );

		this.side = getObservable( this._record, 'side' );
		this.tradedPrice = getObservable( this._record, 'tradedPrice' );
		this.tradeTime = getObservable( this._record, 'tradeTime' );

		this.newRfq();
	};

	RfqTicketViewModel.prototype.getQuote = function() {
		this.timeoutTrigger( false );
		this.timeoutTrigger( true );
		this.state( 'quoteRequested' );
	};

	RfqTicketViewModel.prototype.newRfq = function() {
		deepstreamClient.rpc.make( 'fx-spot-rfq', null, this._onRfq.bind( this ) );
	};

	RfqTicketViewModel.prototype.execute = function( side ) {
		this.side( side );
		this.state( 'executing' );
	};

	RfqTicketViewModel.prototype._onRfq = function( error, rfqName ) {
		this._record.setName( rfqName );
	};

	return RfqTicketViewModel;
});