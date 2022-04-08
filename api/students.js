const API = 'http://localhost:4000/api/students'

export const getStudents = async () => {
    const res = await fetch(API)
    return await res.json()
}

export const validateActivation = async (student) => {
    const res = await fetch(`${API}/validateActivation/${student.university_code}`)
    return await res.json()
}

export const login = async (student) => {
    const res = await fetch(`${API}/login`, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(student)
    })
    return await res.json()
}

export const updateStudent = async (id, student) => {
    const res = await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(student)
    })
    return await res.json()
}