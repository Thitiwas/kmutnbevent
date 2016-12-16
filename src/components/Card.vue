<template>
<div id="Card">

  <!-- startcolum1 -->
  <div class="columhead1" v-for="n in events">
    <div class="card">
      <br>
      <center><img :src="n.picture" class="imgevnt" width="95%"></center>
      <center>
      <h2 class="title is-5 textred ">{{n.name}}</h2>
      <h5 class="subtitle is-6 ">วันที่ {{n.date}}</h5>
      <h5 class="subtitle is-6 ">สถานที่ {{n.location}}<br>Google map : <a target="_blank" :href="n.map"><a>{{n.map}} </h5>
          <div class="modal is-active" v-if="statusdetail">
            <div class="modal-background"></div>
            <div class="modal-card">
              <header class="modal-card-head">
                <p class="modal-card-title">{{event.name}}</p>
                <button class="delete" @click="showdetail2()"></button>
              </header>
              <section class="modal-card-body">
                <div class="contentdetail">
                {{event.location}}<br><br>
                {{event.date}}<br><br><br>
                {{event.contact}}<br><br><br>
                {{event.detail}}<br><br><br>
              </div>
              </section>
            </div>
          </div>
          <a class="button is-info" v-if="!checkLike(n.id)" @click="like(n.id)">สนใจ</a>
          <a class="button is-info" v-if="checkLike(n.id)"  @click="disLike(n.id)">ไม่สนใจ</a>
          <a class="button is-success" @click="showdetail1(n.id)">รายละเอียด</a>
          <p class="setsizelike"> ผู้สนใจ {{countLike(n.id)}} คน </p>
          </center><br>
          <!-- <a class="button is-info" v-if="!checkLike(n.user)" @click="disLike(n.id)">ไม่สนใจ</a> -->
        </div>
        <br>
      </div>
  <!-- endcolum1 -->

</div>
</template>

<script>
export default {
  name: 'Card',
  props: ['events', 'like', 'disLike', 'users', 'idFacebook', 'login'],
  data () {
    return {
      event: {},
      statusdetail: false
    }
  },
  methods: {
    showdetail1 (id) {
      var event = this.events.find(event => event.id === id)
      this.event = event
      this.statusdetail = true
    },
    showdetail2 () {
      this.statusdetail = false
    },
    checkLike (id) {
      var vm = this
      var user = this.users.find(user => user.eventId === id && user.idFacebook === vm.idFacebook)
      return user !== undefined
    },
    countLike (id) {
      var count = 0
      this.users.forEach(user => {
        if (user.eventId === id) {
          count++
        }
      })
      return count
    }
    // checklogin () {
    //   if (this.idFacebook === '') {
    //     login ()
    //   }
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Card {
  padding-top: 2vh;
  height: 100%;
  background-color: #e0e0e0;
}
.card {
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  font-family: 'Kanit', sans-serif;
  /*padding-left:15%;
  padding-right:15%;*/
}
.setsizelike {
  font-size: 18px;
}
</style>
