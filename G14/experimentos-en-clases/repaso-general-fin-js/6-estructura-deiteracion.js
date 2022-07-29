let alumnos = ["Esteban", "Ariel", "Catalina", "Daniel"];

// imperativo => como
for (let contador = 0; contador < alumnos.length; contador++){
  console.log(alumnos[contador])
}

// abreviacion
for (alumno of alumnos) {
  console.log(alumno)
}

// declarativo => que
alumnos.forEach(alumno => {
  console.log(alumno)
})
