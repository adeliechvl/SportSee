import { fetchUserInfos } from '../services/userInfos.js'

export default async function dataMock(id) {
  const data = await fetchUserInfos(id)
  return data
}