<template>
<div id="Card">

  <!-- startcolum1 -->
  <div class="columhead1" v-for="n in 4">
    <div class="colum1">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="../assets/meeting.jpg">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-32x32">
                <img src="../assets/logo.png">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-5">John Smith</p>
              <p class="subtitle is-6">@johnsmith</p>
            </div>
          </div>

          <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a href="#">@bulmaio</a>.
            <a href="#">#css</a> <a href="#">#responsive</a>
            <br>
            <small>11:09 PM - 1 Jan 2016</small>
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
