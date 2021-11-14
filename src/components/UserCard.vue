<template>
  <Card>
    <template #title>
      {{ user.login }}
    </template>
    <template #content>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt!
    </template>
    <template #footer>
      <Button 
        icon="pi pi-times"
        @click="$emit('delete', user.id)"
        label="Delete"
        class="p-button-danger" 
      />
    </template>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UserCard',
  props: {
    user: {
      type: Object,
      required: true
    }
  }
});
</script>

<style scoped lang="scss">
  .p-card {
    width: 250px;
  }
</style>
