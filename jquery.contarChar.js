/*
* jQuery contarChar plugin
* Character counter for text inputs and textareas
*
* Homepage: http://github.com/episko/jquery-contarChar/
*
* Copyright (c) 2011 Axel Vergult
* Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
* and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
*/

(function($) {

  $.fn.contarChar = function(options){

    var defaults = {
      limitTo:        140,
      warnAt:         30,
      container:      'span',
      containerClass: 'counter',
      warningClass:   'warning',
      counterText:    ''
    };

    var options = $.extend(defaults, options);
    var container = this;

    function contarCheck() {
      var content       = container.val();
      var contentLength = content.length;
      var count         = options.limitTo - contentLength;

      if (count < 0) {
        container.val(content.substring(0, options.limitTo));
        count = 0;
      }
      if (count >= 0 && count <= options.warnAt) {
        container.next().addClass(options.warningClass);
      } else {
        container.next().removeClass(options.warningClass);
      }
      container.next().html(options.counterText + count);
    };

    container.after('<'+ options.container +' class="' + options.containerClass + '">'+ options.counterText +'</'+ options.container +'>');
    contarCheck();
    container.bind('keyup', function(e){ contarCheck(); })
             .bind('mouseover', function(e){ setTimeout(function(){ contarCheck(); }, 10); })
             .bind('paste', function(e){ setTimeout(function(){ contarCheck(); }, 10); });
  };

})(jQuery);
