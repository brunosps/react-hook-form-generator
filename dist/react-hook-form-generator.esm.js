import React, { useContext, useMemo, createContext } from 'react';
import { FormControl, FormLabel, InputGroup, InputLeftAddon, Input, InputRightAddon, FormHelperText, FormErrorMessage, Textarea, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Switch, Stack, Checkbox, Select, useDisclosure, Flex, Box, ButtonGroup, IconButton, Collapse, Heading, Button } from '@chakra-ui/react';
import { useFormContext, Controller, useFieldArray, useForm, FormProvider } from 'react-hook-form';
import merge from 'lodash.merge';
import { AddIcon, DeleteIcon, ViewOffIcon, ViewIcon } from '@chakra-ui/icons';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var StyleCtx = /*#__PURE__*/createContext({});
var useStyles = function useStyles(type, inlineStyles) {
  var baseStyles = useContext(StyleCtx);
  return useMemo(function () {
    return !!inlineStyles ? _extends({}, baseStyles[type], inlineStyles) : baseStyles[type];
  }, [type, baseStyles, inlineStyles]);
};

var useErrorMessage = function useErrorMessage(name, label) {
  var _useFormContext = useFormContext(),
      errors = _useFormContext.errors;

  return useMemo(function () {
    var error = errors[name];
    if (!error) return undefined;
    var message = error.message;
    if (message) return message.replace(name, label || name);
    return 'Field validation failed';
  }, [errors, name, label]);
};

var TextField = function TextField(_ref) {
  var id = _ref.id,
      name = _ref.name,
      field = _ref.field,
      defaultValue = _ref.defaultValue;
  var label = field.label,
      placeholder = field.placeholder,
      htmlInputType = field.htmlInputType,
      helperText = field.helperText,
      isRequired = field.isRequired,
      leftInputAddon = field.leftInputAddon,
      rightInputAddon = field.rightInputAddon,
      shouldDisplay = field.shouldDisplay,
      _field$styles = field.styles,
      styles = _field$styles === void 0 ? {} : _field$styles;
  var fieldStyles = useStyles('textField', styles);

  var _useFormContext = useFormContext(),
      register = _useFormContext.register,
      watch = _useFormContext.watch;

  var errorMessage = useErrorMessage(name, label);
  var values = watch(name);
  var isVisible = useMemo(function () {
    return shouldDisplay ? shouldDisplay(values) : true;
  }, [values, shouldDisplay]);
  return isVisible ? React.createElement(FormControl, Object.assign({
    isRequired: isRequired,
    isInvalid: !!errorMessage
  }, fieldStyles.control), !!label && React.createElement(FormLabel, Object.assign({
    htmlFor: name
  }, fieldStyles.label), label), !!leftInputAddon || rightInputAddon ? React.createElement(InputGroup, Object.assign({}, fieldStyles.inputGroup), !!leftInputAddon && React.createElement(InputLeftAddon, Object.assign({}, leftInputAddon)), React.createElement(Input, Object.assign({
    "data-testid": id,
    type: htmlInputType || 'text',
    name: name,
    "aria-label": name,
    ref: register(),
    placeholder: placeholder,
    defaultValue: defaultValue || ''
  }, fieldStyles.input)), !!rightInputAddon && React.createElement(InputRightAddon, Object.assign({}, rightInputAddon))) : React.createElement(Input, Object.assign({
    "data-testid": id,
    type: htmlInputType || 'text',
    name: name,
    "aria-label": name,
    ref: register(),
    placeholder: placeholder,
    defaultValue: defaultValue || ''
  }, fieldStyles.input)), !!helperText && React.createElement(FormHelperText, Object.assign({}, fieldStyles.helperText), helperText), React.createElement(FormErrorMessage, Object.assign({}, fieldStyles.errorMessage), errorMessage)) : null;
};

