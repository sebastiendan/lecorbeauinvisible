(function ($, Drupal, window, document, undefined) {

// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.my_custom_behavior = {
  attach: function(context, settings) {
	  
	  $(document).ready(function(){
		  
		  if ($('body.front').length > 0) {
			  $('td.has-events').click(function(event){
				  var date = $(event.currentTarget).attr('id').split('calendrier-')[1];
				  window.location.href = 'agenda/' + date;
			  });
		  }
		  
		  if ($('body.page-agenda').length > 0) {
			  var date = window.location.href.split('agenda');
			  if (date[1]) {
				  var selectedDate = date[1].split('/')[1];
				  var $events = [];
				  $('.node-agenda').each(function(index, element){
					  var $element = $(element);
					  if ($element.find('.field-name-field-date span').attr('content').indexOf(selectedDate) != -1) {
						  $events.push($element);
					  } else {
						  $element.addClass('blur');
					  }
				  });
				  var top = $events[0].offset();
				  top = top.top - ($(window).height())/2;
				  window.scrollTo(0, top);
			  }
		  }
		  
		  if (window.innerHeight < 640 || $(window).height() < 640) {
			  if ($('.mobile-button').length < 1) {
				  $('body').prepend('<div id=mobile-button></div>');
				  $('#mobile-button').click(function(){
					 if ($('#mobile-button').hasClass('open')) {
						 $('#navigation').hide();
						 $('#mobile-button').removeClass('open');
					 } else {
						 $('#navigation').show();
						 $('#mobile-button').addClass('open');
					 }
				  });
			  }
		  }
	  });    	
    }
  }
})(jQuery, Drupal, this, this.document);