const API = 'http://localhost:4000/api/turns'

export const getTurns = async () => {
    const res = await fetch(API)
    return await res.json()
}

export const reduceRations = async (id, foods) => {
    const res = await fetch(`${API}/reduceRations/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(foods)
    })
    return await res.json()
}