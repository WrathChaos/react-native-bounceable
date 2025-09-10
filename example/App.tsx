import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import RNBounceable from './lib/RNBounceable';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Basic Examples</Text>

      <View style={styles.section}>
        <Text style={styles.label}>1) Simple button</Text>
        <RNBounceable
          onPress={() => console.log('Pressed!')}
          bounceEffectIn={0.92}
          bounceEffectOut={1}
          bounceVelocityIn={0.2}
          bounceVelocityOut={0.45}
          bouncinessIn={6}
          bouncinessOut={0}
          style={{ backgroundColor: '#111827', paddingVertical: 12, paddingHorizontal: 16, borderRadius: 12 }}
        >
          <Text style={{ color: '#fff', fontWeight: '600' }}>Tap me</Text>
        </RNBounceable>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>2) Pressed feedback (function style)</Text>
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
          onPress={() => { }}
        >
          <Text style={{ color: '#fff', fontWeight: '600' }}>Pressed color</Text>
        </RNBounceable>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>3) Custom bounce tuning</Text>
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
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>4) Disabled (no bounce)</Text>
        <RNBounceable
          disabled
          style={{ backgroundColor: '#9ca3af', padding: 12, borderRadius: 12, opacity: 0.6 }}
        >
          <Text style={{ color: '#fff' }}>Disabled</Text>
        </RNBounceable>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>5) onPressIn / onPressOut</Text>
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
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>6) Long press</Text>
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
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>7) Icon / Image as child</Text>
        <RNBounceable
          bounceEffectIn={0.9}
          bounceEffectOut={1}
          bounceVelocityIn={0.5}
          bounceVelocityOut={0.6}
          bouncinessIn={18}
          bouncinessOut={6}
          onPress={() => { }}
          style={styles.iconCircle}
        >
          <Text style={{ fontSize: 20 }}>❤️</Text>
        </RNBounceable>
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 56,
    backgroundColor: '#f8fafc',
    alignItems: 'stretch',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 16,
  },
  section: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
    color: '#374151',
    fontWeight: '700',
  },
  iconCircle: {
    height: 44,
    width: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
});
