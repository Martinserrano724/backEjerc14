import 'dotenv/config' // inporta el objeto proces desde nodemodels
export const MONGODB_URI =  process.env.MONGODB_URI || 'mongodb://localhost:27017/recetas_db';// uri es url

