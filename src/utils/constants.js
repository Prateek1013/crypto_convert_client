export const URL=process.env.NODE_ENV=== "production"? 'https://crypto-convert-server.onrender.com' : 'http://localhost:4000';
export const BACKEND_API={
    CRYPTO_URL:`${URL}/cryptos`,
    CURRENCIES_URL:`${URL}/currencies`
}

