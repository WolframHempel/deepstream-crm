define(function(){

	var AsyncLoaderComponent = function( container, state ){
		this.component = null;
		this._container = container;
		this._state = state;

		require( [ state.url ], this._onLoad.bind( this ) );
	};

	AsyncLoaderComponent.prototype._onLoad = function( Component ) {
		this.component = new Component( this._container, this._state );
	};

	return AsyncLoaderComponent;
});