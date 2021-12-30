import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import equals from 'react-fast-compare';

const space = 5;

function Button(props) {
  const {
    content,
    width,
    index,
    translateX,
    maxTranslate,
    type,
    onPress,
    length,
  } = props;
  const backgroundColor = content.backgroundColor || '#b388ff';
  const titleColor = content.titleColor || 'white';

  const contentStyle = useAnimatedStyle(() => {
    const delta = Math.abs(translateX.value) - maxTranslate;

    if (type === 'right') {
      return {
        position: 'absolute',
        flex: 0,
        top: 0,
        bottom: 0,
        right: delta > 0 ? -(width + delta / length + space) : -width,
        width: delta > 0 ? width + delta / length + space : width,
        transform: [
          {
            translateX: interpolate(
              translateX.value,
              [-maxTranslate, 0],
              [-width * index, 0],
              Extrapolate.EXTEND
            ),
          },
        ],
      };
    }

    return {
      position: 'absolute',
      flex: 0,
      alignItems: 'flex-end',
      top: 0,
      bottom: 0,
      left: delta > 0 ? -(width + delta / length + space) : -width,
      width: delta > 0 ? width + delta / length + space : width,
      transform: [
        {
          translateX: interpolate(
            translateX.value,
            [0, maxTranslate],
            [0, width * index],
            Extrapolate.EXTEND
          ),
        },
      ],
    };
  });

  return (
    <Animated.View style={[{ backgroundColor }, contentStyle]}>
      <TouchableOpacity
        onPress={onPress}
        testID={content.testID}
        accessibilityLabel={content.accessibilityLabel}
        style={[styles.container, { width }]}
      >
        {!!content.title && (
          <Text
            style={[
              styles.title,
              // eslint-disable-next-line react-native/no-inline-styles
              { color: titleColor, marginTop: 0 },
              content.titleStyle,
            ]}
          >
            {content.title}
          </Text>
        )}
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 14,
  },
});

export default React.memo(Button, equals);