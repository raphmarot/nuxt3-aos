import { defineNuxtModule, createResolver, addPlugin } from '@nuxt/kit';

const module = defineNuxtModule({
  meta: {
    name: "nuxt3-aos3",
    configKey: "nuxt3Aos3"
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);
    addPlugin(resolver.resolve("./runtime/plugin"));
  }
});

export { module as default };
