exports.featurePoint = {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          18.984375,
          57.32652122521709
        ]
      }
    };

exports.point = {
        "type": "Point",
        "coordinates": [
          18.984375,
          57.32652122521709
        ]
      };

exports.pointz = {
        "type": "Point",
        "coordinates": [
          18.984375,
          57.32652122521709,
          123.4567890
        ]
      };

exports.featureLinestring = {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            19.6875,
            33.43144133557529
          ],
          [
            11.25,
            45.089035564831015
          ],
          [
            -7.03125,
            46.558860303117164
          ],
          [
            -11.6015625,
            54.367758524068385
          ],
          [
            6.328125,
            53.5403073915002
          ],
          [
            35.15625,
            51.17934297928927
          ]
        ]
      }
    };

exports.linestring = {
        "type": "LineString",
        "coordinates": [
          [
            19.6875,
            33.43144133557529
          ],
          [
            11.25,
            45.089035564831015
          ],
          [
            -7.03125,
            46.558860303117164
          ],
          [
            -11.6015625,
            54.367758524068385
          ],
          [
            6.328125,
            53.5403073915002
          ],
          [
            35.15625,
            51.17934297928927
          ]
        ]
      };

exports.polygon = {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -10.546875,
              35.17380831799959
            ],
            [
              2.4609375,
              35.17380831799959
            ],
            [
              2.4609375,
              44.59046718130883
            ],
            [
              -10.546875,
              44.59046718130883
            ],
            [
              -10.546875,
              35.17380831799959
            ]
          ]
        ]
      };

exports.holyPolygon = {"type":"Polygon","coordinates":[[[100,0],[101,0],[101,1],[100,1],[100,0]],[[100.2,0.2],[100.2,0.8],[100.8,0.8],[100.8,0.2],[100.2,0.2]]]}

exports.multipoint = { "type": "MultiPoint",
    "coordinates": [
        [
          -89.6484375,
          43.32517767999296
        ],
        [
          -49.5703125,
          -11.178401873711772
        ],
        [
          45.703125,
          56.559482483762245
        ]
      ]
    };

exports.multipoly = {"type":"MultiPolygon","coordinates":[[[[102,2],[103,2],[103,3],[102,3],[102,2]]],[[[100,0],[101,0],[101,1],[100,1],[100,0]],[[100.2,0.2],[100.2,0.8],[100.8,0.8],[100.8,0.2],[100.2,0.2]]]]};

exports.multilinestring = { "type": "MultiLineString",
    "coordinates": [
        [ [100.0, 0.0], [101.0, 1.0] ],
        [ [102.0, 2.0], [103.0, 3.0] ]
      ]
    }

exports.featureCollection = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -69.60937499999999,
              51.17934297928927
            ],
            [
              -71.015625,
              48.45835188280866
            ],
            [
              -93.8671875,
              28.613459424004414
            ],
            [
              -45,
              24.206889622398023
            ],
            [
              -39.7265625,
              41.244772343082076
            ],
            [
              -46.7578125,
              47.98992166741417
            ],
            [
              -69.60937499999999,
              51.17934297928927
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -31.289062500000004,
              10.833305983642491
            ],
            [
              -7.03125,
              10.833305983642491
            ],
            [
              -7.03125,
              34.30714385628804
            ],
            [
              -31.289062500000004,
              34.30714385628804
            ],
            [
              -31.289062500000004,
              10.833305983642491
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          18.984375,
          57.32652122521709
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            19.6875,
            33.43144133557529
          ],
          [
            11.25,
            45.089035564831015
          ],
          [
            -7.03125,
            46.558860303117164
          ],
          [
            -11.6015625,
            54.367758524068385
          ],
          [
            6.328125,
            53.5403073915002
          ],
          [
            35.15625,
            51.17934297928927
          ]
        ]
      }
    }
  ]
};

exports.geometryCollection = { "type": "GeometryCollection",
    "geometries": [
      { "type": "Point",
        "coordinates": [45.703125, 56.559482483762245]
        },
      { "type": "LineString",
        "coordinates": [
          [
            -105.8203125,
            20.3034175184893
          ],
          [
            -63.6328125,
            53.74871079689897
          ],
          [
            -27.421875,
            13.239945499286312
          ],
          [
            37.96875,
            35.17380831799959
          ],
          [
            51.67968749999999,
            -27.059125784374054
          ]
        ]
      }
    ]
  };

exports.baddy_nogeom = { type: "FeatureCollection", features: [ { type: "Feature", geometry: null, properties: {} } ] }
exports.baddy_null = null;
exports.baddy_undefined;
exports.empty = [];
exports.baddy_object = {"aKey": "aValue"};
