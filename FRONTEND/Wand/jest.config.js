module.exports = {
  preset: 'jest-expo',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!lwc)' +
    'node_modules/(?!(react-native' +
        '|react-navigation-tabs' +
        '|react-native-splash-screen' +
        '|react-native-screens' +
        '|react-native-reanimated' +
        '|react-native-vector-icons/Ionicons' +
        '|react-native-swiper' +
        '|react-native-swiper/src' +
      ')/)'
  ]
}
;
