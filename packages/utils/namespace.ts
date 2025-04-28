const defaultPrefix = 'qy'

const statePrefix = 'is-'

const _bem = (
  prefixName: string,
  blockSuffix: string,
  element: string,
  modifier: string
) => {
  let cls = `${prefixName}`

  if (blockSuffix) {
    cls += `-${blockSuffix}`
  }
  if (element) {
    cls += `__${element}`
  }
  if (modifier) {
    cls += `--${modifier}`
  }
  return cls
}

const createBEM = (prefix: string) => {
  const b = (blockSuffix: string = '') => _bem(prefix, blockSuffix, '', '')
  const e = (element: string = '') => element ? _bem(prefix, '', element, '') : ''
  const m = (modifier: string = '') => modifier ? _bem(prefix, '', '', modifier) : ''
  const be = (blockSuffix: string, element: string) => blockSuffix && element ? _bem(prefix, blockSuffix, element, '') : ''
  const bm = (blockSuffix: string, modifier: string) => blockSuffix && modifier ? _bem(prefix, blockSuffix, '', modifier) : ''
  const em = (element: string, modifier: string) => element && modifier ? _bem(prefix, '', element, modifier) : ''
  const bem = (blockSuffix: string, element: string, modifier: string) => blockSuffix && element && modifier ? _bem(prefix, blockSuffix, element, modifier) : ''

  const is: {
    (name: string, state: boolean | undefined): string
    (name: string): string
  } = (name: string, ...args: [boolean | undefined] | []) => {
    const state = args.length >= 1 ? args[0]! : true
    return name && state ? `${statePrefix}${name}` : ''
  }

  return {
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is
  }
}


const createNamespace = (name: string) => {
  const prefixName = `${defaultPrefix}-${name}`
  return createBEM(prefixName)
}

createNamespace('icon')
