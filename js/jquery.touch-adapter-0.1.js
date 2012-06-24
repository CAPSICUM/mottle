/*
jQuery wrapper for TouchAdapter
*/
;(function() {
	
	var defaultBind = function(obj, evt, fn) { $(obj).on(evt, fn) },
		defaultUnbind = function(obj, evt, fn) { $(obj).off(evt, fn); },
		defaultUnwrap = function(e) { return e.originalEvent; };

	/**
		TouchAdapter bound to jQuery's event binders, using 'on' and 'off' by default. This means it works for 1.7.x and above by default.
	*/
	window.jQueryTouchAdapter = function(params) {
		params = params || {};
		params.bind = params.bind || defaultBind;
		params.unbind = params.unbind || defaultUnbind;
		params.unwrap = params.unwrap || defaultUnwrap;

		TouchAdapter.apply(this, [ params ]);
	};

	/*
		Plugin code.  adds:

			$.fn.taBind
			$.fn.taUnbind

		i know it's supposed to be verboten to add more than one thing to the global namespace.
	*/
	(function( $ ) {
	  $.fn.taBind = function(evt, fn) {
	  
	  	var jqt = new jQueryTouchAdapter();

	    return this.each(function() {
	      jqt.bind($(this), evt, fn);
	    });
	  };
	  $.fn.taUnbind = function(evt, fn) {
	  
	  	var jqt = new jQueryTouchAdapter();

	    return this.each(function() {
	      jqt.unbind($(this), evt, fn);
	    });
	  };
	})( jQuery );			


})();