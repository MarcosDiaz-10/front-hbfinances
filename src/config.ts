
if (!process.env.NEXT_PUBLIC_URL_API) {
    throw new Error("Error crítico: NEXT_PUBLIC_URL_API no está definida.");
}



export const CONFIG = {
    urlApi: process.env.NEXT_PUBLIC_URL_API,
};