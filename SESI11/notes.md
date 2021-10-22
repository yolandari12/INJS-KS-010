## API (aplicaion programing interface)
-- adalah cara 2 aplikasi berkomunikasi ibaratkan seperti pelayan, sebagai penghubung  atau cara komunikasi  dengan data via data itu sendiri. 

## REST API
-- adalah salah satu tipe API yang bentuknya refresentatif (datanya dikasih tau ke kita). sebuah server yang masing" resouce nya dikasih tau. 

URI / Endpoint / Route -> /resources
server/users
get - minta data
post - mengirim data
put - pudtae
patch - update
delete - hapus 

Status code
-200 -> sukses
- 400 -> kesalahan dari user(authorization, bad request, not found)
-500 -> kesalahan dari server

## Struktur Request

## Methode
GET, POST, etc

## URI / Endpoint /Route
/resources

## Headers
{
    .."Authorization": "<token>"
}

## Body
{
    "nama": "..."
}