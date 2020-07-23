<template>
  <div id="app">
    <div class="container-fluid">
      <div id="nav">
        <router-link :to="{ name: 'home' }">
          Home
        </router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>
