import * as React from "react";
import { Animated, Pressable, PressableProps } from "react-native";

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

  return (
    <Animated.View style={{ transform: [{ scale: bounceValue }] }}>
      <Pressable
        ref={ref as any}
        {...rest}
        style={style}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={onPress}
        disabled={disabled}
      >
        {children}
      </Pressable>
    </Animated.View>
  );
};

const RNBounceable = React.memo(React.forwardRef(RNBounceableInner));

export default RNBounceable;
