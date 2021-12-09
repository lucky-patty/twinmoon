// Mocks all files ending in `.vue` showing them as plain Vue instances
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// Test add declare
declare module '*.svg' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{},{},any>;
  export default component;
}

// Test add declare
declare module '*.png' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{},{},any>;
  export default component;
}

// Add Jpg
declare module '*.jpg' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{},{},any>;
  export default component;
}