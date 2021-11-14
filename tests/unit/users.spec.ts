import { mount } from "@vue/test-utils"
import { createStore } from "vuex"
import Users from "@/views/Users.vue"
import ProgressSpinner from "primevue/progressspinner"
import Button from 'primevue/button'
import Card from 'primevue/card'

const state = {
  loading: false,
  users: [
    {
      id: 1,
      login: 'Sam'
    }
  ],
  eventsLog: []
}

const actions = {
  loadUsers: jest.fn(),
  deleteUser: jest.fn()
}

const store = createStore({
  actions,
  state
})

describe("Users page", () => {
  const wrapper = mount(Users, {
    global: {
      provide: {
        store: store
      },
      components: {
        'ProgressSpinner': ProgressSpinner,
        'Card': Card,
        'Button': Button
      }
    },
  })
  
  it('should be defined', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('dispatch user loading', () => {
    expect(actions.loadUsers).toHaveBeenCalled()
  })

  it('gets users from the store', () => {
    expect(wrapper.vm.users).toContainEqual({
      id: 1,
      login: 'Sam'
    })
  })

  it('calls correct action to delete element', () => {
    wrapper.vm.deleteUser(1)
    expect(actions.deleteUser).toHaveBeenCalled()
  })
})