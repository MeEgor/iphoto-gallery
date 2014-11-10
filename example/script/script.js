$().ready(function(e){
  $('.gallery').iPhoto({
    extraClass: "my-class",
    imgTemplate: function(img){
      fullsize = $(img).data('fullsize')
      return "<a href=" + fullsize + "><img src=" + $(img).attr('src') + " alt=" + $(img).attr('alt') + " /></a>"
    }
  })
})
