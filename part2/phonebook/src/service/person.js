import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = duplicateFlag => {
  const request =  axios.get(baseUrl);
  return request.then(response => response.data);
}

const create = newObject => {
  const request =  axios.post(baseUrl, newObject);
  return request.then(response => response.data);
}

const change = (id,newObject) => {
  const request = axios.put(`${baseUrl}/${id}`,newObject);
  return  request.then(response => response.data);
}

const deletePerson = id =>{
  return axios.delete(`${baseUrl}/${id}`);
}


export default { 
  getAll: getAll, 
  create: create,
  deletePerson:deletePerson,
  change:change
}