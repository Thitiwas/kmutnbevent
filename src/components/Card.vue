<template>
<div id="Card" style="height: 100vu">

  <!-- startcolum1 -->
  <div class="columhead1" v-for="n in events" style="height: 100vu" >
    <div class="card" style="height: 100vu">
      <br>
      <center><img :src="n.picture" class="imgevnt" width="95%"></center>
      <center>
      <br>
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
                <img :src="event.picture">
                <br><br>
                <h1>location <br><br> {{event.location}}</h1>
                <hr>
                <h1>map <br><br> <a target="_blank" :href="event.map">{{event.map}}</a>
                <hr>
                <h1>date     <br><br> {{event.date}}</h1>
                <hr>
                <h1>contact  <br><br> {{event.contact}}</h1>
                <hr>
                <h1>detial   <br><br> {{event.detail}}</h1>
                <hr>
                <h1>          {{countLike(n.id)}} คน สนใจสิ่งนี้</h1>
              </section>
            </div>
          </div>
          <a class="button is-info" v-if="!checkLike(n.id)" @click="like(n.id)">สนใจ</a>
          <a class="button is-info" v-if="checkLike(n.id)"  @click="disLike(n.id)">ไม่สนใจ</a>
          <a class="button is-success" @click="showdetail1(n.id)">รายละเอียด</a>
          <p class="setsizelike">{{countLike(n.id)}} คน สนใจกิจกรรมนี้  </p>
          </center><br>
          <!-- <a class="button is-info" v-if="!checkLike(n.user)" @click="disLike(n.id)">ไม่สนใจ</a> -->
        </div>
      </div>
  <!-- endcolum1 -->
  <!--BACK TO TOP STARTS-->
  <a rel="nofollow" style="display:scroll;position:fixed;bottom:10px;right:1px;" href="#" title="Back to Top"><img width="35vh" src="http://hoithao.kontum.udn.vn/images/gototop.png"/></a><!--mybloggersworld.com-->
  <!--BACK TO ENDS-->
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Card {
}
.card {
  margin-top: 5vh;
  width: 40%;
  margin-left: 5%;
  margin-right: 5%;
  font-family: 'Kanit', sans-serif;
  float: left;
  border-radius: 15px;
}
.headcolum1 {
}
.setsizelike {
  font-size: 18px;
}
.modal-card-body {
  text-align: left
}

</style>
