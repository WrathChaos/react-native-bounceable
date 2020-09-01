<img alt="React Native Bounceable" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-bounceable)

[![React Native Bounceable](https://img.shields.io/badge/-Extremely%20easy%20to%20create%20a%20React%20Native%20Component%20Library%20with%20both%20Stateful%20and%20Functional%20Component%20Examples-orange?style=for-the-badge)](https://github.com/WrathChaos/react-native-bounceable)

[![npm version](https://img.shields.io/npm/v/@freakycoder/react-native-bounceable.svg?style=for-the-badge)](https://www.npmjs.com/package/@freakycoder/react-native-bounceable)
[![npm](https://img.shields.io/npm/dt/@freakycoder/react-native-bounceable.svg?style=for-the-badge)](https://www.npmjs.com/package/@freakycoder/react-native-bounceable)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Bounceable"
        src="assets/Screenshots/typescript.jpg" />
</p>

# Installation

Add the dependency:

```bash
npm i @freakycoder/react-native-bounceable
```

# Usage

## Import

```jsx
import RNBounceable from "@freakycoder/react-native-bounceable";
```

## Fundamental Usage

You can put **ANY children component** inside the **RNBounceable** component, it will make it bounce when it is pressed

```jsx
<RNBounceable onPress={() => {}}>
  <View style={styles.bounceButtonStyle}>
    <Text style={styles.bounceButtonTextStyle}>Bounce</Text>
  </View>
</RNBounceable>
```

# Configuration - Props

Coming Soon with more customizable props

<!-- | Property | Type | Default | Description |
| -------- | :-----: | :-----: | ------------------------------------------------------- |
| outline | boolean | true | make the button outline |
| solid | boolean | false | make the button with a solid background and a shadow |
| gradient | boolean | false | make the button with a gradient background and a shadow |
| width | number | 150 | change the button's width | -->

## Future Plans

- [x] ~~LICENSE~~
- [ ] More customizable animation props
- [ ] Write an article about the lib on Medium

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Bounceable is available under the MIT license. See the LICENSE file for more info.
