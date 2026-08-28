/**
 * main.js
 * ---------------------------------------------------
 * Pruebas por consola del patrón Singleton aplicado
 * al SesionManager (login) del Sistema de Biblioteca Digital.
 * ---------------------------------------------------
 */

const SesionManager = require("./auth/SesionManager");

console.log("========================================");
console.log(" PRUEBA 1: Obtener la instancia por primera vez");
console.log("========================================");
const sesion1 = SesionManager.getInstance();

console.log("\n========================================");
console.log(" PRUEBA 2: Volver a pedir la instancia desde otra parte del código");
console.log("========================================");
const sesion2 = SesionManager.getInstance();

console.log("\n========================================");
console.log(" PRUEBA 3: Verificar que sesion1 y sesion2 son EXACTAMENTE la misma instancia");
console.log("========================================");
console.log("¿sesion1 === sesion2 ?", sesion1 === sesion2);

console.log("\n========================================");
console.log(" PRUEBA 4: Iniciar sesión usando sesion1");
console.log("========================================");
sesion1.login("vmillan", "1234");

console.log("\n========================================");
console.log(" PRUEBA 5: Consultar el usuario autenticado, pero desde sesion2");
console.log(" (demuestra que el estado se comparte porque es la misma instancia)");
console.log("========================================");
console.log("¿Está autenticado?", sesion2.estaAutenticado());
console.log("Usuario actual (visto desde sesion2):", sesion2.getUsuarioActual());

console.log("\n========================================");
console.log(" PRUEBA 6: Intentar crear una instancia con 'new' directamente (debe fallar)");
console.log("========================================");
try {
  const intentoInvalido = new SesionManager();
} catch (error) {
  console.log("Error capturado como se esperaba:", error.message);
}

console.log("\n========================================");
console.log(" PRUEBA 7: Cerrar sesión y confirmar el cambio de estado");
console.log("========================================");
sesion2.logout();
console.log("¿Está autenticado ahora?", sesion1.estaAutenticado());
