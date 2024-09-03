import { fetchData } from '../services/fetchBase.js'

export function fetchSessions(id)  {
  return fetchData(`http://localhost:3000/user/${id}/average-sessions`)
}