import axios from "axios"
import { PARENT_ONLY_USERNAME, PARENT_ONLY_PASSWORD } from "react-native-dotenv"
const parentonly = axios.create({
  baseURL: "https://www.connectorsupplier.com/",
  auth: { username: PARENT_ONLY_USERNAME, password: PARENT_ONLY_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
