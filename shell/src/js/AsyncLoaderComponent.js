define(function(){

	var AsyncLoaderComponent = function( container, state ){
		container.getElement().html( state.url );
	};

	return AsyncLoaderComponent;
});