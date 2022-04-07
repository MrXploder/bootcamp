class Propietario {
  #nombre;

  constructor(nombre, direccion, telefono) {
    this.#nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
  }

  datosPropietario() {
    return {
      nombre: this.#nombre,
      direccion: this.direccion,
      telefono: this.telefono,
    };
  }
}

class Animal extends Propietario {
  constructor(
    tipo,
    nombrePropietario,
    direccionPropietario,
    telefonoPropietario
  ) {
    super(nombrePropietario, direccionPropietario, telefonoPropietario);
    this.tipo = tipo;
  }
}

class Mascota extends Animal {
  constructor(
    nombre,
    enfermedad,
    tipoAnimal,
    nombrePropietario,
    direccionPropietario,
    telefonoPropietario
  ) {
    super(
      tipoAnimal,
      nombrePropietario,
      direccionPropietario,
      telefonoPropietario
    );
    this.nombre = nombre;
    this.enfermedad = enfermedad;
  }
}

$(document).ready(() => {
  // Aqui podemos ejecutar nuestra aplicacion

  const $propietario = $("#propietario");
  const $telefono = $("#telefono");
  const $direccion = $("#direccion");
  const $nombreMascota = $("#nombreMascota");
  const $tipo = document.getElementById("tipo")
  const $enfermedad = $("#enfermedad");

  const $btnAgregar = $("#agregar");
  const $resultado = $("#resultado");

  $btnAgregar.click(($event) => {
    console.log($tipo, Object.getPrototypeOf($tipo), $tipo.value)
    $event.preventDefault();

    const mascota = new Mascota(
      $nombreMascota.val(),
      $enfermedad.val(),
      $tipo.value,
      $propietario.val(),
      $direccion.val(),
      $telefono.val()
    );
    const propietario = mascota.datosPropietario();

    $resultado.html(`
      <ul>
        <li> El nombre del dueño es ${propietario.nombre}. El domicilio es: ${propietario.direccion}, y el numero telefonico de contacto: ${propietario.telefono}</li>
        <li> El tipo de animal es: ${mascota.tipo}, mientras que el nombre de la mascota es: ${mascota.nombre} y la enfermedad es ${mascota.enfermedad}</li>
      </ul>
    `);
  });
});
