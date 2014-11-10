# iphoto-gallery

demo http://iphoto-plugin-demo.16mb.com/index.html

This plugin creates iPhoto like gallery.

## Basic usage

1. Include jQuery
2. Include iphoto-gallery.min.js
3. Include iphoto-gallery.css

html

```html
<div class="any-class">
    <img src="...">
    <img src="...">
    <img src="...">
</div>
```

javascript

``` javascript
$('.any-class').iPhoto(options)
```

## Options

name       | default                                                                                           | description
-----------|---------------------------------------------------------------------------------------------------|---------------------------
extraClass | null                                                                                              | add extra class to gallery
imgTemplate|```function(img){return "<img src=" + $(img).attr('src') + " alt=" + $(img).attr('alt') + " />"}```| template for single gallery image


## Use with lightbox 2

html

```html
<div class="any-class">
    <img src="thumb-path.jpg" data-full-size="full_size_path.jpg">
    <img src="thumb-path.jpg" data-full-size="full_size_path.jpg">
    <img src="thumb-path.jpg" data-full-size="full_size_path.jpg">
</div>
```

javascript

``` javascript
$('.any-class').iPhoto({
  imgTemplate: function(img){
    fullpath = $(img).data('full-size')
    return "<a href=" + fullsize + " data-lightbox="gallery-name"><img src=" + $(img).attr('src') + " alt=" + $(img).attr('alt') + " /></a>"
  }
})
```