var TextAreaField = function TextAreaField(_ref) {
  var id = _ref.id,
      name = _ref.name,
      field = _ref.field,
      defaultValue = _ref.defaultValue;
  var label = field.label,
      placeholder = field.placeholder,
      helperText = field.helperText,
      isRequired = field.isRequired,
      shouldDisplay = field.shouldDisplay,
      _field$styles = field.styles,
      styles = _field$styles === void 0 ? {} : _field$styles;
  var fieldStyles = useStyles('textAreaField', styles);

  var _useFormContext = useFormContext(),
      register = _useFormContext.register,
      watch = _useFormContext.watch;

  var errorMessage = useErrorMessage(name, label);
  var values = watch(name);
  var isVisible = useMemo(function () {
    return shouldDisplay ? shouldDisplay(values) : true;
  }, [values, shouldDisplay]);
  return isVisible ? React.createElement(FormControl, Object.assign({
    isRequired: isRequired,
    isInvalid: !!errorMessage
  }, fieldStyles.control), !!label && React.createElement(FormLabel, Object.assign({
    htmlFor: name
  }, fieldStyles.label), label), React.createElement(Textarea, Object.assign({
    "data-testid": id,
    name: name,
    placeholder: placeholder,
    ref: register(),
    defaultValue: defaultValue || ''
  }, fieldStyles.input)), !!helperText && React.createElement(FormHelperText, Object.assign({}, fieldStyles.helperText), helperText), React.createElement(FormErrorMessage, Object.assign({}, fieldStyles.errorMessage), errorMessage)) : null;
};

var NumberField = function NumberField(_ref) {
  var id = _ref.id,
      name = _ref.name,
      field = _ref.field,
      defaultValue = _ref.defaultValue;
  var label = field.label,
      placeholder = field.placeholder,
      helperText = field.helperText,
      isRequired = field.isRequired,
      shouldDisplay = field.shouldDisplay,
      _field$styles = field.styles,
      styles = _field$styles === void 0 ? {} : _field$styles;
  var fieldStyles = useStyles('numberField', styles);

  var _useFormContext = useFormContext(),
      control = _useFormContext.control,
      watch = _useFormContext.watch;

  var values = watch(name);
  var errorMessage = useErrorMessage(name, label);
  var isVisible = useMemo(function () {
    return shouldDisplay ? shouldDisplay(values) : true;
  }, [values, shouldDisplay]);
  return isVisible ? React.createElement(FormControl, Object.assign({
    key: name + "-control",
    isRequired: isRequired,
    isInvalid: !!errorMessage
  }, fieldStyles.control), !!label && React.createElement(FormLabel, Object.assign({
    htmlFor: name
  }, fieldStyles.errorMessage), label), React.createElement(Controller, {
    name: name,
    control: control,
    defaultValue: defaultValue || 0,
    as: React.createElement(NumberInput, null, React.createElement(NumberInputField, Object.assign({
      id: id,
      "data-testid": id,
      placeholder: placeholder
    }, fieldStyles.input)), React.createElement(NumberInputStepper, null, React.createElement(NumberIncrementStepper, null), React.createElement(NumberDecrementStepper, null)))
  }), !!helperText && React.createElement(FormHelperText, Object.assign({}, fieldStyles.helperText), helperText), React.createElement(FormErrorMessage, Object.assign({}, fieldStyles.errorMessage), errorMessage)) : null;
};

var SwitchField = function SwitchField(_ref) {
  var id = _ref.id,
      name = _ref.name,
      field = _ref.field;
  var label = field.label,
      helperText = field.helperText,
      isRequired = field.isRequired,
      shouldDisplay = field.shouldDisplay,
      _field$styles = field.styles,
      styles = _field$styles === void 0 ? {} : _field$styles;

  var _useFormContext = useFormContext(),
      register = _useFormContext.register,
      watch = _useFormContext.watch;

  var values = watch(name);
  var fieldStyles = useStyles('switchField', styles);
  var errorMessage = useErrorMessage(name, label);
  var isVisible = useMemo(function () {
    return shouldDisplay ? shouldDisplay(values) : true;
  }, [values, shouldDisplay]);
  return isVisible ? React.createElement(FormControl, Object.assign({
    key: name + "-control",
    isRequired: isRequired,
    isInvalid: !!errorMessage
  }, fieldStyles.control), !!label && React.createElement(FormLabel, Object.assign({
    htmlFor: name
  }, fieldStyles.label), label), React.createElement(Switch, Object.assign({
    name: name,
    "data-testid": id,
    ref: register
  }, fieldStyles["switch"])), !!helperText && React.createElement(FormHelperText, Object.assign({}, fieldStyles.helperText), helperText), React.createElement(FormErrorMessage, Object.assign({}, fieldStyles.errorMessage), errorMessage)) : null;
};

