export type Color = "teal" | "green" | "red" | "gray" | "black" | "white";
export type Variant = "solid" | "outline" | "ghost" | "link";
export type Size = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    variant: {
        type: import("vue").PropType<Variant>;
        default: string;
    };
    color: {
        type: import("vue").PropType<Color>;
        default: string;
    };
    round: {
        type: import("vue").PropType<boolean>;
    };
    loading: {
        type: import("vue").PropType<boolean>;
    };
    label: {
        type: import("vue").PropType<string>;
        default: any;
    };
    target: {
        type: import("vue").PropType<"_self" | "_blank" | "_parent" | "_top">;
        default: any;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
    size: {
        type: import("vue").PropType<Size>;
        default: string;
    };
    trailing: {
        type: import("vue").PropType<boolean>;
    };
    icon: {
        type: import("vue").PropType<string>;
        default: any;
    };
    to: {
        type: import("vue").PropType<string | URL>;
        default: any;
    };
    leadingIcon: {
        type: import("vue").PropType<string>;
        default: any;
    };
    trailingIcon: {
        type: import("vue").PropType<string>;
        default: any;
    };
    fullwidth: {
        type: import("vue").PropType<boolean>;
    };
    padded: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (value: PointerEvent) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    variant: {
        type: import("vue").PropType<Variant>;
        default: string;
    };
    color: {
        type: import("vue").PropType<Color>;
        default: string;
    };
    round: {
        type: import("vue").PropType<boolean>;
    };
    loading: {
        type: import("vue").PropType<boolean>;
    };
    label: {
        type: import("vue").PropType<string>;
        default: any;
    };
    target: {
        type: import("vue").PropType<"_self" | "_blank" | "_parent" | "_top">;
        default: any;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
    size: {
        type: import("vue").PropType<Size>;
        default: string;
    };
    trailing: {
        type: import("vue").PropType<boolean>;
    };
    icon: {
        type: import("vue").PropType<string>;
        default: any;
    };
    to: {
        type: import("vue").PropType<string | URL>;
        default: any;
    };
    leadingIcon: {
        type: import("vue").PropType<string>;
        default: any;
    };
    trailingIcon: {
        type: import("vue").PropType<string>;
        default: any;
    };
    fullwidth: {
        type: import("vue").PropType<boolean>;
    };
    padded: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>> & {
    onClick?: (value: PointerEvent) => any;
}, {
    variant: Variant;
    color: Color;
    label: string;
    target: "_self" | "_blank" | "_parent" | "_top";
    size: Size;
    icon: string;
    to: string | URL;
    leadingIcon: string;
    trailingIcon: string;
    padded: boolean;
}, {}>, {
    leading?(_: {}): any;
    default?(_: {}): any;
    trailing?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
