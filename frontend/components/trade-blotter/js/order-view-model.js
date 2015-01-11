define(function( require ){
	var getObservable = require( 'common/deepstream-ko/get-observable' ),
		deepstreamClient = require( 'services/deepstream' );

	var OrderViewModel = function( recordName, viewList ) {
		this._record = deepstreamClient.record.getRecord( recordName );
		this._viewList = viewList;

		this.currencyPair = getObservable( this._record, 'currencyPair' );
		this.amount = getObservable( this._record, 'amount' );
		this.state = getObservable( this._record, 'state' );

		this.askPrice = getObservable( this._record, 'askPrice' );
		this.bidPrice = getObservable( this._record, 'bidPrice' );

		this.side = getObservable( this._record, 'side' );
		this.tradedPrice = getObservable( this._record, 'tradedPrice' );
		this.tradeTime = getObservable( this._record, 'tradeTime' );
	};

	OrderViewModel.prototype.deleteTrade = function() {
		this._viewList.getList().removeEntry( this._record.name );
		this._record.delete();
	};

	return OrderViewModel;
});