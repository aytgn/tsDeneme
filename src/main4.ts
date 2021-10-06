const addId = (obj: object) => {
    const id = Math.random().toString(16)
    return {
        ...obj,
        id
    }
}

const usertwo = {
    name: "Jack"
}

