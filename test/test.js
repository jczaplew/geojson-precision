var assert = require("assert"),
    should = require("should"),
    geojsonhint = require("geojsonhint"),
    gp = require("../index.js"),
    tg = require("./test_geometry.js");

function test(feature, precision, cb) {
  var parsed = gp.parse(feature, precision),
      errors = geojsonhint.hint(JSON.stringify(parsed));
  if (errors.length) {
    cb(errors);
  } else {
    cb(null);
  }
}

describe("point", function() {
  it("should return valid GeoJSON with the specified precision", function(done) {
    test(tg.point, 3, function(errors) {
      if (errors) {
        throw new Error(JSON.stringify(errors));
      } else {
        done();
      }
    });
  });
});

describe("feature point", function() {
  it("should return valid GeoJSON with the specified precision", function(done) {
    test(tg.featurePoint, 3, function(errors) {
      if (errors) {
        throw new Error(JSON.stringify(errors));
      } else {
        done();
      }
    });
  });
});

describe("feature linestring", function() {
  it("should return valid GeoJSON with the specified precision", function(done) {
    test(tg.featureLinestring, 3, function(errors) {
      if (errors) {
        throw new Error(JSON.stringify(errors));
      } else {
        done();
      }
    });
  });
});

describe("linestring", function() {
  it("should return valid GeoJSON with the specified precision", function(done) {
    test(tg.linestring, 3, function(errors) {
      if (errors) {
        throw new Error(JSON.stringify(errors));
      } else {
        done();
      }
    });
  });
});

describe("multipoint", function() {
  it("should return valid GeoJSON with the specified precision", function(done) {
    test(tg.multipoint, 3, function(errors) {
      if (errors) {
        throw new Error(JSON.stringify(errors));
      } else {
        done();
      }
    });
  });
});

describe("polygon", function() {
  it("should return valid GeoJSON with the specified precision", function(done) {
    test(tg.polygon, 3, function(errors) {
      if (errors) {
        throw new Error(JSON.stringify(errors));
      } else {
        done();
      }
    });
  });
});

describe("holy polygon", function() {
  it("should return valid GeoJSON with the specified precision", function(done) {
    test(tg.holyPolygon, 3, function(errors) {
      if (errors) {
        throw new Error(JSON.stringify(errors));
      } else {
        done();
      }
    });
  });
});

describe("multipolygon", function() {
  it("should return valid GeoJSON with the specified precision", function(done) {
    test(tg.multipoly, 3, function(errors) {
      if (errors) {
        throw new Error(JSON.stringify(errors));
      } else {
        done();
      }
    });
  });
});

describe("multi linestring", function() {
  it("should return valid GeoJSON with the specified precision", function(done) {
    test(tg.multilinestring, 3, function(errors) {
      if (errors) {
        throw new Error(JSON.stringify(errors));
      } else {
        done();
      }
    });
  });
});

describe("feature collection", function() {
  it("should return valid GeoJSON with the specified precision", function(done) {
    test(tg.featureCollection, 3, function(errors) {
      if (errors) {
        throw new Error(JSON.stringify(errors));
      } else {
        done();
      }
    });
  });
});

describe("geometry collection", function() {
  it("should return valid GeoJSON with the specified precision", function(done) {
    test(tg.geometryCollection, 3, function(errors) {
      if (errors) {
        throw new Error(JSON.stringify(errors));
      } else {
        done();
      }
    });
  });
});
