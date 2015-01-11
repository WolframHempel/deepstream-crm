define(function( require ){

	var deepstreamClient = require( 'services/deepstream' ),
		ViewList = require( 'common/deepstream-ko/view-list' ),
		OrderViewModel = require( './order-view-model' ),
		orderTemplate = require( 'text!../html/order.html' ),
		emptyTemplate = require( 'text!../html/empty.html' ),
		shell = require( 'shell' );

	shell.registerTemplate( 'tradeblotter-entry', orderTemplate );
	shell.registerTemplate( 'tradeblotter-empty', emptyTemplate );

	var TradeBlotter = function( state, container ) {
		this._list = deepstreamClient.record.getList( 'orders' );
		this.trades = new ViewList( OrderViewModel, this._list );
		this.trades.setTemplates( 'tradeblotter-entry', 'tradeblotter-empty' );
	};

	return TradeBlotter;
});