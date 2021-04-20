$(document).ready(function() {
    // the same as yours.
    function rotateOnMouse(e, pw) {
        var offset = pw.offset();
        var center_x = (offset.left) + ($(pw).width() / 2);
        var center_y = (offset.top) + ($(pw).height() / 2);
        var mouse_x = e.pageX;
        var mouse_y = e.pageY;
        var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
        var degree = (radians * (180 / Math.PI) * -1) + 100;
        //            window.console.log("de="+degree+","+radians);
        $(pw).css('-moz-transform', 'rotate(' + degree + 'deg)');
        $(pw).css('-webkit-transform', 'rotate(' + degree + 'deg)');
        $(pw).css('-o-transform', 'rotate(' + degree + 'deg)');
        $(pw).css('-ms-transform', 'rotate(' + degree + 'deg)');
    }
  
    $('.drop div img').mousedown(function(e) {
      e.preventDefault(); // prevents the dragging of the image.
      $(document).bind('mousemove.rotateImg', function(e2) {
        rotateOnMouse(e2, $('.drop div img'));
      });
    });
  
    $(document).mouseup(function(e) {
      $(document).unbind('mousemove.rotateImg');
    });
  });