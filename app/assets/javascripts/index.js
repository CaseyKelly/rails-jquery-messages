$(document).ready(function() {

  var app = (function() {
    return {
      buttonEnable: buttonEnable,
      selectAll: selectAll,
      star: star
    };

    function star() {
      $('.star').on('click', function (){
        if ($(this).is('.fa-star-o')) {
          $(this).removeClass('fa-star-o').addClass('fa-star');
        } else {
          $(this).removeClass('fa-star').addClass('fa-star-o');
        }
      });
    }

    function buttonEnable() {
      if ($('div.row.message').hasClass('selected')) {
       $('.read:disabled').prop("disabled", false);
       $('.form-control:disabled').prop("disabled", false);
      } else {
       $('.read').prop("disabled", true);
       $('.form-control').prop("disabled", true);
      }
    }

    function selectAll() {
     $(".btn:has(i.fa)").on('click', function(e) {
       $(this).children().first().toggleClass("fa-square-o").toggleClass("fa-check-square-o");
       $('.message').toggleClass('selected');
       toggleProp('input', 'checked');
       buttonEnable();
     });
    }
  })();

  $(function() {
    app.selectAll();
    app.star();
    $("input:checkbox").on('click', function() {
      $(this).closest('.message').toggleClass('selected');
      $(this).trigger('change');
      app.buttonEnable();
      if ($(".select:checked").length === $(".message").length) {
        $(".btn:has(i.fa)").children().first().removeClass("fa-minus-square-o").toggleClass("fa-check-square-o");
      } else if ($(".select:checked").length > 0 && ($(".select:checked").length < 30)) {
        $(".btn:has(i.fa)").children().first().removeClass("fa-square-o").addClass("fa-minus-square-o");
      } else if ($(".select:checked").length === 0) {
        $(".btn:has(i.fa)").children().first().removeClass("fa-minus-square-o").addClass("fa-square-o");
      }
    });
  });

  function toggleProp(el, property) {
   var val = $(el).prop(property);
   $(el).prop(property, !val);
  }

});
