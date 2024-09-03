import { fetchData } from '../services/fetchBase.js'

export function fetchUserInfos(id) {
  return fetchData(`http://localhost:3000/user/${id}`)
}