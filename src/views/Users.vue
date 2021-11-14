<template>
  <div>
    <ProgressSpinner v-if="globalLoading" class="spinner"/>
    <div v-else class="flex flex-wrap justify-content-center">
      <transition-group name="list">
        <UserCard
          v-for="user in users"
          :key="user.id" 
          :user="user"
          class="list-item mr-2 mb-2"
          @delete="deleteUser"
        />
      </transition-group>
    </div>
  </div>
</template>

<script lang="ts">
import { State } from '@/store';
import { computed, defineComponent, onMounted} from 'vue'
import { useStore } from 'vuex'
import UserCard from '@/components/UserCard.vue'

export default defineComponent({
  name: 'Users',
  components: {
    UserCard
  },
  setup () {
    const store = useStore<State>()
    onMounted(() => store.dispatch('loadUsers'))

    return {
      users: computed(() => store.state.users),
      globalLoading: computed(() => store.state.loading),
      deleteUser: (id: number) => store.dispatch('deleteUser', id)
    }
  }
});
</script>
<style scoped lang="scss">
  .list-leave-active {
    transition: all 0.3s;
  }
  .list-leave-to {
    opacity: 0;
    transform: translateX(20px);
  }
</style>
