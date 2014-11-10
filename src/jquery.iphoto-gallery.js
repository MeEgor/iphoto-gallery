(function( $ ) {
  $.fn.iPhoto = function(options) {

    var settings = $.extend( {
          extraClass: null, // дополнительный класс для галереи
          // функция возвращающая шаблон для изображения открытой галереи
          // полезно, если надо прикрутить лайтбокс
          imgTemplate: function(img){
            return "<img src=" + $(img).attr('src') + " alt=" + $(img).attr('alt') + " />"
          }
        }, options),
        body = $('body')

    return this.each(function(){
      var gallery = $(this)
      var width = null,
          images = [],
          num = null,
          step_width = null,
          prev_step = null

      var init = function(){
        gallery.addClass('my-iphoto-gallery')
        if(settings.extraClass){
          gallery.addClass(settings.extraClass)
        }

        // переопределим переменные
        width = gallery.outerWidth()
        images = gallery.children('img')
        num = images.length
        step_width = width / num

        $(images[0]).addClass('step-now')
      }
      // показываем картинку в зависимости от положения мыши
      var showImage = function(e){
        if(e.offsetX == undefined){
          posx = e.pageX - gallery.offset().left
        } else {
          posx = e.offsetX
        }
        step = Math.floor(posx / step_width)
        if(step != prev_step){
          prev_step = step
        }
        images.removeClass('step-now')
        $(images[step]).addClass('step-now')
      }

      init();
      // наводим курсор
      gallery.on('mouseenter', function(e){
        showImage(e)
      })
      // движение курсора
      gallery.on('mousemove', function(e){
        showImage(e)
      })
      // убираем курсор
      gallery.on('mouseleave', function(e){
        images.removeClass('step-now')
        $(images[0]).addClass('step-now')
        prev_step = null
      })
      // клик по галерее
      gallery.on('click', function(e){
        var container = $("<div class=\"gallery-container\"></div>"),
            overlay = $("<div class=\"owerlay my-gallery-overlay\"></div>")

        body.css('overflow', 'hidden')
        body.append(overlay.append(container))
        // создаем коллекцию картинок
        images.each(function(i, img){
          image = $(settings.imgTemplate( img ))
          image.addClass('my-gallery-image')
          container.append(image)
        })
        overlay.animate({opacity: 1}, 300)
        // уничтожаем оверлей
        overlay.on('click', function(e){
          if(!$(e.target).hasClass('my-gallery-image')){
            $(this).unbind('click')
            $(this).animate({opacity: 0}, 300, function(){
              this.remove()
            })
          }
        })
      })
    })
  };
})(jQuery);
