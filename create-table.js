import { sql } from './db.js'

// sql`DROP TABLE IF EXISTS videos;`.then(() => {
//     console.log("Tabela apagada!");
// }).catch(error => {
//     console.error("Erro ao apagar a tabela:", error);
// });

sql`CREATE TABLE videos (id TEXT PRIMARY KEY, title TEXT, description TEXT, duration INTEGER)`.then(() => {
    console.log("Tabela criada!");
}).catch(error => {
    console.error("Erro ao criar tabela:", error);
});