var checkboxFieldStyles = {
  checkboxGroup: {
    isInline: true,
    spacing: 4
  }
};
var CheckboxField = function CheckboxField(_ref) {
  var id = _ref.id,
      name = _ref.name,
      field = _ref.field;
  var label = field.label,
      helperText = field.helperText,
      isRequired = field.isRequired,
      shouldDisplay = field.shouldDisplay,
      _field$styles = field.styles,
      styles = _field$styles === void 0 ? {} : _field$styles;

  var _useFormContext = useFormContext(),
      register = _useFormContext.register,
      watch = _useFormContext.watch;

  var values = watch(name);
  var fieldStyles = useStyles('checkboxField', styles);
  var errorMessage = useErrorMessage(name, label);
  var isVisible = useMemo(function () {
    return shouldDisplay ? shouldDisplay(values) : true;
  }, [values, shouldDisplay]);
  return isVisible ? React.createElement(FormControl, Object.assign({
    key: name + "-control",
    isRequired: isRequired,
    isInvalid: !!errorMessage
  }, fieldStyles.control), !!label && React.createElement(FormLabel, Object.assign({
    htmlFor: name
  }, fieldStyles.label), label), React.createElement(Stack, Object.assign({}, fieldStyles.checkboxGroup), field.checkboxes.map(function (checkbox) {
    return React.createElement(Checkbox, {
      key: checkbox.name,
      name: checkbox.name,
      ref: register,
      "data-testid": id + "-" + checkbox.name
    }, checkbox.label || checkbox.name);
  })), !!helperText && React.createElement(FormHelperText, Object.assign({}, fieldStyles.helperText), helperText), React.createElement(FormErrorMessage, Object.assign({}, fieldStyles.errorMessage), errorMessage)) : null;
};

var SelectField = function SelectField(_ref) {
  var id = _ref.id,
      name = _ref.name,
      field = _ref.field,
      defaultValue = _ref.defaultValue;
  var label = field.label,
      helperText = field.helperText,
      isRequired = field.isRequired,
      shouldDisplay = field.shouldDisplay,
      _field$styles = field.styles,
      styles = _field$styles === void 0 ? {} : _field$styles;

  var _useFormContext = useFormContext(),
      register = _useFormContext.register,
      watch = _useFormContext.watch;

  var values = watch(name);
  var fieldStyles = useStyles('selectField', styles);
  var errorMessage = useErrorMessage(name, label);
  var isVisible = useMemo(function () {
    return shouldDisplay ? shouldDisplay(values) : true;
  }, [values, shouldDisplay]);
  return isVisible ? React.createElement(FormControl, Object.assign({
    key: name + "-control",
    isRequired: isRequired,
    isInvalid: !!errorMessage
  }, fieldStyles.control), !!label && React.createElement(FormLabel, Object.assign({
    htmlFor: name
  }, fieldStyles.label), label), React.createElement(Select, Object.assign({
    name: name,
    "data-testid": id,
    ref: register(),
    defaultValue: defaultValue || field.options[0].value
  }, fieldStyles.select), field.options.map(function (option) {
    return React.createElement("option", {
      key: option.value,
      value: option.value
    }, option.label || option.value);
  })), !!helperText && React.createElement(FormHelperText, Object.assign({}, fieldStyles.helperText), helperText), React.createElement(FormErrorMessage, Object.assign({}, fieldStyles.errorMessage), errorMessage)) : null;
};

