module.exports = {
  stories: ['../src/**/*.stories.(js|mdx)'],
  addons: [
    {
      name: '@storybook/preset-create-react-app',
      options: {
        scriptsPackageName: '@my/react-scripts',
      },
    },
    '@storybook/addon-links',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true
      },
    },
  ]
};
