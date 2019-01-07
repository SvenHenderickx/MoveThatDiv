# MoveThatDiv
A pure javascript library which you can use to shake and add gradients to html elements.

[Live preview](https://svenhenderickx.nl/semester4/projects/MoveThatDiv/)

## Functions
You can use the customShake and customGradient to make your elements move without any trouble, you can also add in your own parameters to create your own custom movement, speed and colors.

## How to use
### Defaults
If you want to use it on an div for example you can just call the libary name, insert the element you want the effect on and call the function .custumShake() or .customGradient().
```html
<body>
  <div class="shake moveIt">
    <p>
      Example
    </p>
  </div>
  <div class="shake gradientIt">
    <p>
      Example
    </p>
  </div>
  <script>
  MoveThatDiv('.moveIt').customShake();
  MoveThatDiv('.gradientIt').customGradient();
  </script>
</body>
```
When you call the functions like this you will get the defaults. 

You can also apply the different functions on the same element like this.
```html
<body>
  <div class="shake moveIt">
    <p>
      Example
    </p>
  </div>
  <script>
  MoveThatDiv('.moveIt').customShake().customGradient();
  </script>
</body>
```

### Custom parameters
When using this library you can also input your own parameters to create your own style and movement.

When using .custumShake you can change:
+ titleAngle: the degree to which the element moves
+ speed: the speed of the shake in milliseconds

When using .customGradient you can change:
+colorInner: the color of the inside of the gradient as a string
+colorOuter: the color of the outside of the gradient as a string
+speed: the speed at which the gradient moves in milliseconds

Example:
```html
<body>
  <div class="shake moveIt">
    <p>
      Example
    </p>
  </div>
  <script>
  MoveThatDiv('.moveIt').customShake({speed: 100, tiltAngle: 20}).customGradient({speed: 200});
  </script>
</body>
```
Note that you don't have to change all parameters, it will fall back to default when you aren't using a custom parameter.

## How to install
You can use this library in your own website, you have to download this project of github and add the MoveThatDiv.js to your website folder.
When you have done that include the script in you header like this:
```html
<html>
  <header>
    <script src="MoveThatDiv.js" type="application/javascript"></script>
   </header>
   <body>
    //Your code
   </body>
</html>
```

When you have done this, you are able to use these functions in your own website.
