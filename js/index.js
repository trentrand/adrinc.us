(function() {
  var $contactsanchor = $('.js-contactsanchor');
  var $portfoliosanchor = $('.js-portfoliosanchor');
  var $foundersanchor = $('.js-foundersanchor');
  var $aboutanchor = $('.js-aboutanchor');
  var $contactbutton = $('.js-contactbutton');
  var $portfoliobutton = $('.js-portfoliobutton');
  var $foundersbutton = $('.js-foundersbutton');
  var $aboutbutton = $('.js-aboutbutton');


  $(document).ready(function(){
  	$('a[href^="#"]').on('click',function (e) {
  	    e.preventDefault();

  	    var target = this.hash,
  	    $target = $(target);

  	    $('html, body').stop().animate({
  	        'scrollTop': $target.offset().top
  	    }, 900, 'swing', function () {
  	        window.location.hash = target;
  	    });
  	});
  });
})();