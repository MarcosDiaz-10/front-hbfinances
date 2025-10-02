
if (!process.env.NEXT_PUBLIC_URL_API_FRONT) {
    throw new Error("Error crítico: NEXT_PUBLIC_URL_API_FRONT no está definida.");
}

if (!process.env.URL_API_SERVER) {
    throw new Error("Error crítico: URL_API_SERVER no está definida.");
}

export const CONFIG = {
    urlApiServer: process.env.URL_API_SERVER,
    urlApiFront: process.env.NEXT_PUBLIC_URL_API_FRONT,
};