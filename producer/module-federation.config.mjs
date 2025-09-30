import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';
export default createModuleFederationConfig({
  name: 'producer',
  filename: 'remoteEntry.js',
  exposes: {
    './Button': './src/Button.jsx',
  },
  shared: {
    react: {
      singleton: true,
      requiredVersion: '^19.1.1',
    },
    'react-dom': {
      singleton: true,
      requiredVersion: '^19.1.1',
    },
  },
    getPublicPath: `function() { return "http://localhost:3001/" }`
  });
