import * as React from "react";
import {
  Animated,
  ViewStyle,
  StyleProp,
  Pressable,
  PressableProps,
} from "react-native";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
export interface IRNBounceableProps extends PressableProps {
  onPress?: () => void;
  bounceEffectIn?: number;
  bounceEffectOut?: number;
  bounceVelocityIn?: number;
  bounceVelocityOut?: number;
  bouncinessIn?: number;
  bouncinessOut?: number;
  useNativeDriver?: boolean;
  children?: React.ReactNode;
  style?: CustomStyleProp;
}

interface IState {
  bounceValue: any;
}

export default class RNBounceable extends React.Component<
  IRNBounceableProps,
  IState
> {
  constructor(props: IRNBounceableProps) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(1),
    };
  }

  bounceTo = (value: number, velocity: number, bounciness: number) => {
    const { useNativeDriver = true } = this.props;
    Animated.spring(this.state.bounceValue, {
      toValue: value,
      velocity,
      bounciness,
      useNativeDriver,
    }).start();
  };

  render() {
    const {
      bounceEffectIn = 0.93,
      bounceEffectOut = 1,
      bounceVelocityIn = 0.1,
      bounceVelocityOut = 0.4,
      bouncinessIn = 0,
      bouncinessOut = 0,
      children,
      style,
      onPress,
    } = this.props;
    return (
      <Pressable
        {...this.props}
        onPressIn={() => {
          this.bounceTo(bounceEffectIn, bounceVelocityIn, bouncinessIn);
        }}
        onPressOut={() => {
          this.bounceTo(bounceEffectOut, bounceVelocityOut, bouncinessOut);
        }}
        onPress={onPress}
      >
        <Animated.View
          style={[{ transform: [{ scale: this.state.bounceValue }] }, style]}
        >
          {children}
        </Animated.View>
      </Pressable>
    );
  }
}
