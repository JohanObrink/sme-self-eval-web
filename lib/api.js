import 'isomorphic-fetch'

export const host = unescape(process.env.API_HOST)
export const cms = unescape(process.env.CMS_URI)

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
}

export const create = async (data) => {
  const url = `${host}/reports`
  const init = {
    headers,
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(data),
  }
  const response = await fetch(url, init)
  return await response.json()
}

export const update = async (id, data) => {
  const url = `${host}/reports/${id}`
  const init = {
    headers,
    method: 'PUT',
    mode: 'cors',
    body: JSON.stringify(data),
  }
  const response = await fetch(url, init)
}

export const get = async (id) => {
  const url = `${host}/reports/${id}`
  const init = {
    headers,
    method: 'GET',
    mode: 'cors',
  }
  const response = await fetch(url, init)
  if (response.status >= 400) {
    throw new Error(response.statusText)
  }
  return await response.json()
}

export const vote = async (reportId, value) => {
  const url = `${host}/votes`
  const init = {
    headers,
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({ reportId, vote: value }),
  }
  const response = await fetch(url, init)
  return await response.json()
}

let texts
export const getTexts = async () => {
  if (!texts) {
    const url = `${cms}`
    const init = {
      headers,
      method: 'GET',
      mode: 'cors',
    }
    const response = await fetch(url, init)
    if (response.status >= 400) {
      throw new Error(response.statusText)
    }
    texts = await response.json()
  }
  return texts && texts.result && texts.result.content ? texts.result.content : {}
}
