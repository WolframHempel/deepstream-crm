define(function( require ){

	var template = require( 'text!../html/countdown-timer.html' );

	var CountdownTimer = function( element, duration, trigger ) {
		this._element = element;

		this._duration = duration;
		this._trigger = trigger;
		this._trigger.subscribe( this._onTriggerChange.bind( this ) );

		this._interval = null;
		this._startTime = null;

		this._startColor = [ 235, 55, 21 ];
		this._endColor = [ 8, 161, 82 ];

		this._element.innerHTML = template;
		this._canvas = this._element.getElementsByTagName( 'canvas' )[ 0 ];
		this._ctx = this._canvas.getContext( '2d' );

		this._remainingTimeElement = this._element.getElementsByClassName( 'remaining-time' )[ 0 ];
	};

	CountdownTimer.prototype._onTriggerChange = function() {
		if( this._trigger() === true ) {
			this._start();
		}
	};

	CountdownTimer.prototype._start = function() {
		this._startTime = Date.now();
		this._interval = setInterval( this._update.bind( this ), 1000 );
		this._update();
	};

	CountdownTimer.prototype._stop = function() {
		clearInterval( this._interval );
	};

	CountdownTimer.prototype._getColor = function( progress ) {
		var color = [], i, s, e;

		for( i = 0; i < this._startColor.length; i++ ) {
			s = this._startColor[ i ];
			e = this._endColor[ i ];
			color.push( Math.floor( s + ( ( e - s ) * progress ) ) );
		}

		return 'rgb(' + color.join( ',' ) + ')';
	};

	CountdownTimer.prototype._update = function() {
		var duration = this._duration(),
			now = Date.now();

		if( this._startTime + duration < now ) {
			this._stop();
		}

		var secondsTotal = Math.floor( duration / 1000 ),
			secondsLeft = Math.floor( ( ( this._startTime + duration ) - now ) / 1000 ),
			f = ( secondsLeft / secondsTotal ),
			startAngle = ( 3.5 * Math.PI ) - ( ( 2 * Math.PI ) * f );

		this._remainingTimeElement.innerHTML = secondsLeft;
		this._ctx.lineWidth = 5;
		this._ctx.strokeStyle = this._getColor( f );
		this._ctx.clearRect( 0, 0, 100, 100 );
		this._ctx.beginPath();
		this._ctx.arc( 50, 50, 40, startAngle, 3.5 * Math.PI );
		this._ctx.stroke();
	};

	return CountdownTimer;
});