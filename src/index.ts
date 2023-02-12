import React, { useRef, useEffect } from 'react';
import * as L from 'leaflet';
import 'leaflet-wms-header';
import type { MapIrProps } from './type';
import {
  BASE_URL,
  defaultOptions,
  defaultStyle,
  headers,
  wmsOptions,
} from './config';
import mapir_loader from './loaders';
import 'leaflet/dist/leaflet.css';


declare global {
  interface Window {
    L?: any;
  }
}

const MapIr = (props: MapIrProps): JSX.Element => {
  const { style, apiKey, options, onInit } = props;

  const mapEl = useRef(null);
  useEffect(() => {
    //@ts-ignore
    const map = L.map(mapEl?.current, {
      ...defaultOptions,
      ...options,
    });

    mapir_loader({
      onLoad: () => {
        if (onInit) onInit(window.L, map);
      },
      onError: () => {
        console.error(
          "Map.ir Maps Error: This page didn't load Map.ir Maps correctly"
        );
      },
    });

    //@ts-ignore
    L.TileLayer.wmsHeader(
      BASE_URL,
      {
        ...wmsOptions,
      },
      headers(apiKey),
      null,
    ).addTo(map);

  }, []);

  return /*#__PURE__*/ React.createElement('div', {
    ref: mapEl,
    id:'map',
    style: { ...defaultStyle, ...style },
  });
};

export default MapIr;
