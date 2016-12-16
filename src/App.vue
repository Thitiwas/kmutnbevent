<template>
  <div id="app">
  <!-- startheader -->
  <nav class="nav_has-shadow">
  </nav>
  <nav class="nav">
    <div class="nav-left">
      <a class="brand" href="#">
        <strong class="orange">KMUTNB</strong> <strong class="black">Event</strong>
      </a>
    </div>
    <br>
    <!-- <div class="nav-center">
    <br>
      <input class="input" type="text" placeholder="Find a event">
      <button class="button">
        Search
      </button>
    </div> -->
    <div class="nav-right">
      <span class="nav-item">
        <div v-if="authorized" @click="logout()" class="logout"><a><B class="sizelogout" >Logout</B></a></div>
        <div v-else="authorized" @click="login()" class="login"><a><B class="cololorfb" >FB</B> <B class="sizelogout">login<B></a></div>
      </span>
    </div>
  </nav>
  <!-- endheader -->
  <Card :events = "events" :like="like" :dis-like="disLike" :users="users" :id-facebook="idFacebook" :login="login" ><Card>
</div>
</template>

<script>
/* global FB */
import firebase from 'firebase'
var config = {
  apiKey: 'AIzaSyBc4O3qrb1xoIZN4jTmWmGvAYWCxvE2x-A',
  authDomain: 'kmutnbevent.firebaseapp.com',
  databaseURL: 'https://kmutnbevent.firebaseio.com',
  storageBucket: 'kmutnbevent.appspot.com',
  messagingSenderId: '1024101975238'
}
firebase.initializeApp(config)
var Events = firebase.database().ref('events')
var Users = firebase.database().ref('users')
import Card from './components/Card.vue'
export default {
  name: 'app',
  components: {
    Card
  },
  data () {
    return {
      profile: {},
      ready: false,
      authorized: false,
      events: [],
      idFacebook: '',
      users: []
    }
  },
  methods: {
    getProfile () {
      let vm = this
      FB.api('/me', function (response) {
        vm.idFacebook = response.id
        console.log(vm.idFacebook)
        vm.$set(vm, 'profile', response)
      })
    },
    login () {
      let vm = this
      FB.login(function (response) {
        vm.statusChangeCallback(response)
      }, {scope: 'publish_actions'})
    },
    logout () {
      let vm = this
      FB.logout(function (response) {
        vm.statusChangeCallback(response)
      })
      this.idFacebook = ''
    },
    statusChangeCallback (response) {
      let vm = this
      vm.ready = true
      console.log('statusChangeCallback')
      if (response.status === 'connected') {
        vm.authorized = true
        vm.getProfile()
      } else if (response.status === 'not_authorized') {
        vm.authorized = false
      } else {
        vm.authorized = false
      }
    },
    like (id) {
      var vm = this
      if (vm.idFacebook !== '') {
        Users.push({
          eventId: id,
          idFacebook: vm.idFacebook
        })
      } else {
        this.login()
      }
    },
    disLike (id) {
      var vm = this
      var user = this.users.find(user => user.eventId === id && user.idFacebook === vm.idFacebook)
      firebase.database().ref('users/' + user.id).remove()
    }
  },
  mounted () {
    var vm = this
    Events.on('child_added', function (eventNow) {
      var item = eventNow.val()
      item.id = eventNow.key
      vm.events.push(item)
    })
    Events.on('child_removed', function (eventNow) {
      var id = eventNow.key
      var index = vm.events.findIndex(event => event.id === id)
      vm.events.splice(index, 1)
    })
    Events.on('child_changed', function (eventNow) {
      var id = eventNow.key
      var event = vm.events.find(events => events.id === id)
      event.name = eventNow.val().name
      event.location = eventNow.val().location
      event.date = eventNow.val().date
      event.contact = eventNow.val().contact
      event.detail = eventNow.val().detail
      event.picture = eventNow.val().picture
    })
    Users.on('child_added', function (eventNow) {
      var item = eventNow.val()
      item.id = eventNow.key
      vm.users.push(item)
    })
    Users.on('child_removed', function (eventNow) {
      var id = eventNow.key
      var index = vm.users.findIndex(user => user.id === id)
      vm.users.splice(index, 1)
    })
    window.fbAsyncInit = () => {
      FB.init({
        appId: '1341859152512597',
        cookie: true,
        xfbml: true,
        version: 'v2.8'
      })
      FB.getLoginStatus(function (response) {
        vm.statusChangeCallback(response)
      })
    }
    // this.$http.get('https://kmutnbevent.firebaseio.com/events.json').then(function (res) {
    //   var arrData = Object.keys(res.body).map(key => res.body[key])
    //   arrData.forEach(item => {
    //     this.events.push(item)
    //   })
    // })
  }
}
</script>

<style>

#app {
  /*background-image: url('./assets/backg.jpg');*/
  /*background-size: cover;*/

}
.logout {
  font-family: 'Amaranth', sans-serif;
  font-size: 20px;
}
.nav_has-shadow {
  width: 100%;
  background-color: #3273dc;
  height: 5vh;
}
.nav-center {
  align-items: baseline;
  padding-top: 12px;
  padding-right: 30px;
}
.nav-right {
    padding-right: 10;
}
.brand {
  font-family: 'Amaranth', sans-serif;
  padding-top: 10px;
  padding-left: 10px;
}
.orange {
  font-family: 'Amaranth', sans-serif;
  color: #ff9800;
  font-size: 18px;
}
.black {
  font-family: 'Amaranth', sans-serif;
  color: black;
  font-size: 16px;
}
.nav {
  border-bottom: 2px solid #3273dc;
}
.notification {
  margin-left:15%;
  margin-right: 15%;
  height: 20%;
}
.cololorfb {
  color: #039be5;
  font-family: 'Amaranth', sans-serif;
  font-size: 16px;
}
.sizelogout {
  color: black;
  font-family: 'Amaranth', sans-serif;
  font-size: 16px;
}
</style>
