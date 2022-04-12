export type InferValueTypes<T> = T extends { [key: string]: infer U }
    ? U
    : never;

export const getBase64 = (img: any, callback: any) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result))
    reader.readAsDataURL(img)
}