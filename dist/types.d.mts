
import type { ModuleOptions } from './module.js'


declare module '@nuxt/schema' {
  interface NuxtConfig { ['nuxt3Aos3']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['nuxt3Aos3']?: ModuleOptions }
}

declare module 'nuxt/schema' {
  interface NuxtConfig { ['nuxt3Aos3']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['nuxt3Aos3']?: ModuleOptions }
}


export type { ModuleOptions, default } from './module.js'
