create table "Pegawai" (
	id serial primary key,
	nama varchar not null,
	umur integer,
	alamat varchar,
	is_active boolean
);

ALTER TABLE "Pegawai"
ADD COLUMN last_nama varchar; 

insert into "Pegawai" (nama, umur, alamat, is_active)
values('wahyu', 20, 'lombok', true);

select * from "Pegawai";
	