import { configureActions } from '@storybook/addon-actions';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

configureActions({
  depth: 10,
  // Limit the number of items logged into the actions panel
  limit: 1,
  clearOnStoryChange: true
});
