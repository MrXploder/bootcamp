function callback(mensaje) {
  console.log(mensaje);
}

const esperameUnPoco = setTimeout(function () {
  callback("ahora si estoy disponible");
}, 3000);

// cosa numero 2

// coosa numero 3

/// etc

//////////////////////// otro ejemplo de callbacks

// todo este concepto se llama ciudadano de primera categoria
function log() {
  console.log("hola");
}

// function invokation
log();

// let name = "";

setTimeout(log, 3000);

/////////////////////////////////////////

const log = () => console.log("hola mundo");

setTimeout(log, 3000);

//////////////////////////////////////////////

const Users = []; // Admins + Owners
const List = document.getElementById("list"); // ul : ol

const fetchOwners = (callback) => {
  return setTimeout(callback, 1000);
};

const fetchAdmins = (callback) => {
  return setTimeout(callback, 2000);
};

fetchAdmins((admins) => {
  Users = admins;
  // Users.forEach((user) => {
  //   // solo es un ejemplo, no es codigo valido
  //   // solo para ejemplificar que estoy agregando elementos a la lista
  //   List.appendChild(`<li>${user.name}</li>`);
  // });
});

fetchOwners((owners) => {
  Users = owners;
});

fetchAdmins((admins) => {
  fetchOwners((owners) => {});
});
////////////////////////

const delay = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("exito");
  }, 3000);
});

//thenAble
delay.then((texto) => {
  console.log(texto);
});

////////////////////////////

const fetchAdmins = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([{ name: "Luis" }, { name: "Viviana" }]);
  }, 1000);
});

const fetchOwners = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([{ name: "Vanessa" }, { name: "Cristobal" }]);
  }, 1000);
});

// throw

fetchAdmins
  .then((admins) => {
    console.log({ admins });
  })
  .catch((error) => {})(
  //////////////////

  // async - await

  // async function miApp(){

  // }

  // miApp();

  async function () {
    try {
      const Admins = await fetchAdmins();
      const Owners = await fetchOwners();
    } catch (error) {
      console.error(error);
    }
  }
)();

const todo = await Promise.all([fetchAdmins, fetchOwners]).then(
  ([Admins, Owners]) => {
    console.log({ Admins, Owners });
  }
);

//////////////////////////////////

function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const miIterador = generator();

miIterador.next(); // 1
miIterador.next(); // 2
