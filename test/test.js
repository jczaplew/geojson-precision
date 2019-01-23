const assert = require("assert")
const should = require("should")
const geojsonhint = require("geojsonhint")
const gp = require("../index.js")
const tg = require("./test_geometry.js")

function test(feature, precision, cb) {
  let parsed = gp.parse(feature, precision)
  let errors = geojsonhint.hint(JSON.stringify(parsed));
  if (errors.length) {
    cb(errors);
  } else {
    cb(null);
  }
}

describe("point", () => {
  it("should return valid GeoJSON with the specified precision", (done) => {
    test(tg.point, 3, (errors) => {
      if (errors) {
        throw new Error(JSON.stringify(errors));
      } else {
        done();
      }
    });
  });
});

describe("pointz", () => {
  it("should return valid GeoJSON with the specified Z precision", (done) => {
    let zPrecision = 2;
    let parsed = gp(tg.pointz, 3, zPrecision);
    if (parsed.coordinates[2].toString() !== tg.pointz.coordinates[2].toFixed(zPrecision)) {
      throw new Error("z coordinate precisions don't match");
    } else {
      done();
    }
  });
});

describe("feature point", () => {
  it("should return valid GeoJSON with the specified precision", (done) => {
    test(tg.featurePoint, 3, (errors) => {
      if (errors) {
        throw new Error(JSON.stringify(errors));
      } else {
        done();
      }
    });
  });
});

describe("feature linestring", () => {
  it("should return valid GeoJSON with the specified precision", (done) => {
    test(tg.featureLinestring, 3, (errors) => {
      if (errors) {
        throw new Error(JSON.stringify(errors));
      } else {
        done();
      }
    });
  });
});

describe("linestring", () => {
  it("should return valid GeoJSON with the specified precision", (done) => {
    test(tg.linestring, 3, (errors) => {
      if (errors) {
        throw new Error(JSON.stringify(errors));
      } else {
        done();
      }
    });
  });
});

describe("multipoint", () => {
  it("should return valid GeoJSON with the specified precision", (done) => {
    test(tg.multipoint, 3, (errors) => {
      if (errors) {
        throw new Error(JSON.stringify(errors));
      } else {
        done();
      }
    });
  });
});

describe("polygon", () => {
  it("should return valid GeoJSON with the specified precision", (done) => {
    test(tg.polygon, 3, (errors) => {
      if (errors) {
        throw new Error(JSON.stringify(errors));
      } else {
        done();
      }
    });
  });
});

describe("holy polygon", () => {
  it("should return valid GeoJSON with the specified precision", (done) => {
    test(tg.holyPolygon, 3, (errors) => {
      if (errors) {
        throw new Error(JSON.stringify(errors));
      } else {
        done();
      }
    });
  });
});

describe("multipolygon", () => {
  it("should return valid GeoJSON with the specified precision", (done) => {
    test(tg.multipoly, 3, (errors) => {
      if (errors) {
        throw new Error(JSON.stringify(errors));
      } else {
        done();
      }
    });
  });
});

describe("multi linestring", () => {
  it("should return valid GeoJSON with the specified precision", (done) => {
    test(tg.multilinestring, 3, (errors) => {
      if (errors) {
        throw new Error(JSON.stringify(errors));
      } else {
        done();
      }
    });
  });
});

describe("feature collection", () => {
  it("should return valid GeoJSON with the specified precision", (done) => {
    test(tg.featureCollection, 3, (errors) => {
      if (errors) {
        throw new Error(JSON.stringify(errors));
      } else {
        done();
      }
    });
  });
});

describe("geometry collection", () => {
  it("should return valid GeoJSON with the specified precision", (done) => {
    test(tg.geometryCollection, 3, (errors) => {
      if (errors) {
        throw new Error(JSON.stringify(errors));
      } else {
        done();
      }
    });
  });
});

describe("null value", () => {
  it("should return the same null value", (done) => {
    var parsed = gp(tg.baddy_null, 4);

    if (typeof(parsed) === "object")  {
      done();
    } else {
      throw new Error("null value incorrectly returned");
    }
  });
});

describe("undefined value", () => {
  it("should return the same thing value", (done) => {
    var parsed = gp(tg.baddy_undefined, 5);

    if (typeof(parsed) === "undefined") {
      done()
    } else {
      throw new Error("Undefined value incorrectly returned");
    }
  });
});

describe("empty array", () => {
  it("should return the same thing value", (done) => {
    var parsed = gp(tg.empty, 5);

    if (Array.isArray(parsed)) {
      done();
    } else {
      throw new Error("Empty array incorrectly returned");
    }
  });
});

describe("bad object", () => {
  it("should return the same thing value", (done) => {
    var parsed = gp(tg.baddy_object, 5);

    if (typeof(parsed) === "object")  {
      done();
    } else {
      throw new Error("Bad object incorrectly returned");
    }
  });
});

describe("null Feature geometry", () => {
  it("should return the same thing value", (done) => {
    var parsed = gp(tg.baddy_nogeom, 5);

    if (typeof(parsed) === "object" && parsed["type"])  {
      done();
    } else {
      throw new Error("Null feature geometry incorrectly returned");
    }
  });
});
