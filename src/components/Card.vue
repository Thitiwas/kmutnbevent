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
          <div class="modal is-active" v-if="statusdetail">
            <div class="modal-background"></div>
            <div class="modal-card">
              <header class="modal-card-head">
                <p class="modal-card-title">details Event</p>
                <button class="delete" @click="showdetail2()"></button>
              </header>
              <section class="modal-card-body">
                {{n.name}}<br><br><br>
                {{n.location}}<br><br>
                {{n.date}}<br><br><br>
                {{n.contact}}<br><br><br>
                {{n.detail}}<br><br><br>
              </section>
            </div>
          </div>
          <a class="button is-success" @click="showdetail1()">Detail</a>
          <a class="button is-info"  @click="like(n.id)">สนใจ</a>
          <!-- <a class="button is-info" v-if="!checkLike(n.user)" @click="disLike(n.id)">ไม่สนใจ</a> -->
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
  props: ['events', 'like', 'idFacebook'],
  data () {
    return {
      statusdetail: false
    }
  },
  methods: {
    showdetail1 () {
      this.statusdetail = true
    },
    showdetail2 () {
      this.statusdetail = false
    }
    // checkLike (user) {
    //   var vm = this
    //   var userData = Object.keys(user).map(key => user[key])
    //   console.log(userData)
    //   var x = userData.find(user => user.idFacebook === vm.idFacebook)
    //   return (x === undefined)
    // }
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

.colum1 {
  font-family: 'Vollkorn', serif;
  width: 100%;
  float: left;
  padding-left: 10%;
  padding-right: 10%;
}
.card {
  width: 100%

}
</style>
