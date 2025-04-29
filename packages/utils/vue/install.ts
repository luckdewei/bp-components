import { App, Plugin } from "vue"


export type SFCWithInstall<T extends { name: string }> = T & Plugin

export const withInstall = <T extends { name: string }>(component: T) => {
  (component as SFCWithInstall<T>).install = (app: App) => {
    app.component(component.name, component)
  }
  return component as SFCWithInstall<T>
}
