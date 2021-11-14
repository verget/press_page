<template>
  <div>
    <div class="image-container">
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
    <hr class="dashed">
    <div class="button-container">
      <router-link to="/users">
        <Button 
          icon="pi pi-user"
          label="Go to users"
          class="p-button-primary p-button-lg mt-3"
        />
      </router-link>
    </div>
  </div>
</template>
