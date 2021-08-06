var map = L.map("map"),
  trail = {
    type: "Feature",
    properties: {
      id: 1,
    },
    geometry: {
      type: "LineString",
      coordinates: [],
    },
  },
  realtime = L.realtime(
    function (success, error) {
      const data = getPoints()
      // fetch("https://wanderdrone.appspot.com/")
      // .then(res => res.json())
      // .then(function (data) {
      console.log(data, data.geometry)
      var trailCoords = trail.geometry.coordinates
      trailCoords.push(data.geometry.coordinates)
      trailCoords.splice(0, Math.max(0, trailCoords.length - 5))
      console.log([data, trail])
      success({
        type: "FeatureCollection",
        features: [data, trail],
      })
      // })
      // .catch(error)
    },
    {
      interval: 2 * 1000,
      // pointToLayer: function (feature, latlng) {
      //   return L.marker(latlng, {
      //     icon: L.icon({
      //       iconUrl: "//leafletjs.com/docs/images/leaf-green.png",
      //       shadowUrl: "//leafletjs.com/docs/images/leaf-shadow.png",
      //       iconSize: [38, 95], // size of the icon
      //       shadowSize: [50, 64], // size of the shadow
      //       iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
      //       shadowAnchor: [4, 62], // the same for the shadow
      //       popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
      //     }),
      //   })
      // },
    }
  ).addTo(map)

L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map)

realtime.on("update", function () {
  map.fitBounds(realtime.getBounds(), { maxZoom: 12 })
})

var index = 0

function getPoints() {
  const austin = [
    // [-132.4464682855921, -27.964742050339332],
    // [-131.4464682855921, -26.964742050339332],
    // [-130.4464682855921, -25.964742050339332],
    // [30.267389164727902, -97.74306115211053],
    // [30.26783414344702, -97.74546441976558],
    // [30.263979436043968, -97.74718136603266],
    // [30.26631479083578, -97.75503467063878],
    // [30.267037557237032, -97.75713751870407],
    // [30.268353335151964, -97.75921894949883],
    // [30.26955786395252, -97.76192273176184],
    // [30.274227963475166, -97.76632142338225],
    // [30.276766742610125, -97.76866046776505],
    // [30.278286340453224, -97.76883221621019],
    // [30.279305354702355, -97.76851014022131],
    // [30.28156613919962, -97.76670772907723],
    // [30.292275744723106, -97.76016306944803],
    // [30.296259181181806, -97.7590258488071],
    // [30.30176164965226, -97.75851091754285],
    // [30.30370680145161, -97.7586180031435],
    // [30.336399250544652, -97.75554978972683],
    // [30.34862132189497, -97.74990630426936],
    // [30.35212111983397, -97.74898378957224],
    // [30.35589872811352, -97.74653761560661],
    // [30.384075477506816, -97.73591589313489],
    // [30.395847500119658, -97.73293327864339],
    // [30.391868112673887, -97.72475792146712],
    // [30.390276244196983, -97.71758034571717],
    // [30.3905724770646, -97.71412561854928],
    // [30.382742688433627, -97.69798948383317],
    // [30.38259458244905, -97.69405201132935],
    // [30.379605062599722, -97.68771126095854],
    // [30.363052249563854, -97.69697331251709],
    // [30.35081109480297, -97.67624051191449],
    // [30.34496513064351, -97.67774055126263],
  ]
  let x = {
    geometry: {
      type: "Point",
      coordinates: austin[index + 1] || [30.267389164727902, -97.74306115211053],
    },
    type: "Feature",
    properties: {},
  }
  console.log(x)
  if (austin.length >= index) index++
  else index = 0
  return x
}

c = {
  type: "Feature",
  properties: { id: 1, Name: "Name", Reference: "123456789", Address: "Street, Address" },
  geometry: {
    type: "GeometryCollection",
    geometries: [
      { type: "Point", coordinates: [-0.2340171, 51.4917468] },
      {
        type: "Polygon",
        coordinates: [
          [
            [-0.2343982458114624, 51.49143757352254],
            [-0.23387789726257327, 51.491379122503375],
            [-0.233859121799469, 51.49144091357853],
            [-0.23383498191833493, 51.49144091357853],
            [-0.23364990949630737, 51.49221913995003],
            [-0.23423194885253903, 51.49227424989754],
            [-0.23440629243850708, 51.491506044621154],
            [-0.2343848347663879, 51.49150103454424],
            [-0.2343982458114624, 51.49143757352254],
          ],
        ],
      },
    ],
  },
}