var renderField = function renderField(_ref, id, defaultValue) {
  var name = _ref[0],
      field = _ref[1];
  var Component = null;

  switch (field.type) {
    case 'text':
      Component = TextField;
      break;

    case 'textArea':
      Component = TextAreaField;
      break;

    case 'number':
      Component = NumberField;
      break;

    case 'array':
      Component = ArrayField;
      break;

    case 'object':
      Component = ObjectField;
      break;

    case 'switch':
      Component = SwitchField;
      break;

    case 'checkbox':
      Component = CheckboxField;
      break;

    case 'select':
      Component = SelectField;
      break;

    case 'custom':
      Component = field.component;
      return React.createElement(Box, null, React.createElement(Component, Object.assign({
        id: id,
        "data-testid": id,
        name: name,
        field: field,
        defaultValue: defaultValue
      }, field.props)));
  }

  return React.createElement(Box, null, React.createElement(Component, {
    id: id,
    "data-testid": id,
    name: name,
    field: field,
    defaultValue: defaultValue
  }));
};

var arrayFieldStyles = {
  arrayContainer: {
    spacing: 4,
    marginTop: 2
  },
  label: {
    padding: 0,
    display: 'flex'
  },
  countText: {
    fontWeight: 400,
    marginLeft: 1
  },
  toolbar: {
    alignItems: 'center'
  },
  buttonGroup: {
    marginLeft: 'auto'
  },
  addButton: {
    size: 'xs'
  },
  deleteButton: {
    size: 'xs',
    margin: 'auto'
  },
  clearButton: {
    size: 'xs'
  },
  collapseButton: {
    size: 'xs'
  },
  itemContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 2.5rem',
    paddingLeft: 2,
    paddingBottom: 2,
    paddingTop: 1,
    border: '1px solid',
    borderRadius: 4,
    borderColor: 'gray.200',
    backgroundColor: 'gray.50'
  },
  deleteItemContainer: {
    display: 'flex'
  }
};
var ArrayField = function ArrayField(_ref2) {
  var name = _ref2.name,
      field = _ref2.field;
  var label = field.label,
      isRequired = field.isRequired,
      isCollapsable = field.isCollapsable,
      itemField = field.itemField,
      helperText = field.helperText,
      shouldDisplay = field.shouldDisplay,
      _field$styles = field.styles,
      styles = _field$styles === void 0 ? {} : _field$styles;

  var _useFormContext = useFormContext(),
      control = _useFormContext.control,
      watch = _useFormContext.watch;

  var values = watch(name);

  var _useFieldArray = useFieldArray({
    name: name,
    control: control
  }),
      fields = _useFieldArray.fields,
      append = _useFieldArray.append,
      remove = _useFieldArray.remove;

  var _useDisclosure = useDisclosure({
    defaultIsOpen: true
  }),
      isOpen = _useDisclosure.isOpen,
      onOpen = _useDisclosure.onOpen,
      onToggle = _useDisclosure.onToggle;

  var arrayStyles = useStyles('arrayField', styles);
  var errorMessage = useErrorMessage(name, label);

  var addItem = function addItem() {
    append({});
    onOpen();
  };

  var isVisible = useMemo(function () {
    return shouldDisplay ? shouldDisplay(values) : true;
  }, [values, shouldDisplay]);
  return isVisible ? React.createElement(FormControl, Object.assign({
    isRequired: isRequired,
    isInvalid: !!errorMessage
  }, arrayStyles.control), React.createElement(Flex, Object.assign({}, arrayStyles.toolbar), !!label && React.createElement(FormLabel, Object.assign({
    htmlFor: name
  }, arrayStyles.label), label, " ", React.createElement(Box, Object.assign({}, arrayStyles.countText), "(", fields.length, ")")), React.createElement(ButtonGroup, Object.assign({}, arrayStyles.buttonGroup), React.createElement(IconButton, Object.assign({
    icon: React.createElement(AddIcon, null),
    "aria-label": "Add item",
    onClick: addItem
  }, arrayStyles.addButton)), React.createElement(IconButton, Object.assign({
    icon: React.createElement(DeleteIcon, null),
    "aria-label": "Clear items",
    onClick: function onClick() {
      return remove();
    }
  }, arrayStyles.clearButton)), isCollapsable && React.createElement(IconButton, Object.assign({
    as: isOpen ? ViewOffIcon : ViewIcon,
    "aria-label": isOpen ? 'Hide items' : 'Show items',
    onClick: onToggle
  }, arrayStyles.collapseButton)))), React.createElement(Collapse, {
    isOpen: isOpen
  }, React.createElement(Stack, Object.assign({}, arrayStyles.arrayContainer), fields.map(function (item, i) {
    return React.createElement(Box, Object.assign({
      key: (item == null ? void 0 : item.id) || name + "[" + i + "].value"
    }, arrayStyles.itemContainer), renderField([name + "[" + i + "].value", itemField], item.id, item.value), React.createElement(Box, Object.assign({}, arrayStyles.deleteItemContainer), React.createElement(IconButton, Object.assign({
      icon: React.createElement(DeleteIcon, null),
      "aria-label": "Delete item",
      onClick: function onClick() {
        return remove(i);
      }
    }, arrayStyles.deleteButton))));
  }))), !!helperText && React.createElement(FormHelperText, Object.assign({}, arrayStyles.helperText), helperText), React.createElement(FormErrorMessage, Object.assign({}, arrayStyles.errorMessage), errorMessage)) : null;
};
var objectFieldStyles = {
  objectContainer: {
    spacing: 4,
    borderWidth: 1,
    borderColor: 'gray.200',
    padding: 2,
    borderRadius: 4,
    marginTop: 2,
    backgroundColor: 'gray.50'
  },
  label: {
    padding: 0
  },
  toolbar: {
    alignItems: 'center'
  },
  collapseButton: {
    size: 'xs',
    marginLeft: 'auto'
  }
};
var ObjectField = function ObjectField(_ref3) {
  var name = _ref3.name,
      field = _ref3.field,
      id = _ref3.id,
      defaultValue = _ref3.defaultValue;
  var label = field.label,
      isCollapsable = field.isCollapsable,
      isRequired = field.isRequired,
      helperText = field.helperText,
      shouldDisplay = field.shouldDisplay,
      _field$styles2 = field.styles,
      styles = _field$styles2 === void 0 ? {} : _field$styles2;

  var _useFormContext2 = useFormContext(),
      watch = _useFormContext2.watch;

  var values = watch(name);

  var _useDisclosure2 = useDisclosure({
    defaultIsOpen: true
  }),
      isOpen = _useDisclosure2.isOpen,
      onToggle = _useDisclosure2.onToggle;

  var objectStyles = useStyles('objectField', styles);
  var errorMessage = useErrorMessage(name, field.label);
  var isVisible = useMemo(function () {
    return shouldDisplay ? shouldDisplay(values) : true;
  }, [values, shouldDisplay]);
  return isVisible ? React.createElement(FormControl, Object.assign({
    isRequired: !!isRequired,
    isInvalid: !!errorMessage
  }, objectStyles.control), React.createElement(Flex, Object.assign({}, objectStyles.toolbar), !!label && React.createElement(FormLabel, Object.assign({
    htmlFor: name
  }, objectStyles.label), label), isCollapsable && React.createElement(IconButton, Object.assign({
    as: isOpen ? ViewOffIcon : ViewIcon,
    "aria-label": isOpen ? 'Hide items' : 'Show items',
    onClick: onToggle
  }, objectStyles.collapseButton))), React.createElement(Collapse, {
    isOpen: isOpen
  }, React.createElement(Stack, Object.assign({}, objectStyles.objectContainer), Object.entries(field.properties).map(function (_ref4, i) {
    var fieldName = _ref4[0],
        objectField = _ref4[1];
    return React.createElement(Box, Object.assign({
      key: i
    }, objectStyles.propertyContainer), renderField([name + "." + fieldName, objectField], id, defaultValue == null ? void 0 : defaultValue[fieldName]));
  }))), !!helperText && React.createElement(FormHelperText, Object.assign({}, objectStyles.helperText), helperText), React.createElement(FormErrorMessage, Object.assign({}, objectStyles.errorMessage), errorMessage)) : null;
};

