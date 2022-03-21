import mongoose from 'mongoose'

const getDbString = () => {
  const { DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env

  return `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster-1.cx7np.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
}

export const initializeDatabase = async () => {
  const db = await mongoose.connect(getDbString(), {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  return db
}
