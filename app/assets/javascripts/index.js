$(document).ready(function() {

  $('.select-all').click(function() {
    if ($(this).children()[0].className == "fa fa-square-o") {
      $('.fa.fa-square-o').replaceWith("<i class='fa fa-check-square-o'></i>");
    } else {
      $('.fa.fa-check-square-o').replaceWith("<i class='fa fa-square-o'></i>");
    }
  });

});
