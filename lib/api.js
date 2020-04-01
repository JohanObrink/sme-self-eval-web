export const host = process.env.API_HOST

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
}

export const create = async (data) => {
  const url = `${host}/cases`
  const init = {
    headers,
    method: 'POST',
    body: JSON.stringify(data)
  }
  const response = await fetch(url, init)
  return await response.json()
}

export const update = async (id, data) => {
  const url = `${host}/cases/${id}`
  const init = {
    headers,
    method: 'PUT',
    body: JSON.stringify(data)
  }
  const response = await fetch(url, init)
}

export const get = async (id) => {
  const url = `${host}/cases/${id}`
  const init = {
    headers,
    method: 'GET'
  }
  const response = await fetch(url, init)
  return await response.json()
}
