
import type { ModuleOptions, ModuleHooks, RuntimeModuleHooks, ModuleRuntimeHooks, ModuleRuntimeConfig, ModulePublicRuntimeConfig } from './module'

declare module '#app' {
  interface RuntimeNuxtHooks extends RuntimeModuleHooks, ModuleRuntimeHooks {}
}

declare module '@nuxt/schema' {
  interface NuxtConfig { ['nuxt3Aos']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['nuxt3Aos']?: ModuleOptions }
  interface NuxtHooks extends ModuleHooks {}
  interface RuntimeConfig extends ModuleRuntimeConfig {}
  interface PublicRuntimeConfig extends ModulePublicRuntimeConfig {}
}

declare module 'nuxt/schema' {
  interface NuxtConfig { ['nuxt3Aos']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['nuxt3Aos']?: ModuleOptions }
  interface NuxtHooks extends ModuleHooks {}
  interface RuntimeConfig extends ModuleRuntimeConfig {}
  interface PublicRuntimeConfig extends ModulePublicRuntimeConfig {}
}


export type { default } from './module'
