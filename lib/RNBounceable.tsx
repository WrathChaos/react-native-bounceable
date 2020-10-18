import * as React from "react";
import {
  View,
  Easing,
  Animated,
  ViewStyle,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from "react-native";

export interface IProps extends TouchableWithoutFeedbackProps {
  onPress?: () => void;
  bounceEffect?: number;
  bounceFriction?: number;
  useNativeDriver?: boolean;
  children?: React.ReactNode;
  style?: ViewStyle | Array<ViewStyle>;
}

interface IState {
  springValue: any;
}

export default class RNBounceable extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      springValue: new Animated.Value(1),
    };
  }

  springAnimation = () => {
    const { springValue } = this.state;
    const {
      bounceEffect = 0.9,
      bounceFriction = 3,
      useNativeDriver = true,
      onPress,
    } = this.props;
    springValue.setValue(bounceEffect);
    Animated.spring(springValue, {
      toValue: 1,
      friction: bounceFriction,
      useNativeDriver,
    }).start();
    // ?  Outside of the onPress function callback
    onPress && onPress();
  };

  render() {
    const { children, style } = this.props;
    return (
      <TouchableWithoutFeedback
        {...this.props}
        onPress={this.springAnimation.bind(this, Easing.bounce)}
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
