/**
 * SesionManager
 * ---------------------------------------------------
 * Patrón: SINGLETON
 * Semana 2 - Proyecto: Sistema de Biblioteca Digital
 *
 * Rol dentro del proyecto:
 * Este módulo es el punto único de control de sesión/autenticación
 * del sistema. Sin importar desde qué parte del código se solicite,
 * SIEMPRE se obtiene la misma instancia, con el mismo estado de
 * "quién está logueado en este momento".
 *
 * Este componente quedará fijo como Singleton durante todo el
 * proyecto: en próximas semanas se le podrán agregar otros patrones
 * (por ejemplo Observer para notificar a otros módulos cuando
 * cambia la sesión, o State para manejar estados de sesión), pero
 * la esencia de "instancia única" del login no debe cambiar.
 * ---------------------------------------------------
 */

class SesionManager {
  // Guarda la única instancia de la clase (privada por convención con _)
  static #instancia = null;

  constructor() {
    if (SesionManager.#instancia) {
      throw new Error(
        "No se puede crear otra instancia de SesionManager. Use SesionManager.getInstance()."
      );
    }

    // Estado interno de la sesión activa (simulado en memoria)
    this.usuarioActual = null;
    this.fechaInicioSesion = null;

    // Simulación de una "base de datos" de usuarios registrados
    this.usuariosRegistrados = [
      { usuario: "vmillan", password: "1234", nombre: "Valentina Millán", rol: "administrador" },
      { usuario: "lzafra", password: "abcd", nombre: "Luz Estela Zafra", rol: "bibliotecario" },
      { usuario: "lector1", password: "lector1", nombre: "Usuario Lector", rol: "lector" },
    ];

    SesionManager.#instancia = this;
    console.log("[SesionManager] Instancia creada por primera vez.");
  }

  /**
   * Punto de acceso global al Singleton.
   * Si ya existe la instancia, la retorna. Si no, la crea.
   */
  static getInstance() {
    if (!SesionManager.#instancia) {
      SesionManager.#instancia = new SesionManager();
    } else {
      console.log("[SesionManager] Reutilizando instancia existente.");
    }
    return SesionManager.#instancia;
  }

  /**
   * Login: valida credenciales y establece el usuario actual
   * en la ÚNICA instancia compartida por todo el sistema.
   */
  login(usuario, password) {
    const encontrado = this.usuariosRegistrados.find(
      (u) => u.usuario === usuario && u.password === password
    );

    if (!encontrado) {
      console.log(`[Login] Intento fallido para el usuario "${usuario}".`);
      return false;
    }

    this.usuarioActual = encontrado;
    this.fechaInicioSesion = new Date();
    console.log(
      `[Login] Sesión iniciada correctamente: ${encontrado.nombre} (${encontrado.rol}).`
    );
    return true;
  }

  logout() {
    if (!this.usuarioActual) {
      console.log("[Logout] No hay ninguna sesión activa.");
      return;
    }
    console.log(`[Logout] Cerrando sesión de ${this.usuarioActual.nombre}.`);
    this.usuarioActual = null;
    this.fechaInicioSesion = null;
  }

  estaAutenticado() {
    return this.usuarioActual !== null;
  }

  getUsuarioActual() {
    return this.usuarioActual;
  }
}

module.exports = SesionManager;
