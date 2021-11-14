import { EventTypes } from '@/types/custom-event'
import { mutations, State } from '../../src/store'

const { SET_LOADING, SET_USERS, DELETE_USER, ADD_EVENT } = mutations

describe('mutations', () => {
  let state: State
  const fakeUser = {
    id: 1,
    login: 'Sam'
  }
  const fakeEvent = {
    type: EventTypes.error,
    message: 'Test'
  }
  const fakeEvent2 = {
    type: EventTypes.error,
    message: 'Test2'
  }
  beforeEach(() => {
    state = {
      loading: false,
      users: [],
      eventsLog: []
    }
  })

  it('SET_LOADING', () => {
    SET_LOADING(state, true)
    expect(state.loading).toBeTruthy()
  }),
    
  it('SET_USERS', () => {
    SET_USERS(state, [fakeUser])
    expect(state.users).toContain(fakeUser)
  })

  it('DELETE_USER', () => {
    SET_USERS(state, [fakeUser])
    expect(state.users).toContain(fakeUser)
    DELETE_USER(state, fakeUser.id)
    expect(state.users).not.toContain(fakeUser)
  })

  it('ADD_EVENT', () => {
    ADD_EVENT(state, fakeEvent)
    ADD_EVENT(state, fakeEvent2)
    expect(state.eventsLog[0]).toBe(fakeEvent2)
  })
})