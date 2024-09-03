import { fetchSessions } from '../services/sessions.js'

export default async function dataMock(id) {
    const data = await fetchSessions(id)
    return data
}