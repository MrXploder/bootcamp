export interface IGrade {
  /**
   * Firestore id
   */
  id: string
  /**
   * Codigo unico del curso
   */
  code: string
  /**
   * Precio en CLP
   */
  price: number
  /**
   * Cupo maximo
   */
  quotas: number
  /**
   * Nombre visible
   */
  name: string
  /**
   * Breve descripcion
   */
  description: string
  /**
   * Duracion del curso, ejem: 1 mes
   */
  span: string
  /**
   * Indica si el curso esta o no activo
   */
  status: boolean
  /**
   * Fecha de creacion
   */
  date: string
  /**
   * Imagen visible
   */
  picture: string
  /**
   * Cantidad de alumnos inscritos
   */
  enrolled: number
}
