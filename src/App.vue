<template>
  <div id="app">
    <Main/>
    <About/>
    <Projects/>
    <Contact/>
  </div>
</template>

<script>
import Main from './components/Main'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default {
  name: 'App',
  components: {
    Main,
    About,
    Projects,
    Contact
  }
}
</script>

<style>

</style>
