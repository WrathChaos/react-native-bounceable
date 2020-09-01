import * as React from "react";
import {
  Animated,
  Easing,
  View,
  ViewStyle,
  TouchableOpacity,
} from "react-native";

export interface IProps {
  style?: ViewStyle;
  onPress?: () => void;
  useNativeDriver: boolean;
  children?: React.ReactNode;
}

interface IState {
  springValue: Animated.Value;
}

export default class RNBounceable extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      springValue: new Animated.Value(1),
    };
  }

  springAnimation = () => {
    const { springValue } = this.state;
    const { useNativeDriver, onPress } = this.props;
    springValue.setValue(0.7);
    Animated.spring(springValue, {
      toValue: 1,
      friction: 3,
      useNativeDriver,
    }).start();
    // ?  Outside of the onPress function callback
    onPress && onPress();
  };

  render() {
    const { springValue } = this.state;
    const { children, useNativeDriver, onPress, style, ...rest } = this.props;
    return (
      <TouchableOpacity
        onPress={this.springAnimation.bind(this, Easing.bounce)}
      >
        <View
          {...rest}
          style={[{ transform: [{ scale: springValue }] }, style]}
        >
          {children}
        </View>
      </TouchableOpacity>
    );
  }
}
