
$('.with-caption').magnificPopup({
    type: 'image',
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',

    image: {
        verticalFit: true,
        titleSrc: function(item) {
    
    var caption = item.el.attr('title');
    
    var pinItURL = "https://pinterest.com/pin/create/button/";
    
    // Refer to https://developers.pinterest.com/pin_it/
    pinItURL += '?url=' + 'http://dimsemenov.com/plugins/magnific-popup/';
    pinItURL += '&media=' + item.el.attr('href');
    pinItURL += '&description=' + caption;
    return caption;
    
    
    // return caption + ' &middot; <a class="pin-it" href="'+pinItURL+'" target="_blank"><img src="https://assets.pinterest.com/images/pidgets/pin_it_button.png" /></a>';
        }
    },


gallery: {
  enabled: true 
}, 



callbacks: {
  open: function() {
    this.wrap.on('click.pinhandler', '.pin-it', function(e) {
      
      // This part of code doesn't work on CodePen, as it blocks window.open
      // Uncomment it on your production site, it opens a window via JavaScript, instead of new page
      /*window.open(e.currentTarget.href, "intent", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 50) + ",top=" + 100);

      
      return false;*/
    });
  },
  beforeClose: function() {
   //this.wrap.off('click.pinhandler');
  }
}

});


