/// <reference types="react" />
import { FormStyles, FieldStyles } from '../types';
export declare const StyleCtx: import("react").Context<FormStyles>;
export declare const useStyles: <T extends FieldStyles>(type: keyof FormStyles, inlineStyles?: T | undefined) => T;
