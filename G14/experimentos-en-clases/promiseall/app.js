function UserData(userId) {
  return fetch(`https://mipaginalindapreciosa.com/api/user/${userId}`).then(
    (response) => response.json()
  );
}

function UserLastConnections(userId) {
  return fetch(
    `https://mipaginalindapreciosa.com/api/user/${userId}/last-connections`
  ).then((response) => response.json());
}

function UserPreferences(userId) {
  return fetch(
    `https://mipaginalindapreciosa.com/api/user/${userId}/preferences`
  ).then((response) => response.json());
}

function UserAtribrutes(userId) {
  return fetch(
    `https://mipaginalindapreciosa.com/api/user/${userId}/atributes`
  ).then((response) => response.json());
}

function cargarTodaLaPagina(
  userData,
  userLastConnections,
  userPreferences,
  userAtributes
) {}

///////////////////////////////////////////
// function init() {
//   //  Mala solucion, no hacer
//   let data;
//   let lastConnections;
//   let preferences;
//   let atributes;

//   UserData(1)
//     .then((userData) => {
//       data = userData;
//       return UserLastConnections(1);
//     })
//     .then((userLastConnections) => {
//       lastConnections = userLastConnections;
//       return UserPreferences(1);
//     })
//     .then((userPreferences) => {
//       preferences = userPreferences;
//       return UserAtribrutes(1);
//     })
//     .then((userAtributes) => {
//       atributes = userAtributes;
//       cargarTodaLaPagina(data, lastConnections, preferences, atributes);
//     });

//   console.log("hola mundo");
// }

// init();

//--------------------------------
//ASINCRONICO EN SERIE

async function init() {
  const userData = await UserData();
  const userLastConnections = await UserLastConnections();
  const userPreferences = await UserPreferences();
  const userAtributes = await UserAtribrutes();

  cargarTodaLaPagina(userData, userLastConnections, userPreferences, userAtributes);
}

init();

//------------------------------
//ASINCRONICO EN PARALELO
// function init() {
//   Promise.all([
//     UserData(),
//     UserLastConnections(),
//     UserPreferences(),
//     UserAtribrutes()
//   ]).then(([userData, userLastConnections, userPreferences, userAtributes]) => {
//     cargarTodaLaPagina(userData, userLastConnections, userPreferences, userAtributes)
//   })
// }

// init();

//-------------------
// ASINCRONICO EN PARALELO CON PROMISES/ASYNCAWAIT
// async function init() {
//   const [userData, userLastConnections, userPreferences, userAtributes] =
//     await Promise.all([
//       UserData(),
//       UserLastConnections(),
//       UserPreferences(),
//       UserAtribrutes(),
//     ]);

//   cargarTodaLaPagina(
//     userData,
//     userLastConnections,
//     userPreferences,
//     userAtributes
//   );
// }

// init();
