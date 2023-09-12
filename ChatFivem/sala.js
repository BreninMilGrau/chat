const firebaseConfig = {
    apiKey: "AIzaSyBlfgU-_kUTPDzd_0HWMdHRJOCxsNb5--g",
    authDomain: "chatonline-1518e.firebaseapp.com",
    databaseURL: "https://chatonline-1518e-default-rtdb.firebaseio.com",
    projectId: "chatonline-1518e",
    storageBucket: "chatonline-1518e.appspot.com",
    messagingSenderId: "952716198773",
    appId: "1:952716198773:web:c8012fcd6015e621d3893c",
    measurementId: "G-ZHW1T27X72"
}

firebase.initializeApp(firebaseConfig);

inicializar();

function inicializar() {
    const nomeUsuario = localStorage.getItem("nomeUsuario");
    console.log(nomeUsuario);
    document.getElementById("nomeUsuario").textContent = "Olá, " + nomeUsuario

}