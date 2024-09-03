import { fetchData } from '../services/fetchBase.js'

export function fetchActivity(id) {
  return fetchData(`http://localhost:3000/user/${id}/activity`)
}