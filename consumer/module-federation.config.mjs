import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'consumer',
  remotes: {
    remote: 'remote@http://localhost:3001/mf-manifest.json',
  },
  shareStrategy: 'loaded-first',
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
});

