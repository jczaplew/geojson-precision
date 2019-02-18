(function() {

  function parse(t, coordinatePrecision, extrasPrecision) {

    function point(p) {
      return p.map(function(e, index) {
        if (index < 2) {
            return 1 * e.toFixed(coordinatePrecision);
        } else {
            return 1 * e.toFixed(extrasPrecision);
        }
      });
    }

    function multi(l) {
      return l.map(point);
    }

    function poly(p) {
      return p.map(multi);
    }

    function multiPoly(m) {
      return m.map(poly);
    }

    function geometry(obj) {
      if (!obj) {
        return {};
      }
      
      switch (obj.type) {
        case "Point":
          return Object.assign({}, obj, {
            coordinates: point(obj.coordinates)
          });
        case "LineString":
        case "MultiPoint":
          return Object.assign({}, obj, {
            coordinates: multi(obj.coordinates)
          });
        case "Polygon":
        case "MultiLineString":
          return Object.assign({}, obj, {
            coordinates: poly(obj.coordinates)
          });
        case "MultiPolygon":
          return Object.assign({}, obj, {
            coordinates: multiPoly(obj.coordinates)
          });
        case "GeometryCollection":
          return Object.assign({}, obj, {
            geometries: obj.geometries.map(geometry)
          });
        default :
          return {};
      }
    }

    function feature(obj) {
      return Object.assign({}, obj, {
        geometry: geometry(obj.geometry)
      });
    }

    function featureCollection(f) {
      return Object.assign({}, f, {
        features: f.features.map(feature)
      });
    }

    function geometryCollection(g) {
      return Object.assign({}, g, {
        geometries: g.geometries.map(geometry)
      });
    }

    if (!t) {
      return t;
    }

    switch (t.type) {
      case "Feature":
        return feature(t);
      case "GeometryCollection" :
        return geometryCollection(t);
      case "FeatureCollection" :
        return featureCollection(t);
      case "Point":
      case "LineString":
      case "Polygon":
      case "MultiPoint":
      case "MultiPolygon":
      case "MultiLineString":
        return geometry(t);
      default :
        return t;
    }
      
  }

  module.exports = parse;
  module.exports.parse = parse;

}());
  
