interface person<T> {
    id: T,
    name: string,
}

function addPerson<T> (data: person<T>): void {
    console.log(data)
}

addPerson<number>({id: 1, name: "박경은"});
addPerson<string>({id: "1", name: "박경은"});

// redux actionType와 같이 string 형태의 index의 경우 enum으로 처리 방법이 안전한 것으로 확인됨