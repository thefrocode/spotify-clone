## Generate libraries
npx nx g @nrwl/react:lib ui --directory libs/ui


## Generate components

npx nx g @nrwl/react:component button --project=ui --directory components --export


## How to setup Vanilla Extract and Storybook

npx nx g @nrwl/react:storybook-configuration --name=ui

vanillaExtractPlugin()
npm i @vanilla-extract/css
npm install --save-dev @vanilla-extract/vite-plugin
npm install --save-dev @vanilla-extract/jest-transform