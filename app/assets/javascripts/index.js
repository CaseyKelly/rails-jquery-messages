$(document).ready(function() {

  $('.select-all').click(function() {
    if ($(this).children()[0].className == "fa fa-square-o") {
      $('.fa.fa-square-o').replaceWith("<i class='fa fa-check-square-o'></i>");
      $('.select').replaceWith("<input type='checkbox' class='select' checked></i>");
    } else {
      $('.fa.fa-check-square-o').replaceWith("<i class='fa fa-square-o'></i>");
      $('.select').replaceWith("<input type='checkbox' class='select'></i>");
    }
  });

  var mark = function markButtons() {
    if ($(".select:checked").length > 0) {
      $('#read').replaceWith("<button class='btn btn-default' id='read'>Mark As Read</button>");
      $("#unread").replaceWith("<button class='btn btn-default' id='unread'>Mark As Unread</button>");
    } else {
      $('#read').replaceWith("<button class='btn btn-default' id='read' disabled='disabled'>Mark As Read</button>");
      $("#unread").replaceWith("<button class='btn btn-default' id='unread' disabled='disabled'>Mark As Unread</button>");
    }
  }

  $('.select-box').on('click', '.select', mark);
  $('.select-all').on('click', mark);
});
