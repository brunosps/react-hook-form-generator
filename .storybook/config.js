import React from 'react';
import { CSSReset, ChakraProvider } from '@chakra-ui/react';
import { configure, addDecorator } from '@storybook/react';

configure(
  [
    require.context('../src', true, /\.stories\.js$/),
  ],
  module
);

addDecorator(story => (
  <ChakraProvider>
    <CSSReset />
    {story()}
  </ChakraProvider>
));