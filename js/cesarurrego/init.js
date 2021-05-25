
$(document).ready(function(){
  $('.fixed-action-btn').floatingActionButton();
  setTimeout(
    function() {
      $('#loadingContent').html('Just wait a little more....');
    }, 5000);
  setTimeout(
    function() {
      $('#loadingContent').html('Keeeeeep waiting.......');
    }, 15000);
});