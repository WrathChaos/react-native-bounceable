r<img alt="React Native Bounceable" src="assets/logo.png" width="1050"/>

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

## Basic Examples

### 1) Simple button

```jsx
<RNBounceable
  onPress={() => console.log('Pressed!')}
  bounceEffectIn={0.92}
  bounceEffectOut={1}
  bounceVelocityIn={0.2}
  bounceVelocityOut={0.45}
  bouncinessIn={6}
  bouncinessOut={0}
  style={{
    backgroundColor: '#111827', paddingVertical: 12, paddingHorizontal: 16, borderRadius: 12,
  }}
>
  <Text style={{ color: '#fff', fontWeight: '600' }}>Tap me</Text>
</RNBounceable>
```

### 2) Pressed feedback (function style)

```jsx
<RNBounceable
  bounceEffectIn={0.97}
  bounceEffectOut={1}
  bounceVelocityIn={0.15}
  bounceVelocityOut={0.4}
  bouncinessIn={0}
  bouncinessOut={0}
  style={(state) => [{
    paddingVertical: 12, paddingHorizontal: 16, borderRadius: 12,
    backgroundColor: state.pressed ? '#0ea5e9' : '#3b82f6',
  }]}
  onPress={() => {}}
>
  <Text style={{ color: '#fff', fontWeight: '600' }}>Pressed color</Text>
</RNBounceable>
```

### 3) Custom bounce tuning

```jsx
<RNBounceable
  bounceEffectIn={0.88}
  bounceEffectOut={1}
  bounceVelocityIn={0.35}
  bounceVelocityOut={0.7}
  bouncinessIn={16}
  bouncinessOut={6}
  style={{ backgroundColor: '#22c55e', padding: 12, borderRadius: 12 }}
>
  <Text style={{ color: '#fff', fontWeight: '700' }}>Custom spring</Text>
</RNBounceable>
```

### 4) Disabled (no bounce)

```jsx
<RNBounceable disabled style={{
  backgroundColor: '#9ca3af', padding: 12, borderRadius: 12, opacity: 0.6,
}}>
  <Text style={{ color: '#fff' }}>Disabled</Text>
</RNBounceable>
```

### 5) onPressIn / onPressOut

```jsx
<RNBounceable
  bounceEffectIn={0.95}
  bounceEffectOut={1}
  bounceVelocityIn={0.25}
  bounceVelocityOut={0.5}
  bouncinessIn={10}
  bouncinessOut={0}
  onPressIn={() => console.log('press in')}
  onPressOut={() => console.log('press out')}
  style={{ backgroundColor: '#111827', padding: 12, borderRadius: 12 }}
>
  <Text style={{ color: '#fff' }}>Press events</Text>
</RNBounceable>
```

### 6) Long press

```jsx
<RNBounceable
  bounceEffectIn={0.85}
  bounceEffectOut={1}
  bounceVelocityIn={0.4}
  bounceVelocityOut={0.65}
  bouncinessIn={14}
  bouncinessOut={4}
  onLongPress={() => console.log('long press')}
  delayLongPress={300}
  style={{ backgroundColor: '#111827', padding: 12, borderRadius: 12 }}
>
  <Text style={{ color: '#fff' }}>Hold me</Text>
</RNBounceable>
```

### 7) Icon / Image as child

```jsx
<RNBounceable
  bounceEffectIn={0.9}
  bounceEffectOut={1}
  bounceVelocityIn={0.5}
  bounceVelocityOut={0.6}
  bouncinessIn={18}
  bouncinessOut={6}
  onPress={() => {}}
  style={{ height: 44, width: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}
>
  <Text style={{ fontSize: 20 }}>❤️</Text>
</RNBounceable>
```

# Configuration - Props

| Property           |        Type        | Default | Description                                                |
| ------------------ | :----------------: | :-----: | ---------------------------------------------------------- |
| onPress            |      function      |    -    | Callback for press                                         |
| style              | Pressable `style`  |    -    | Style object/array or function `(state) => style`          |
| bounceEffectIn     |       number       |  0.93   | Scale value applied on press in                            |
| bounceEffectOut    |       number       |    1    | Scale value applied on press out                           |
| bounceVelocityIn   |       number       |  0.1    | Spring velocity for press in                               |
| bounceVelocityOut  |       number       |  0.4    | Spring velocity for press out                              |
| bouncinessIn       |       number       |    0    | Spring bounciness for press in                             |
| bouncinessOut      |       number       |    0    | Spring bounciness for press out                            |
| useNativeDriver    |      boolean       |  true   | Use native driver for animation                            |

All React Native `Pressable` props are supported and forwarded (including `onPressIn`, `onPressOut`, `disabled`, and `ref`). The bounce effect is skipped when `disabled` is true.

## Future Plans

- [x] ~~LICENSE~~
- [x] ~~More customizable animation props~~
- [ ] Write an article about the lib on Medium

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Bounceable is available under the MIT license. See the LICENSE file for more info.
