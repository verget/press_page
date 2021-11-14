import { CustomEvent, EventTypes } from '@/types/custom-event'
import { User } from '@/types/user'
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store, Commit, Dispatch } from 'vuex'
import { getUsers } from '../services/user'
export interface State {
  loading: boolean,
  users: User[],
  eventsLog: CustomEvent[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const mutations = {
  SET_USERS(state: State, data: User[]): void {
    state.users = data
  },
  DELETE_USER(state: State, id: number): void {
    state.users = state.users.filter((element: User) => element.id !== id)
  },
  ADD_EVENT(state: State, data: CustomEvent): void {
    state.eventsLog.unshift(data)
  },
  SET_LOADING(state: State, value: boolean): void {
    state.loading = value
  }
}

export const actions = {
  async loadUsers({ commit, dispatch }: { commit: Commit, dispatch: Dispatch }): Promise<void> {
    commit('SET_LOADING', true)
    try {
      const users = await getUsers({ per_page: 10 })
      commit('SET_USERS', users)
    } catch (error) {
      console.log(error)
      dispatch('handleEvent', { type: EventTypes.error, message: error })
    }
    commit('SET_LOADING', false)
  },
  deleteUser({ commit }: { commit: Commit }, id: number): void {
    commit('DELETE_USER', id)
  },
  handleEvent({ commit }: { commit: Commit }, event: CustomEvent): void {
    commit('ADD_EVENT', event)
  }
}


export const store = createStore<State>({
  state: {
    loading: false,
    users: [],
    eventsLog: []
  },
  mutations,
  actions
})

export function useStore(): Store<State> {
  return baseUseStore(key)
}