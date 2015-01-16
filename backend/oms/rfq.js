var Rfq = function( record ) {
	this._record = record;
	this._pricingDuration = 30000;

	this._record.on( 'delete', this._stopPricing.bind( this ) );
	this._record.set( 'state', 'initial' );
	this._record.set( 'rfqTimeout', this._pricingDuration );
	this._record.subscribe( 'state', this._onStateChange.bind( this ) );
	
	this._pricingTimeout = null;
	this._priceTimeout = null;
};

Rfq.prototype._onStateChange = function( state ) {
	if( state === 'quoteRequested' ) {	
		this._startPricing();
	}

	if( state === 'initial' ) {
		this._stopPricing();
	}

	if( state === 'executing' ) {
		this._stopPricing();
		this._execute();
	}
};

Rfq.prototype._startPricing = function() {
	this._createPrice();
	this._pricingTimeout = setTimeout( this._onPricingTimeout.bind( this ), this._pricingDuration );
	this._createPrice();
	this._record.set( 'state', 'pricing' );
};

Rfq.prototype._stopPricing = function() {
	clearTimeout( this._pricingTimeout );
	clearTimeout( this._priceTimeout );
};

Rfq.prototype._onPricingTimeout = function() {
	this._stopPricing();

	if( this._record.get( 'state' ) === 'pricing' ) {
		this._record.set( 'state', 'initial' );
	}
};

Rfq.prototype._createPrice = function() {
	var price = 1.2 + Math.random() * 0.01;
	this._record.set( 'bidPrice', price + 0.001 );
	this._record.set( 'askPrice', price - 0.001 );
	this._priceTimeout = setTimeout( this._createPrice.bind( this ), Math.floor( Math.random() * 1500 ) );
};

Rfq.prototype._execute = function() {
	this._stopPricing();
	this._record.set( 'tradedPrice', this._record.get( this._record.get( 'side' ) + 'Price' ) );
	this._record.set( 'tradeTime', Date.now() );
	this._record.set( 'state', 'complete' );
};

module.exports = Rfq;