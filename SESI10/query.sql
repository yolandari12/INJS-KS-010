--DDL -> Data definision language(query yang mengatur level tabel, didesain menggunakan manipulasi si tabelnya)
1.Create db
2.Create
3.alter tabel
4.drop tabel

--DM L-> data manipulation lenguage (Memanifulasi isi dari tabel yang udh didefinisikan)
1.insert
2.select
3.update
4.delete

-- "" untuk databseis
-- '' untuk enrty

--LATIHAN
Jalankan query dam querynya disimpan di query editor 
atau file.sql
1.DDL (create table / db, alter, drop(tabel khusus yang di drop))
2.DML (insert, update, delete, select)

boleh buat 1 tabel tambahan terus relasikan .


--create table
create table "Dokter" (
	id serial primary key, 
	nama_dk varchar
);

create table "pasien" (
	id serial primary key,
	nama_ps varchar,
	jk varchar,
	umur integer 
);

create table "berobat" (
	id serial primary key,
	tgl date,
	keluhan varchar,
	diaknosa varchar,
	id_dokter integer  references "Dokter"(id)
);

--Modifikasi
alter table "pasien" 
add column "jk" varchar (500);

--isi
insert into "Dokter" ("nama_dk")
values ('yolandari');
select * from "Dokter";

insert into "pasien" ("nama_ps", "jk", "umur")
values ('lula', 'P', 21);
select * from "pasien";

insert into "berobat" ("tgl", "keluhan", "diaknosa", "id_dokter")
values ('21', 'batuk', 'flue', 1);
select * from "berobat";

--Hapus
drop table "pasien"; 
