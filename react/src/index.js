import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import L from "leaflet"
import { Map, TileLayer, Popup, Tooltip, Marker } from "react-leaflet"
import ReactLeafletDriftMarker from "react-leaflet-drift-marker"

import "./styles.css"
var myicon = L.icon({
  iconUrl: "https://i.stack.imgur.com/oQJuO.png",

  //       shadowUrl: "//leafletjs.com/docs/images/leaf-shadow.png",
  iconSize: [38, 40], // size of the icon
  //       shadowSize: [50, 64], // size of the shadow
  //       iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  //       shadowAnchor: [4, 62], // the same for the shadow
  //       popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
})
var index = -1
const timeout = 2000

const getPoints = () => {
  const austin = [
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
  const austin2 = [
    [30.248380201531102, -97.7278183741435],
    [30.248380201531102, -97.7278183741435],
    [30.24856142687041, -97.7278106460728],
    [30.248799206565398, -97.72830906309198],
    [30.249225536074817, -97.72865237946228],
    [30.249577720458067, -97.72894205479427],
    [30.250473331642713, -97.72973982698623],
    [30.250717679319536, -97.73029389582783],
    [30.25098644062715, -97.73132388086313],
    [30.251042037440413, -97.732021267666],
    [30.25157956516298, -97.73344820240878],
    [30.252237586307626, -97.73490730965509],
    [30.25353507523504, -97.73554031574886],
    [30.254471126320578, -97.73511116815898],
    [30.255333036055028, -97.73473565764463],
    [30.25487891417893, -97.7333086732922],
    [30.25436917242015, -97.73184951654875],
    [30.25399844322099, -97.7308409894978],
    [30.25323842136111, -97.7286844702828],
    [30.252404333584927, -97.72909221893924],
    [30.251727706227022, -97.72730050870115],
    [30.250828736544545, -97.72750441667517],
    [30.24985574782459, -97.7291673569684],
    [30.24868799666211, -97.72809446575994],
  ]

  if (austin2.length - 1 === index) index = -1
  index = index + 1
  console.log(austin2.length, index)
  return austin2[index]
}
const App = () => {
  const [state, setState] = useState({ latlng: [30.248380201531102, -97.7278183741435] })

  useEffect(() => {
    console.log("call")
    const timer = setInterval(() => {
      console.log("call_t")
      setState({ latlng: getPoints() })
    }, timeout)
    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      <Map center={[30.248380201531102, -97.7278183741435]} zoom={17}>
        <TileLayer attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        <ReactLeafletDriftMarker position={state.latlng} duration={timeout} keepAtCenter={true} icon={myicon}>
          <Popup>
            Hello, This is to know the details about the car :). <br /> Name - Yellow car. <br /> Phone - 781-835-5258
            <br />
            444 Hillcrest Avenue
            <br /> Cambridge, MA 02141
          </Popup>
          <Tooltip>Carl L. West</Tooltip>
        </ReactLeafletDriftMarker>
        {/* <Marker position={state.latlng} icon={myicon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </Map>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
