$('form').submit(function() {
  if ($('input').val() !== '') {
    const value = $('input').val();
    $('ul').append('<li>' + value + '<a href=>completed</a></li>');
  };
  $('input').val('');
  return false;
});
$(document).on('click', 'a', function(e) {
  e.preventDefault();
  $(this).parent().wrap("<strike>");
  $(this).fadeOut("slow");
});
