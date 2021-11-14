import { QueryParams } from "@/types/query-params"
import { User } from "@/types/user"
import { mapUsers } from "@/utils/mapper"
import { http } from "./http"

export const getUsers = (params: QueryParams = {}): Promise<User[]> => {
  return http<User[]>({
    url: 'https://api.github.com/users',
    method: 'get',
    params
  }, mapUsers)
}