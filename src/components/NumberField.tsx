import React, { FC, useMemo } from 'react';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useFormContext, Controller } from 'react-hook-form';

import { FieldProps, FieldStyles, NumberFieldSchema } from '../types';
import { useErrorMessage } from '../hooks/useErrorMessage';
import { useStyles } from '../hooks/useStyles';

export const NumberField: FC<FieldProps<NumberFieldSchema>> = ({
  id,
  name,
  field,
  defaultValue,
}) => {
  const {
    label,
    placeholder,
    helperText,
    isRequired,
    shouldDisplay,
    styles = {},
  } = field;

  const fieldStyles = useStyles<FieldStyles>('numberField', styles);

  const { control, watch } = useFormContext();

  const values = watch(name);

  const errorMessage = useErrorMessage(name, label);

  const isVisible = useMemo(() => {
    return shouldDisplay ? shouldDisplay(values) : true;
  }, [values, shouldDisplay]);

  return isVisible ? (
    <FormControl
      key={`${name}-control`}
      isRequired={isRequired}
      isInvalid={!!errorMessage}
      {...fieldStyles.control}
    >
      {!!label && (
        <FormLabel htmlFor={name} {...fieldStyles.errorMessage}>
          {label}
        </FormLabel>
      )}
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue || 0}
        as={
          <NumberInput>
            <NumberInputField
              id={id}
              data-testid={id}
              placeholder={placeholder}
              {...fieldStyles.input}
            />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        }
      />
      {!!helperText && (
        <FormHelperText {...fieldStyles.helperText}>
          {helperText}
        </FormHelperText>
      )}
      <FormErrorMessage {...fieldStyles.errorMessage}>
        {errorMessage}
      </FormErrorMessage>
    </FormControl>
  ) : null;
};
