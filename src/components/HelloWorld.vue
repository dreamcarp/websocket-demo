<template>
  <div class="hello">
    {{message}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      message: {}
    }
  },
  computed: {
  },
  methods: {
    fetchInfo () {
      let self = this
      let ws = new WebSocket('ws://localhost:5003')
      ws.onmessage = function (event) {
        self.message = JSON.parse(event.data)
        console.log(self.message)
      }
    }
  },
  async mounted () {
    await this.fetchInfo()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
