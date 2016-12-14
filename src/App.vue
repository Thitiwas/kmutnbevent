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
    <div class="nav-center">
    <br>
      <input class="input" type="text" placeholder="Find a event">
      <button class="button">
        Search
      </button>
    </div>
    <div class="nav-right">
      <span class="nav-item">
        <div v-if="authorized" @click="logout()" class="logout"><a><B class="sizelogout" >Logout</B></a></div>
        <div v-else="authorized" @click="login()" class="login"><a><B class="cololorfb" >FB</B> <B class="sizelogout">login<B></a></div>
      </span>
    </div>
  </nav>
  <!-- endheader -->
  <br>
  <Card :events = "events" ><Card>
</div>
</template>

<script>
/* global FB */
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
      events: []
    }
  },
  methods: {
    getProfile () {
      let vm = this
      FB.api('/me', function (response) {
        console.log(response)
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
    },
    statusChangeCallback (response) {
      let vm = this
      vm.ready = true
      console.log('statusChangeCallback')
      console.log(response)
      if (response.status === 'connected') {
        vm.authorized = true
        vm.getProfile()
      } else if (response.status === 'not_authorized') {
        vm.authorized = false
      } else {
        vm.authorized = false
      }
    }
  },
  mounted () {
    let vm = this
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
    this.$http.get('https://kmutnbevent.firebaseio.com/events.json').then(function (res) {
      var arrData = Object.keys(res.body).map(key => res.body[key])
      arrData.forEach(item => {
        this.events.push(item)
      })
    })
  }
}
</script>

<style>
#app {
  /*background-image: url('./assets/backg.jpg');*/
  /*background-size: cover;*/
  height: 100vh;
  /*background-color: #eeeeee;*/
}
.logout {
  font-family: 'Yrsa', serif;
  font-size: 20px;
}
.nav_has-shadow {
  width: 100%;
  background-color: #00d1b2;
  height: 7%;
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
  font-family: 'Yrsa', serif;
  padding-top: 10px;
  padding-left: 10px;
}
.orange {
  font-family: 'Yrsa', serif;
  color: #ff9800;
  font-size: 25px;
}
.black {
  font-family: 'Yrsa', serif;
  color: black;
  font-size: 18px;
}
.nav {
  border-bottom: 2px solid #00d1b2;
  margin-bottom: 5vh;
}
.notification {
  margin-left:15%;
  margin-right: 15%;
  height: 20%;
}
.cololorfb {
  color: #039be5;
  font-family: 'Yrsa', serif;
  font-size: 25px;
}
.sizelogout {
  color: black;
  font-family: 'Yrsa', serif;
  font-size: 18px;
}
</style>
