import { MapOptions } from 'leaflet';

interface AppendHeader {
  header?: string;
  value?: string;
}

export interface MapIrProps {
  style?: object;
  onInit?: (L: any, myMap: any) => any;
  options?: MapOptions;
  header?: AppendHeader;
  apiKey: string;
}
