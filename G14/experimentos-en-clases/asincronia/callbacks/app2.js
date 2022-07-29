
function DatosUsuario(cb) {
  setTimeout(() => {
    cb()
  }, 1000)
}

function Institucion(cb) {
  setTimeout(() => {
    cb()
  }, 2000)
}

function LibrosQueDebe(cb) {
  setTimeout(() => {
    cb()
  }, 2000)
}

function E(cb) {
  setTimeout(() => {
    cb()
  }, 2000)
}

DatosUsuario(() => {
  console.log("Termino A")
  Institucion(() => {
    console.log("Termino B")
    LibrosQueDebe(() => {
      console.log("Termino C")
      E(() => {
        console.log("Termino E")
      })
    })
  })
})

