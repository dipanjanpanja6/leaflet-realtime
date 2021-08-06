var map = L.map("map", {
  center: [0, 0],
  zoom: 0,
  layers: [
    L.tileLayer("http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", {
      attribution: "Map data &copy; OpenStreetMap contributors",
    }),
  ],
})

var realtime = L.realtime(
  {
    url: "https://wanderdrone.appspot.com/",
    crossOrigin: true,
    type: "json",
  },
  {
    interval: 3 * 1000,
    pointToLayer: function (feature, latlng) {
      return L.marker(latlng, {
        icon: L.icon({
          iconUrl: "//leafletjs.com/docs/images/leaf-green.png",
          shadowUrl: "//leafletjs.com/docs/images/leaf-shadow.png",
          iconSize: [38, 95], // size of the icon
          shadowSize: [50, 64], // size of the shadow
          iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
          shadowAnchor: [4, 62], // the same for the shadow
          popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
        }),
      })
    },
  }
).addTo(map)

realtime.on("update", function (e) {
  var coordPart = function (v, dirs) {
      return dirs.charAt(v >= 0 ? 0 : 1) + (Math.round(Math.abs(v) * 100) / 100).toString()
    },
    popupContent = function (fId) {
      var feature = e.features[fId],
        c = feature.geometry.coordinates
      return "Wander drone at " + coordPart(c[1], "NS") + ", " + coordPart(c[0], "EW")
    },
    bindFeaturePopup = function (fId) {
      realtime.getLayer(fId).bindPopup(popupContent(fId))
    },
    updateFeaturePopup = function (fId) {
      realtime.getLayer(fId).getPopup().setContent(popupContent(fId))
    }

  map.fitBounds(realtime.getBounds(), { maxZoom: 3 })

  Object.keys(e.enter).forEach(bindFeaturePopup)
  Object.keys(e.update).forEach(updateFeaturePopup)
})
