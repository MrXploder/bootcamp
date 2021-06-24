(function () {
  /**
   * Un objeto literal es aquel que se crea en el acto explicito,
   * y no por consecuencia de instanciar una clase
   *
   *
   * Instanciar una clase = crear un objeto a partir de una clase = const object = new Class()
   *
   * Los objetos en JS se componen de clave:valor en donde
   *
   * > clave: es el identificador para acceder al valor
   * > valor: puede ser cualquier tipo de dato valido para JS (incluido otro objeto)
   */

  /**
   * Ejemplo de Objeto con propiedades primitivas
   */
  const house = {
    amountOfFloors: 2,
    exteriorColor: "white",
    hasBackyard: true,
  };

  /**
   * Ejemplo de Objeto con propiedades tipo objeto
   */
  const deliveryOrder = {
    address: "some random address #1",
    client: {
      name: "Jhon",
      lastName: "Doe",
    },
  };

  /**
   * Ejemplo de Objeto con metodos
   *
   * Metodo = Funcion
   */
  const bird = {
    size: "small",
    color: "grey",
    tweet() {
      console.log("lalalalal(8)");
    },
  };

  bird.sing();

  /**
   * Ejemplo de Arreglo de Objetos
   */
  const patients = [
    { name: "Jhon", lastName: "Doe" },
    { name: "Jane", lastName: "Dwane" },
  ];

  patients[0]; // {name: "Jhon", lastName: "Doe"}
})();
