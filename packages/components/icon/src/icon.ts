import { ExtractPropTypes, PropType, Component } from 'vue';

const IconProps = {
    color: String,
    size: [Number, String] as PropType<number|string>,
    component: [Object, Function] as PropType<Component>,
    rotate: [Number, String] as PropType<number|string>
} as const;

export type IconProps = ExtractPropTypes<typeof IconProps>

export { IconProps }