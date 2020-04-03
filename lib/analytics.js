const nameMap = {
  $name: 'start',
  test: {
    $name: 'test',
    '(\\d+)': {
      $name: 'test|steg-$1'
    }
  },
  report: {
    $name: 'rapport',
    '([a-z1-9]{1,6})': {
      $name: 'rapport|granska'
    }
  }
}

export const getPageName = (path) => {
  const tokens = path.toLowerCase().split('/').filter(t => t)
  let currentNode = nameMap
  let currentName = currentNode.$name
  for (let token of tokens) {
    for (let [key, node] of Object.entries(currentNode)) {
      const rx = new RegExp(key, 'i')
      if (rx.test(token)) {
        currentNode = node
        currentName = token.replace(rx, node.$name)
        break
      }
    }
  }
  return currentName
}

const datalayerDefaults = window['dataLayer'] || {}

export const trackPage = (url = '/') => {
  const dataLayer = {
    ...datalayerDefaults,
    pageName: getPageName(url)
  }
  window['dataLayer'] = dataLayer
  window['_satellite'] && window['_satellite'].track('v_pageview')
}

export const trackEvent = (category, action, label) => {
  const dataLayer = {
    ...window['dataLayer'],
    track_interaction: action,
    track_interaction_category: category,
    track_interaction_label: label
  }
  window['dataLayer'] = dataLayer
  window['_satellite'] && window['_satellite'].track('track_interaction')
}

let toolIsStarted = false
export const toolStarted = () => {
  if (toolIsStarted) return
  toolIsStarted = true

  const dataLayer = {
    ...window['dataLayer'],
    eventAction: 'tool_initiated',
    toolName: 'corona_sjalvtest'
  }
  window['dataLayer'] = dataLayer
  window['_satellite'] && window['_satellite'].track('tool_initiated')
}

export const toolCompleted = () => {
  if (!toolIsStarted) return
  toolIsStarted = false

  const dataLayer = {
    ...window['dataLayer'],
    eventAction: 'tool_completed',
    toolName: 'corona_sjalvtest'
  }
  window['dataLayer'] = dataLayer
  window['_satellite'] && window['_satellite'].track('tool_completed')
}
