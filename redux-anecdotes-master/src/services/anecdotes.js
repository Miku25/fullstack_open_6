import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async() => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (text) => {
  const object = { text, votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const getOne = async(id) => {
  const url = `${baseUrl}/${id}`
  const response = await axios.get(url)
  return response.data
}

const update = async (id) => {
  const object = await getOne(id)
  const updatedObject = {...object, votes: object.votes+1}
  console.log(object)
  console.log(updatedObject)
  const url = `${baseUrl}/${id}`
  const response = await axios.put(url, updatedObject)
  return response.data
}

export default { getAll, createNew, update }