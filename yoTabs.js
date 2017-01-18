/*
 *  jquery-boilerplate - v4.0.0
 *  A jump-start for jQuery plugins development.
 *  http://jqueryboilerplate.com
 *
 *  Made by Mohan Dere
 *  Under MIT License
 */
// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;( function( $, window, document, undefined ) {

	"use strict";

		// undefined is used here as the undefined global variable in ECMAScript 3 is
		// mutable (ie. it can be changed by someone else). undefined isn't really being
		// passed in so we can ensure the value of it is truly undefined. In ES5, undefined
		// can no longer be modified.

		// window and document are passed through as local variable rather than global
		// as this (slightly) quickens the resolution process and can be more efficiently
		// minified (especially when both are regularly referenced in your plugin).

		// Create the defaults once
		var yoNameSpace = "yoTabs",
			defaults = {
				tabs: "> ul > li > input",
				content: "> .yo-collpase"
			};

		// The actual plugin constructor
		function YoTabs ( element, options ) {
			this.element = element;

			// jQuery has an extend method which merges the contents of two or
			// more objects, storing the result in the first object. The first object
			// is generally empty as we don't want to alter the default options for
			// future instances of the plugin
			this.settings = $.extend( {}, defaults, options );
			this._defaults = defaults;
			this._name = yoNameSpace;
			this.init();
		}

		// Avoid YoTabs.prototype conflicts
		$.extend( YoTabs.prototype, {
			init: function() {

				// Place initialization logic here
				// You already have access to the DOM element and
				// the options via the instance, e.g. this.element
				// and this.settings
				// you can add more functions like the one below and
				// call them like the example bellow

				this.$element = $(this.element);
				this.$tabs = this.$element.find(this.settings.tabs);
				this.$content = this.$element.find(this.settings.content);

				if(!this.$tabs.length){
					try {
					  throw new Error('yoTabs.js: invalid html for tabs.');
					} catch (e) {
					  console.log(e.name + ': ' + e.message);
					}
				}

				this.bindTabClicks();

				//select tab #1 first
				this.$tabs.eq(0).trigger('click');
			},
			bindTabClicks: function() {
				var _this = this;
				this.$tabs.change(function(e) {
					// Select the panel for the clicked tab
        	_this.selectTab($(this));
				});

			},
			closeTabs: function($activeTab){
				this.$content.not($activeTab).hide();
			},
			selectTab: function($tab){
				var contentId = $tab.data('toggle');
				//close other tabs
				this.closeTabs($tab);
				$(contentId).show();
			},

		} );

		// A really lightweight plugin wrapper around the constructor,
		// preventing against multiple instantiations
		$.fn[ yoNameSpace ] = function( options ) {
			return this.each( function() {
				if ( !$.data( this, "plugin_" + yoNameSpace ) ) {
					$.data( this, "plugin_" +
						yoNameSpace, new YoTabs( this, options ) );
				}
			} );
		};

} )( jQuery, window, document );