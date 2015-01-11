define(function( require ){

	var ko = require( 'ko' );

	var ExecuteButtonViewModel = function( params ) {
		this._side = params.side;
		this._onClick = params.click;
		this._lastPrice = null;
		this._price = params.price;
		this._price.subscribe( this._updateDisplayedPrice.bind( this ) );
		this._updateDisplayedPrice();

		this.label = ko.observable( this._side === 'bid' ? 'BUY' : 'SELL' );
		this.lastChange = ko.observable( null );
		this.pricePartSub = ko.observable();
		this.pricePartMain = ko.observable();
		this.pricePartSuper = ko.observable();
	};

	ExecuteButtonViewModel.prototype.execute = function() {
		this._onClick( this._side, this._price() );
	};

	ExecuteButtonViewModel.prototype._updateDisplayedPrice = function() {
		var price = this._price(),
			priceString;

		if( !price ) {
			return;
		}

		priceString = price.toString();
		this.pricePartSub( priceString.substr( 0, 4 ) );
		this.pricePartMain( priceString.substr( 4, 2 ) );
		this.pricePartSuper( priceString.substr( 6, 1 ) );

		this.lastChange( null );
		requestAnimationFrame( this._flash.bind( this ) );
	};

	ExecuteButtonViewModel.prototype._flash = function() {
		var currentPrice = this._price();

		if( this._lastPrice ) {
			this.lastChange( this._lastPrice > currentPrice ? 'down' : 'up' );
		}

		this._lastPrice = currentPrice;
	};

	return ExecuteButtonViewModel;
});