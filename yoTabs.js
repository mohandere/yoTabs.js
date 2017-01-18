/*
 *  yoTabs.js - v4.0.0
 *  Simple jquery Tabs with checkbox
 *  https://mohandere.github.io/yoTabs.js/
 *
 *  Made by Mohan Dere
 *  Under MIT License
 */
;( function( $, window, document, undefined ) {

	"use strict";

		// Create the defaults once
		var yoNameSpace = "yoTabs",
			defaults = {
				tabs: "> ul > li > input",
				content: "> .yo-collpase"
			};

		// The actual plugin constructor
		function YoTabs ( element, options ) {
			this.element = element;

			// Store options in settings
			this.settings = $.extend( {}, defaults, options );
			//We don't want to alter the default options for future instances of the plugin
			this._defaults = defaults;
			this._name = yoNameSpace;

			//initialize plugin
			this.init();
		}

		// Avoid YoTabs.prototype conflicts
		$.extend( YoTabs.prototype, {
			init: function() {

				// Cache elements
				this.$element = $(this.element);
				this.$tabs = this.$element.find(this.settings.tabs);
				this.$content = this.$element.find(this.settings.content);

				//if wrong html then through error
				if(!this.$tabs.length){
					try {
					  throw new Error('yoTabs.js: invalid html for tabs.');
					} catch (e) {
					  console.log(e.name + ': ' + e.message);
					}
				}

				//Bind event listerners on tabs
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