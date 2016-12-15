<template>
<div id="Card">

  <!-- startcolum1 -->
  <div class="columhead1" v-for="n in events">
    <div class="card">
      <br>
      <center><img :src="n.picture" class="imgevnt" width="805px"></center>
      <center>
        <br>
      <h2 class="title is-5 textred ">{{n.name}}</h2>
      <h5 class="subtitle is-6 ">วันที่ {{n.date}}</h5>
      <h5 class="subtitle is-6 ">สถานที่ {{n.location}}</h5>
          <div class="modal is-active" v-if="statusdetail">
            <div class="modal-background"></div>
            <div class="modal-card">
              <header class="modal-card-head">
                <p class="modal-card-title">{{n.name}}</p>
                <button class="delete" @click="showdetail2()"></button>
              </header>
              <section class="modal-card-body">
                <div class="contentdetail">
                {{n.location}}<br><br>
                {{n.date}}<br><br><br>
                {{n.contact}}<br><br><br>
                {{n.detail}}<br><br><br>
              </div>
              </section>
            </div>
          </div>

          <a class="button is-success" @click="showdetail1()">รายละเอียด</a>
          <a class="button is-info"  @click="like(n.id)">สนใจ</a></center>
          <br>
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
  props: ['events', 'like', 'idFacebook', 'login'],
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
    // checklogin () {
    //   if (this.idFacebook === '') {
    //     login ()
    //   }
    // }
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
.imgevnt {
}
</style>
