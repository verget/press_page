import { RawUser, User } from "@/types/user"
import { AxiosResponse } from "axios"

export const mapUsers = (response: AxiosResponse<RawUser[]>): User[] => {
  return response.data.map(({ id, login }) => {
    return {
      id,
      login
    }
  })
}