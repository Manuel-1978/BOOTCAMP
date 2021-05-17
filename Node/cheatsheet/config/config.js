// Configuramos la variable de entorno "PORT"
// para que coja una ya existente o le asigne el 3000 si no existiera

process.env.PORT = process.env.PORT || 3000;
// se genera la semilla de encryptacion para una variable de entorno:
process.env.SEED = process.env.SEED || "SECRET KEY";