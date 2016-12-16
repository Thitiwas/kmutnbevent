<template>
<div id="go">
  <div class="foot">
    <button>Go to main</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'go',
  props: ['events', 'like', 'idFacebook', 'login'],
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style>
.foot {
    /*position: fixed;*/
}
</style>
