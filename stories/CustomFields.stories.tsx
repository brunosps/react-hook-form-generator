import React from 'react';
import Select from 'react-select';
import { useFormContext, Controller } from 'react-hook-form';
import { FormControl, FormLabel } from '@chakra-ui/react';
import { action } from '@storybook/addon-actions';

import { Form } from '../src/components/Form';

export default {
  title: 'Custom Fields',
};

const ReactSelectField = ({ name, label, placeholder, options }) => {
  const { control } = useFormContext();

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        as={
          <Select
            placeholder={placeholder}
            options={options}
          />
        }
        onChange={([selected]) => {
          return selected;
        }}
      />
    </FormControl>
  );
};

export const ReactSelect = () => {
  return (
    <Form
      handleSubmit={action('submit')}
      schema={{
        select: {
          type: 'custom',
          component: ReactSelectField,
          props: {
            label: 'React-Select Field',
            placeholder: 'Select an option',
            options: [
              { label: 'Option 1', value: 'Option 1'},
              { label: 'Option 2', value: 'Option 2'},
              { label: 'Option 3', value: 'Option 3'}
            ]
          }
        }
      }}
    />
  );
}