var defaultStyles = {
  form: {
    container: {
      padding: 4
    },
    title: {
      size: 'lg',
      marginBottom: 4
    },
    fieldSpacing: 6,
    buttonGroup: {
      marginTop: 4
    },
    submitButton: {
      size: 'sm'
    },
    resetButton: {
      size: 'sm'
    }
  },
  arrayField: arrayFieldStyles,
  objectField: objectFieldStyles,
  checkboxField: checkboxFieldStyles
};

var renderField$1 = function renderField(_ref) {
  var name = _ref[0],
      field = _ref[1];
  var Component = null;

  switch (field.type) {
    case 'text':
      Component = TextField;
      break;

    case 'textArea':
      Component = TextAreaField;
      break;

    case 'number':
      Component = NumberField;
      break;

    case 'array':
      Component = ArrayField;
      break;

    case 'object':
      Component = ObjectField;
      break;

    case 'switch':
      Component = SwitchField;
      break;

    case 'checkbox':
      Component = CheckboxField;
      break;

    case 'select':
      Component = SelectField;
      break;

    case 'custom':
      Component = field.component;
      return React.createElement(Box, {
        key: name + "-container"
      }, React.createElement(Component, Object.assign({
        name: name,
        field: field
      }, field.props)));
  }

  return React.createElement(Box, {
    key: name + "-container"
  }, React.createElement(Component, {
    name: name,
    field: field
  }));
};

