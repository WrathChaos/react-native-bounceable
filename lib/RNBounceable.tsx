import * as React from "react";
import {
  Easing,
  Animated,
  ViewStyle,
  StyleProp,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from "react-native";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
export interface IRNBounceableProps extends TouchableWithoutFeedbackProps {
  onPress?: () => void;
  bounceEffect?: number;
  bounceFriction?: number;
  useNativeDriver?: boolean;
  children?: React.ReactNode;
  style?: CustomStyleProp;
}

interface IState {
  springValue: any;
}

export default class RNBounceable extends React.Component<
  IRNBounceableProps,
  IState
> {
  constructor(props: IRNBounceableProps) {
    super(props);
    this.state = {
      springValue: new Animated.Value(1),
    };
  }

  animate = () => {
    const { springValue } = this.state;
    const {
      bounceEffect = 0.9,
      bounceFriction = 3,
      useNativeDriver = true,
    } = this.props;
    springValue.setValue(bounceEffect);
    Animated.spring(springValue, {
      toValue: 1,
      friction: bounceFriction,
      useNativeDriver,
    }).start();
  };

  onPress = () => {
    this.animate();
    // ?  Outside of the onPress function callback
    this.props.onPress && this.props.onPress();
  };

  render() {
    const { children, style } = this.props;
    return (
      <TouchableWithoutFeedback
        {...this.props}
        onPress={this.onPress.bind(this, Easing.bounce)}
      >
        <Animated.View
          style={[{ transform: [{ scale: this.state.springValue }] }, style]}
        >
          {children}
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}
