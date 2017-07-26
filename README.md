# geojson-precision
Remove meaningless precision from your GeoJSON. If your coordinates go out to 7+ digits, you are [probably misrepresenting your data](http://gis.stackexchange.com/a/8674/14196). Most scenarios in which GeoJSON is useful (i.e. web-related applications) do not require survey-grade precision, and a higher value is placed on a compact file size. Trimming the precision of coordinates can greatly reduce file size, while removing the appearance of fake high precision.


## Install
````
npm install [-g] geojson-precision
````


## API


###.parse(*geojson*, *precision*)

````geojson```` is a valid GeoJSON object, and can be of type ````Point````, ````LineString````, ````Polygon````, ````MultiPoint````, ````MultiPolygon````, ````MultiLineString````, ````GeometryCollection````, ````Feature````, or ````FeatureCollection````. If you are unsure whether or not your GeoJSON object is valid, you can run it through a linter such as [geojsonhint](https://github.com/mapbox/geojsonhint).

````precision```` is a positive integer. If your specified ````precision```` value is greater than the precision of the input geometry, the output precision will be the same as the input. For example, if your input coordinates are ````[10.0, 20.0]````, and you specify a ````precision```` of ````5````, the output will be the same as the input. 

 
##### Example use:

````
var gp = require("geojson-precision");

var trimmed = gp.parse({
        "type": "Point",
        "coordinates": [
          18.984375,
          57.32652122521709
        ]
      }, 3);

````

````trimmed```` will now look like this:

````
{
    "type": "Point",
    "coordinates": [
       18.984,
       57.326
    ]
}
````

 ````.parse()```` can also be used directly, for example:
 
 ````
var gp = require("geojson-precision");

var trimmed = gp({ ... }, 3);

````


## CLI
Geojson-precision can also be used via the command line. Especially easy to use if installed globally (using ````-g````).

###Parameters
######  precision (-p)
A positive integer specifying coordinate precision

######  extras precision (-e)
A positive integer specifying extra coordinate precision for things like the z value when the coordinate is [longitude, latitude, elevation].

###### input
An input GeoJSON file

###### output
An output GeoJSON file

##### Example use
````
geojson-precision -p 4 input.json output.json
````




## Inspiration
Concepts, ideas, etc borrowed to various degrees from:

  - [wellknown](https://github.com/mapbox/wellknown/pull/18) 
  - [LilJSON](https://github.com/migurski/LilJSON)


## License
CC0
