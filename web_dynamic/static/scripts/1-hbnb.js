$(document).ready(function () {
  $('input[type="checkbox"]').change(function () {
    const amenityId = $(this).attr('data-id');
    const list = [];
    if (this.checked) {
      list.push(amenityId);
    } else {
      list.splice(list.indexOf(amenityId), 1);
    }
    $('div amenities  h4').html(list.join(','));
  });
});
