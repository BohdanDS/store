export function arrayToObjArray(array: number[] | string[]) {
    const newArr = []
    for (let i = 0; i < array.length; i++) {
        let obj = {
            id: Number(array[i])
        }
        newArr.push(obj)
    }
    return newArr
}