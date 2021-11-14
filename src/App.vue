<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/users">Users</router-link>
  </div>
  <Toast />
  <router-view/>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import { useToast } from "primevue/usetoast";
import { useStore } from 'vuex'
import { State } from "./store";
import { CustomEvent } from './types/custom-event'

export default defineComponent({
  setup() {
    const toast = useToast();
    const store = useStore<State>()
    const showEvent = (event: CustomEvent) => {
      toast.add({severity: event.type, detail: event.message, life: 3000});
    }
    watch(store.state.eventsLog, (log) => {
      if (log.length) {
        showEvent(log[0])
      }
    })

    return {
      showEvent
    }
  }
})
</script>

<style lang="scss">
body {
  background-color: #F3F6FC;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  text-decoration: none;
}
hr {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  &.dashed {
    border-top: 3px dashed #bbb;
  }
}


#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