var Form = function Form(_ref2) {
  var _baseStyles$form, _baseStyles$form2, _baseStyles$form3, _baseStyles$form4, _buttons$reset, _baseStyles$form5, _buttons$reset2, _baseStyles$form6, _buttons$submit;

  var title = _ref2.title,
      schema = _ref2.schema,
      handleSubmit = _ref2.handleSubmit,
      formOptions = _ref2.formOptions,
      overwriteDefaultStyles = _ref2.overwriteDefaultStyles,
      buttons = _ref2.buttons,
      _ref2$styles = _ref2.styles,
      styles = _ref2$styles === void 0 ? {} : _ref2$styles;
  var form = useForm(formOptions);
  var baseStyles = useMemo(function () {
    return overwriteDefaultStyles ? styles : merge(defaultStyles, styles);
  }, [styles, overwriteDefaultStyles]);
  return React.createElement(StyleCtx.Provider, {
    value: baseStyles
  }, React.createElement(FormProvider, Object.assign({}, form), React.createElement(Box, Object.assign({
    as: "form",
    onSubmit: form.handleSubmit(handleSubmit)
  }, (_baseStyles$form = baseStyles.form) == null ? void 0 : _baseStyles$form.container), !!title && React.createElement(Heading, Object.assign({}, (_baseStyles$form2 = baseStyles.form) == null ? void 0 : _baseStyles$form2.title), title), React.createElement(Stack, {
    spacing: (_baseStyles$form3 = baseStyles.form) == null ? void 0 : _baseStyles$form3.fieldSpacing
  }, Object.entries(schema).map(renderField$1)), React.createElement(ButtonGroup, Object.assign({}, (_baseStyles$form4 = baseStyles.form) == null ? void 0 : _baseStyles$form4.buttonGroup), buttons != null && (_buttons$reset = buttons.reset) != null && _buttons$reset.hidden ? null : React.createElement(Button, Object.assign({
    type: "reset"
  }, (_baseStyles$form5 = baseStyles.form) == null ? void 0 : _baseStyles$form5.resetButton), (buttons == null ? void 0 : (_buttons$reset2 = buttons.reset) == null ? void 0 : _buttons$reset2.text) || 'Reset'), React.createElement(Button, Object.assign({
    type: "submit"
  }, (_baseStyles$form6 = baseStyles.form) == null ? void 0 : _baseStyles$form6.submitButton), (buttons == null ? void 0 : (_buttons$submit = buttons.submit) == null ? void 0 : _buttons$submit.text) || 'Submit')))));
};

export { Form, useErrorMessage, useStyles };
//# sourceMappingURL=react-hook-form-generator.esm.js.map
