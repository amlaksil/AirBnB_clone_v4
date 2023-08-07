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
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data, textStatus) {
    if (textStatus === 'success') {
      if (data.status === 'OK') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
    }
  });
});
