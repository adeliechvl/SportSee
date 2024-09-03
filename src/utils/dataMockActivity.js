import { fetchActivity } from '../services/activity.js'

export default async function dataMock(id) {
  const data = await fetchActivity(id)
  return data
}