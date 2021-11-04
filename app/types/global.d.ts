/**
 * IMPORTANT - do not use imports in this file!
 * It will break global definition.
 */
declare namespace NodeJS {
  export interface Global {
    storage: any
  }
}

declare let storage: any

// use storage variable in ather files
// global.storage = {} ...
