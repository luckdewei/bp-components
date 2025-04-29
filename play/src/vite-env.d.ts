/// <reference types="vite/client" />

declare module 'vite-plugin-eslint' {
  import { Plugin } from 'vite'
  interface Options {
    include?: string | string[]
    exclude?: string | string[]
    cache?: boolean
    fix?: boolean
    formatter?: string
    eslintPath?: string
  }
  export default function eslint(options?: Options): Plugin
}