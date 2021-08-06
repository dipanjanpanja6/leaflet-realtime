// initialize the map on the "map" div with a given center and zoom
var map = new L.Map("map", {
  zoom: 6,
  minZoom: 3,
})

// create a new tile layer
var tileUrl = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  layer = new L.TileLayer(tileUrl, {
    attribution: 'Maps © <a href="www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18,
  })

// add the layer to the map
map.addLayer(layer)

var austin = [
  [30.267389164727902, -97.74306115211053],
  [30.26783414344702, -97.74546441976558],
  [30.263979436043968, -97.74718136603266],
  [30.26631479083578, -97.75503467063878],
  [30.267037557237032, -97.75713751870407],
  [30.268353335151964, -97.75921894949883],
  [30.26955786395252, -97.76192273176184],
  [30.274227963475166, -97.76632142338225],
  [30.276766742610125, -97.76866046776505],
  [30.278286340453224, -97.76883221621019],
  [30.279305354702355, -97.76851014022131],
  [30.28156613919962, -97.76670772907723],
  [30.292275744723106, -97.76016306944803],
  [30.296259181181806, -97.7590258488071],
  [30.30176164965226, -97.75851091754285],
  [30.30370680145161, -97.7586180031435],
  [30.336399250544652, -97.75554978972683],
  [30.34862132189497, -97.74990630426936],
  [30.35212111983397, -97.74898378957224],
  [30.35589872811352, -97.74653761560661],
  [30.384075477506816, -97.73591589313489],
  [30.395847500119658, -97.73293327864339],
  [30.391868112673887, -97.72475792146712],
  [30.390276244196983, -97.71758034571717],
  [30.3905724770646, -97.71412561854928],
  [30.382742688433627, -97.69798948383317],
  [30.38259458244905, -97.69405201132935],
  [30.379605062599722, -97.68771126095854],
  [30.363052249563854, -97.69697331251709],
  [30.35081109480297, -97.67624051191449],
  [30.34496513064351, -97.67774055126263],
]
var parisKievLL = [
  [48.8567, 2.3508],
  [50.45, 30.523333],
]
var londonParisRomeBerlinBucarest = [
  [51.507222, -0.1275],
  [48.8567, 2.3508],
  [41.9, 12.5],
  [52.516667, 13.383333],
  [44.4166, 26.1],
]
var londonBrusselFrankfurtAmsterdamLondon = [
  [51.507222, -0.1275],
  [50.85, 4.35],
  [50.116667, 8.683333],
  [52.366667, 4.9],
  [51.507222, -0.1275],
]
var barcelonePerpignanPauBordeauxMarseilleMonaco = [
  [41.385064, 2.173403],
  [42.698611, 2.895556],
  [43.3017, -0.3686],
  [44.837912, -0.579541],
  [43.296346, 5.369889],
  [43.738418, 7.424616],
]

map.fitBounds(austin)

//========================================================================
// var marker1 = L.Marker.movingMarker(parisKievLL, [10000]).addTo(map)
// L.polyline(parisKievLL).addTo(map)
// marker1.once("click", function () {
//   marker1.start()
//   marker1.closePopup()
//   marker1.unbindPopup()
//   marker1.on("click", function () {
//     if (marker1.isRunning()) {
//       marker1.pause()
//     } else {
//       marker1.start()
//     }
//   })
//   setTimeout(function () {
//     marker1.bindPopup("<b>Click me to pause !</b>").openPopup()
//   }, 2000)
// })

// marker1.bindPopup("<b>Click me to start !</b>", { closeOnClick: false })
// marker1.openPopup()

// //========================================================================

var marker2 = L.Marker.movingMarker(austin, 10000, { autostart: true }).addTo(map)
L.polyline(austin, { color: "red" }).addTo(map)

marker2.on("end", function () {
  marker2.bindPopup("<b>Welcome to Home !</b>", { closeOnClick: false }).openPopup()
})

// //=========================================================================

// var marker3 = L.Marker.movingMarker(londonBrusselFrankfurtAmsterdamLondon, [2000, 2000, 2000, 2000], { autostart: true, loop: true }).addTo(map)

// marker3.loops = 0
// marker3.bindPopup("", { closeOnClick: false })

// //=========================================================================

// var marker4 = L.Marker.movingMarker([[45.816667, 15.983333]], []).addTo(map)

// marker3.on("loop", function (e) {
//   marker3.loops++
//   if (e.elapsedTime < 50) {
//     marker3.getPopup().setContent("<b>Loop: " + marker3.loops + "</b>")
//     marker3.openPopup()
//     setTimeout(function () {
//       marker3.closePopup()

//       if (!marker1.isEnded()) {
//         marker1.openPopup()
//       } else {
//         if (marker4.getLatLng().equals([45.816667, 15.983333])) {
//           marker4.bindPopup("Click on the map to move me !")
//           marker4.openPopup()
//         }
//       }
//     }, 2000)
//   }
// })

// map.on("click", function (e) {
//   marker4.moveTo(e.latlng, 2000)
// })

// //=========================================================================

// var marker5 = L.Marker.movingMarker(barcelonePerpignanPauBordeauxMarseilleMonaco, 10000, { autostart: true }).addTo(map)

// marker5.addStation(1, 2000)
// marker5.addStation(2, 2000)
// marker5.addStation(3, 2000)
// marker5.addStation(4, 2000)

// L.polyline(barcelonePerpignanPauBordeauxMarseilleMonaco, { color: "green" }).addTo(map)
