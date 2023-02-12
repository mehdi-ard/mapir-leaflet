import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import Mapir from '../src';

const apiKey: string =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjI0OWJiZmFiNWIzOWI0MmNjMGMwMmRiMTI3OTk3OWJmMWFkMjU1M2UzMDA2MzhlMzZiZjRjNzUyYTczMjQ1NzUxMTE2Y2ZlYzllMTBjYWI4In0.eyJhdWQiOiIyMDE3OCIsImp0aSI6IjI0OWJiZmFiNWIzOWI0MmNjMGMwMmRiMTI3OTk3OWJmMWFkMjU1M2UzMDA2MzhlMzZiZjRjNzUyYTczMjQ1NzUxMTE2Y2ZlYzllMTBjYWI4IiwiaWF0IjoxNjY5Nzg1OTM0LCJuYmYiOjE2Njk3ODU5MzQsImV4cCI6MTY3MjI5MTUzNCwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.GfYaIxLlrOBV3lvBfrT0JTvalBhyUfcltlMiUIcel8HC0wUarj3Gh7sQF9SgsfL_yxKWNe19lxqsiPNqTl33CA1KLU_qCYIaDhKB_cceBCTYqILXJUSOxsp-P0SB1R35QsgHIWboIUwM9OaBi9hHx5kiYI2UtvRGuwrO6Mv-lJ1n_pJm8tuJ1k7CABq_6ZH7hYm9nzgILu2VMKvU3X_tMaPzi0R6j5oyIe2MCIz2vOxbxDNdPo3JnevUGToFCfxUJyqj8crc9y6MmtD1uLTXVt-YFs1wKIIu86FeQy3UnUIgNjNboefvHW4ntVEGrhvk_LTY3iagm-6pZTfiPG2X9g';

const Map = {
  title: 'maps',
  component: Mapir,
  args: {
    apiKey: apiKey,
  },
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Mapir>;

export default Map;

const Template: ComponentStory<typeof Mapir> = args => <Mapir {...args} />;

export const Default = Template.bind({});

Default.args = {};

export const OnInit = Template.bind({});

OnInit.args = {
  onInit: (L: any, myMap: any) => {
    let marker = L.marker([35.699739, 51.338097]).addTo(myMap);

    myMap.on('mouseup', (e: any) => {
      alert(e.latlng);

      marker.setLatLng(e.latlng);
    });
  },
};

export const SetView = Template.bind({});

SetView.args = {
  onInit: (L: any, myMap: any) => {
    L.circle([35.699739, 51.338097], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500,
    }).addTo(myMap);

    L.control.scale().addTo(myMap);
  },
  options: {
    zoom: 15,
  },
};
