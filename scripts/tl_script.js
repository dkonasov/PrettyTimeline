jQuery('document').ready(function(){

jQuery('.tlradio').on('click', function(){

value=-(jQuery(this).val()*500)+500;
jQuery('#inner').css('left', value);

});

});