<template>
<div id="Card">

  <!-- startcolum1 -->
  <div class="columhead1" v-for="n in events">
    <div class="colum1">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img :src="n.picture">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-32x32">
                <img :src="n.picture">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-5">{{n.name}}</p>
              <p class="subtitle is-6">{{n.location}}</p>
            </div>
          </div>

          <div class="content">
          {{n.detail}}
          <br>
            <small>{{n.date}}</small>
          </div>
        </div>
      </div>
      <br><br>
    </div>
  </div>
  <!-- endcolum1 -->

</div>
</template>

<script>
export default {
  name: 'Card',
  props: ['events'],
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.columhead1 {
  padding-left: 10%;
  float: left;
  width: 45%;
}


/*.columhead2 {
  float: right;
  width: 45%;
  padding-right: 5%;

}*/

.card {
  width: 100%
}
</style>
