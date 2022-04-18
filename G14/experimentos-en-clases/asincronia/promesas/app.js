const usuariosFicticios = [{name: "Jorge", id: 1}, {name: "Esteban", id: 2}]

function APIUsuarios() {
  return new Promise((resolve, reject) => {
    const respuesta = Boolean(Math.round(Math.random()));

    // respuesta es Boolean por lo qeu no es necesario
    // comparar con ===
    if (respuesta) {
      resolve(usuariosFicticios)
    } else {
      reject("Se callo el internet")
    }
  })
}

function APIInstitucion(idUsuario) {
  return new Promise((resolve, reject) => {
    const respuesta = Boolean(Math.round(Math.random()));

    // respuesta es Boolean por lo qeu no es necesario
    // comparar con ===
    if (respuesta) {
      resolve([])
    } else {
      reject("Se callo el internet")
    }
  })
} 


APIUsuarios()
// cuando le va bien
  .then((response) => {
    console.log("Me fue bien, auqi estan los usuarios")
    console.log(response)
    return APIInstitucion(response)
  })
  .then(() => {

  })


  // mostrar los datos en pantalla



