# Running Progress: Leeds -> New York City 🏃‍♂🗺
A visualisation of the total distance I have run, as of the start of 2023 (when I started recording on [my Strava page](https://www.strava.com/athletes/53847048)).

I have run **838.4 / 5404 km**, 15.5% through my trans-atlantic migration. 

```geojson
{
  "type": "GeometryCollection",
  "geometries": [{
     "type": "Point",
     "coordinates": [-14.3309, 55.1589]
  }, {
     "type": "LineString",
     "coordinates": [
        [-1.5491,53.8008],
        [-5.57177711063369,54.3849544665517],
        [-9.69670942169745,54.8318348023634],
        [-13.8990429453463,55.1360771359325],
        [-18.1502577982644,55.2938729184551],
        [-22.4193972820403,55.3031946629785],
        [-26.6745871443186,55.1639214564205],
        [-30.884668324551,54.87784656275610],
        [-35.0207410473667,54.4485660232757],
        [-39.0574380560897,53.8812640221722],
        [-42.9738031358975,53.1824237683777],
        [-46.7537285409156,52.3594990327001],
        [-50.3859787365247,51.4205808053209],
        [-53.8638808315461,50.3740873500935],
        [-57.1847873241305,49.2284968295177],
        [-60.3494169913833,47.9921322286453],
        [-63.3611630802528,46.6730003370416],
        [-66.2254336083292,45.2786809100295],
        [-68.9490638469218,43.8162588795381],
        [-71.5398202622419,42.2922911999225],
        [-74.006,40.7128]
     ]
  }]
}
```

This map has been directly embedded using [geojson](https://datatracker.ietf.org/doc/html/rfc7946).
I have calculated the geodesic coordinates are calculated as a function of the fraction along the curve, using methods outlined [here](http://www.movable-type.co.uk/scripts/latlong.html).

For now, I need to update this tracker manually, but in the future, I intend to automate this. 
