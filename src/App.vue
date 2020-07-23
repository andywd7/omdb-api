<template>
  <div id="app">
    <div class="container-fluid">
      <nav class="navbar navbar-light bg-light">
        <router-link
          class="navbar-brand"
          :to="{ name: 'home' }"
        >
          Home
        </router-link>
      </nav>
      <router-view />
    </div>
  </div>
</template>
