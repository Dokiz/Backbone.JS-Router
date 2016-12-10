var Router = Backbone.Router.extend({
	routes:{
		"first":           "first",
	    "second":          "second",
		"third":           "third"	
	},
	initialize: function(){
		Backbone.history.start();
	},
	first: function(){
		$('.hero-unit').hide();
		$('.#page-first').show);
		
	},
	second: function(){
		$('.hero-unit').hide();
		$('.#page-first').show);
		
	},
	thirdt: function(){
		$('.hero-unit').hide();
		$('.#page-first').show);
		
	}



	
});