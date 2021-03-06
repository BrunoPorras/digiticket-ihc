const API = 'http://192.168.101.22:4000/api/tickets'

export const createTicket = async (ticket) => {
    const res = await fetch(API, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ticket)
    });
    return await res.json();
}