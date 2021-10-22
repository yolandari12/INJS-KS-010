1. GraphQL => sebuah data manajement untuk server
biasanya di 1 ulr aja 
POST/graphql
body.query = creat

2. Sequelize (CRUD)
adalah sebuah ORM (Object relational mapping) dimana  tools untuk membuat database.

## step  
-- bash 
install sequelize  (npm sequelize sequelize-cli pg )
-- panggil sequilize (npx sequelize init)
-- ubah confiq.jsonnya yang di devolopment (username,paswd, database(npbeda dri postgre yang kmren)), hostnya localhost, diales diganti jadi postgres
--npm i pg
-- lanjut "npx sequelize db:create"  => buat db baru 
-- npm sequelize model:generate --name <nama PascalCase dan singular/tunggal> --attributes <nama properti>:<type> => untuk tabel 
-- npx  sequelize db:migrate

## seeders adalah data inisial yang akan di input ke database sebelum memulai servernya dan untuk mengatur isi di dalam tabel.
seed
-- npx sequelize seed:generate --name <nama seed>
atur seeders
-- npx sequelize db:seed --seed --data--users
-- npx sequelize db:seed:all
alter   table
-- npx sequelize migration:generate --name <nama migration>
-- npx sequelize db:migrate






DDL untuk ngatur isi di tabel 
REST
GET POST PUT DELETE /resource => create, read, update, delete