import * as React from "react";
import {
  Animated,
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  StyleProp,
  ViewStyle,
} from "react-native";

const AnimatedPressable = Animated.createAnimatedComponent(
  Pressable as unknown as React.ComponentClass<PressableProps>,
) as React.ComponentClass<PressableProps>;

export interface IRNBounceableProps extends PressableProps {
  bounceEffectIn?: number;
  bounceEffectOut?: number;
  bounceVelocityIn?: number;
  bounceVelocityOut?: number;
  bouncinessIn?: number;
  bouncinessOut?: number;
  useNativeDriver?: boolean;
  style?: PressableProps["style"];
}

type PressableRef = React.ElementRef<typeof Pressable>;

const RNBounceableInner = (
  props: IRNBounceableProps,
  ref: React.Ref<PressableRef>,
) => {
  const {
    bounceEffectIn = 0.93,
    bounceEffectOut = 1,
    bounceVelocityIn = 0.1,
    bounceVelocityOut = 0.4,
    bouncinessIn = 0,
    bouncinessOut = 0,
    useNativeDriver = true,
    style,
    onPressIn,
    onPressOut,
    onPress,
    disabled,
    children,
    ...rest
  } = props;

  const bounceValue = React.useRef<Animated.Value>(new Animated.Value(1)).current;

  const bounceAnimation = React.useCallback(
    (value: number, velocity: number, bounciness: number) => {
      Animated.spring(bounceValue, {
        toValue: value,
        velocity,
        bounciness,
        useNativeDriver,
      }).start();
    },
    [bounceValue, useNativeDriver],
  );

  const handlePressIn = React.useCallback<NonNullable<PressableProps["onPressIn"]>>(
    (event) => {
      if (!disabled) {
        bounceAnimation(bounceEffectIn, bounceVelocityIn, bouncinessIn);
      }
      onPressIn?.(event);
    },
    [disabled, bounceAnimation, bounceEffectIn, bounceVelocityIn, bouncinessIn, onPressIn],
  );

  const handlePressOut = React.useCallback<NonNullable<PressableProps["onPressOut"]>>(
    (event) => {
      if (!disabled) {
        bounceAnimation(bounceEffectOut, bounceVelocityOut, bouncinessOut);
      }
      onPressOut?.(event);
    },
    [disabled, bounceAnimation, bounceEffectOut, bounceVelocityOut, bouncinessOut, onPressOut],
  );

  const animatedTransformStyle = React.useMemo<StyleProp<ViewStyle>>(
    () => ({
      transform: [{ scale: bounceValue }],
    }),
    [bounceValue],
  );

  const composedStyle = React.useMemo<PressableProps["style"]>(() => {
    if (typeof style === "function") {
      return (pressState: PressableStateCallbackType) => [
        animatedTransformStyle,
        style(pressState),
      ];
    }

    return [animatedTransformStyle, style];
  }, [style, animatedTransformStyle]);

  return (
    <AnimatedPressable
      ref={ref as any}
      {...rest}
      style={composedStyle}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
      disabled={disabled}
    >
      {children}
    </AnimatedPressable>
  );
};

const RNBounceable = React.memo(React.forwardRef(RNBounceableInner));

export default RNBounceable;
