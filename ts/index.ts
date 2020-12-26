interface person<T> {
    id: T,
    name: string,
}

function addPerson<T> (data: person<T>): void {
    console.log(data)
}

addPerson<number>({id: 1, name: "박경은"});
addPerson<string>({id: "1", name: "박경은"});