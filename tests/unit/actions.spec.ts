import { EventTypes } from '@/types/custom-event'
import { actions } from '../../src/store'
import flushPromises from 'flush-promises'


const { deleteUser, handleEvent, loadUsers } = actions

jest.mock('@/services/user.ts', () => {
  return {
    getUsers: jest.fn().mockResolvedValue([{
      id: 1,
      login: 'Sam'
    }])
  }
})

describe('actions', () => {

  it('loadUsers', async () => {
    const commit = jest.fn()
    const dispatch = jest.fn()
    loadUsers({ commit, dispatch })
    await flushPromises()
    expect(commit).toHaveBeenCalledTimes(3)
    expect(commit).toHaveBeenNthCalledWith(2, "SET_USERS", [{
      id: 1,
      login: 'Sam'
    }])
    expect(commit).toHaveBeenLastCalledWith("SET_LOADING", false)
  })

  it('deleteUser', () => {
    const commit = jest.fn()
    deleteUser({ commit }, 1)
    expect(commit).toHaveBeenCalledWith("DELETE_USER", 1)
  })

  it('handleEvent', () => {
    const commit = jest.fn()
    const fakeEvent = {
      type: EventTypes.error,
      message: 'Test'
    }
    handleEvent({ commit }, fakeEvent)
    expect(commit).toHaveBeenCalledWith("ADD_EVENT", fakeEvent)
  })
})
