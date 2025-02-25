import React from "react";
import { Pressable, ViewStyle, StyleProp, PressableProps } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

export interface IRNBounceableProps extends PressableProps {
  onPress?: () => void;
  bounceEffectIn?: number;
  bounceEffectOut?: number;
  bounceVelocityIn?: number;
  bounceVelocityOut?: number;
  bouncinessIn?: number;
  bouncinessOut?: number;
  children?: React.ReactNode;
  style?: CustomStyleProp;
}

const RNBounceable: React.FC<IRNBounceableProps> = ({
  bounceEffectIn = 0.93,
  bounceEffectOut = 1,
  bounceVelocityIn = 0.1,
  bounceVelocityOut = 0.4,
  bouncinessIn = 0,
  bouncinessOut = 0,
  children,
  style,
  onPress,
  ...rest
}) => {
  const bounceValue = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: bounceValue.value }],
  }));

  const bounceAnimation = (
    value: number,
    velocity: number,
    bounciness: number,
  ) => {
    bounceValue.value = withSpring(value, {
      velocity,
      damping: bounciness === 0 ? 10 : bounciness,
      stiffness: 100,
    });
  };

  return (
    <AnimatedPressable
      {...rest}
      style={[animatedStyle, style]}
      onPressIn={() =>
        bounceAnimation(bounceEffectIn, bounceVelocityIn, bouncinessIn)
      }
      onPressOut={() =>
        bounceAnimation(bounceEffectOut, bounceVelocityOut, bouncinessOut)
      }
      onPress={onPress}
    >
      {children}
    </AnimatedPressable>
  );
};

export default RNBounceable;
