export const currency = (val) => {
  if (val === 0) return '0 SEK'
  if (val < 1000000) return `${val / 1000} kSEK`
  return `${val / 1000000} MSEK`
}