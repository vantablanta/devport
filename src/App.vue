<template>
  <div id="app">
    <Main/>
    <Projects/>
    <Contact/>
  </div>
</template>

<script>
import Main from './components/Main'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default {
  name: 'App',
  components: {
    Main,
    Projects,
    Contact
  }
}
</script>

<style>

</style>
