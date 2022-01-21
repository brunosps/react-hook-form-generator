import { FC, BaseSyntheticEvent } from 'react';
import { UseFormOptions } from 'react-hook-form';
import { FormStyles, Schema } from '../types';
export interface FormProps {
    title?: string;
    schema: Schema;
    handleSubmit: (values: any, e?: BaseSyntheticEvent) => void;
    styles?: FormStyles;
    overwriteDefaultStyles?: boolean;
    formOptions?: UseFormOptions;
    buttons?: {
        reset?: {
            text?: string;
            hidden?: boolean;
        };
        submit?: {
            text?: string;
        };
    };
}
export declare const Form: FC<FormProps>;
