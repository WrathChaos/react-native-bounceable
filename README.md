<img alt="React Native Bounceable" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-bounceable)

[![Animate and bounce any component with RNBounceable for React Native](https://img.shields.io/badge/-Animate%20and%20bounce%20any%20component%20with%20RNBounceable%20for%20React%20Native-orange?style=for-the-badge)](https://github.com/WrathChaos/react-native-bounceable)

[![npm version](https://img.shields.io/npm/v/@freakycoder/react-native-bounceable.svg?style=for-the-badge)](https://www.npmjs.com/package/@freakycoder/react-native-bounceable)
[![npm](https://img.shields.io/npm/dt/@freakycoder/react-native-bounceable.svg?style=for-the-badge)](https://www.npmjs.com/package/@freakycoder/react-native-bounceable)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Bounceable"
        src="assets/react-native-bounceable.gif" />
</p>

# Version 1 🚀

Finally we're published the `version 1` for the bounceable library
- Much better animation with `pressIn` and `pressOut` bounces 😍
- More than 90k downloads and battle tested 💪

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

| Property        |   Type   |  Default  | Description                                      |
| --------------- | :------: | :-------: | ------------------------------------------------ |
| onPress         | function | undefined | set your own logic for the onPress functionality |
| style           |  style   | undefined | set the style like any other View container      |
| bounceEffect    |  number  |    0.9    | change the bounce effect's value                 |
| bounceFriction  |  number  |     3     | change the bounce effect's friction value        |
| useNativeDriver | boolean  |   true    | change the useNativeDriver's usage               |
| animate         | function |  default  | activate the bounce effect animation             |

## Future Plans

- [x] ~~LICENSE~~
- [x] ~~More customizable animation props~~
- [ ] Write an article about the lib on Medium

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Bounceable is available under the MIT license. See the LICENSE file for more info.
