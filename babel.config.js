module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins : [
    [
      'module-resolver',
      {
        root : ['./src'],
        alias : {
          api : './src/api',
          assets : './src/assets',
          hooks : './src/hooks',
          components : './src/components',
          containers : './src/containers',
          navigator : './src/navigator',
          screens : './src/screens',
          store : './src/store',
          utils : './src/utils'
        }
      }
    ]
  ]
};
