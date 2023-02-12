import * as L from 'leaflet';

export const BASE_URL = 'https://map.ir/shiveh';

export const defaultStyle = {
  width: '600px',
  height: '450px',
  margin: 0,
  padding: 0,
  background: '#eee',
};

export const wmsOptions = {
  attribution: '© map.ir',
  layers: 'Shiveh:Shiveh',
  format: 'image/png',
  crs: L.CRS.EPSG3857,
  center: [35.699739, 51.338097],
  tileSize: 250,
};

export const defaultOptions = {
  minZoom: 1,
  maxZoom: 20,
  crs: L.CRS.EPSG3857,
  center: [35.699739, 51.338097],
  zoom: 6,
};

export const headers = (key: string) => {
  return [
    {
      header: 'x-api-key',
      value: key,
    },
  ];
};
