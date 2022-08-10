<script>
//import MainMenu from "./components/MainMenu.vue";

export default {
  name: "App",
  components: {},
  data: function () {
    return {
      connection: null,
    };
  },
  created() {
    this.connection = new WebSocket("ws://localhost:2345");

    this.connection.onopen = function (e) {
      console.log(e);
      alert("[open] Conexión establecida");
      alert("Enviando al servidor");
      this.connection.send("Mi nombre es Rocio");
    };

    this.connection.onmessage = function (event) {
      alert(`[message] Datos recibidos del servidor: ${event.data}`);
    };

    this.connection.onclose = function (event) {
      if (event.wasClean) {
        alert(
          `[close] Conexión cerrada limpiamente, código=${event.code} motivo=${event.reason}`
        );
      } else {
        // ej. El proceso del servidor se detuvo o la red está caída
        // event.code es usualmente 1006 en este caso
        alert("[close] La conexión se cayó");
      }
    };

    this.connection.onerror = function (error) {
      alert(`[error] ${error.message}`);
    };
  },
  methods: {
    sendMessage(message) {
      console.log(this.connection);
      this.connection.send(message);
    },
  },
};
</script>

<template>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-y: scroll;
}
</style>
