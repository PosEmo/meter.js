# PosEmo Meter
![Animated meter](media/no-hint.gif)

## Description
PosEmo Meter Plug-in for web applications 

## About
Custom meters made to animate data from Websockets.

## Getting started
Open index.html file.

To set session number add it to url as parameter -> index.html?sessionNumber=yourSesionNumber

## Usage
![Animated meter](media/hint.gif)

You can change the animated logo in the middle.
```html
<div 
    id="gaugeActivity"
    class="ldBar centerGaugeInCircle gaugeActivity"
    data-type="fill"
    data-img="assets/your-picture.png"
    data-value="0"
    data-duration="0.1"
    data-max="100"
    data-min="0"
></div>
```

The content of tooltip can be easily changed
```html
<span data-wenk="Your description" data-wenk-pos="bottom" data-wenk-length="large" class="wenk-align--center centerGaugeTooltip">
```

## License
All used libraries are provided under MIT license:
* [Wenk](https://tiaanduplessis.github.io/wenk/)
* [LoadingBar.js](https://loading.io/progress/)