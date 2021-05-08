<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="#">Login App</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
                <li class="nav-item">
                  <router-link  class="nav-item" tag="li" :to="{ name: 'login' }"> <a class="nav-link"> Login</a></router-link>
                </li>
                <li class="nav-item">
                 <router-link  class="nav-item" tag="li" :to="{ name: 'welcome' }"> <a class="nav-link"> Welcome</a></router-link>
                </li>
        </ul>
      </div> 
    </nav>
        <main>
            <transition name="fade">
              <router-view></router-view>
            </transition>
        </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to ',
      login: false
    }
  }
}
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.slide-fade-enter-active {
    transition: all 2s ease;
  }
  .slide-fade-leave-active {
    transition: all 2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }

</style>
