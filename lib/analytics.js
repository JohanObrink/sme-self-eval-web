window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
  
// ga('create', process.env.TRACKING_CODE, 'auto')

const sanitize = (url) => url
  .replace(/report\/[\w\d]{1,6}/, 'report/000000')
  .replace(/\/\//g, '/')
  .replace(/\/$/, '')

export const trackPage = (url = '/') => {
  // const ga = window.ga || noop
  const ga = (...args) => console.log('GA', ...args)
  ga('set', 'page', sanitize(url))
  ga('send', 'pageview')
}

export const trackEvent = (category, action, label) => {
  // const ga = window.ga || noop
  const ga = (...args) => console.log('GA', ...args)
  ga('send', 'event', category, action, label)
}
