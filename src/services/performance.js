import { fetchData } from '../services/fetchBase.js'

export function fetchPerformance(id) {
  return fetchData(`http://localhost:3000/user/${id}/performance`)
}