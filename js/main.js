$(document).ready(function(){
  $( ".shoeclick" ).click(function() {
    $('.order-details').text("Thank you for ordering " + $(this).data('id') + "!");
    $('.order-link').click();
  });
});
