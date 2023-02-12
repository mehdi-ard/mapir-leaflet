# ⚛️ React component for 🍃 MapIr Leaflet map.

### For Farsi/Persian document, [click here](https://help.map.ir/documentation/).

## Getting started

In the simple case you just need to add [`options`](https://leafletjs.com/reference.html#map-option) prop to `MapIr` component

```javascript
import React from 'react';
import MapIr from 'MapIr'


function SimpleMap() {
  return (
    <MapIr
      key='YOUR_API_KEY',
      options={{
        boxZoom: true,
        center: [35.699739, 51.338097],
        zoom: 13,
        ...
      }}
    />
  );
}

export default SimpleMap;
```

## Installation

npm:

```
npm i mapir
```

## Features

### Use Laflet Maps API

You can access to Leaflet Maps `L` , `map` objects by using `onInit`.

```javascript
...
<MapIr
  key='YOUR_API_KEY',
  onInit={(L, myMap) => {
    let marker = L.marker([35.699739, 51.338097])
      .addTo(myMap)
      .bindPopup('I am a popup.');

    myMap.on('click', function (e) {
      marker.setLatLng(e.latlng)
    });

    L.circle([35.699739, 51.348097], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500
    }).addTo(myMap);
  }}
/>

```
