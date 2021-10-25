const request = require("supertest");
const app = require("../app");

data = {
    email: "lestari@gmail.com",
    password:"7878"
}
datawrong = {
    email: "lestari@gmail.com",
    password: "lestari2346"
}

describe("GET/", () => {
    test("GET DATA ", done => {
        request(app)
            .get("/")
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            });
    });
});


describe("POST /login", () => {
    it("200 Login Success !", (done) => {
        request(app).post('/login').send(data).end(function(err, res) {
            if (err) {
                done(err)
            }
            expect(res.status).toEqual(200);
            expect(typeof res.body).toEqual("object");
            expect(res.body).toHaveProperty("token");
            expect(typeof res.body.token).toEqual("string");
            done()
        })
    });

    it("401 Email & Password Is Not Valid", (done) => {
        request(app).post('/login').send(datawrong).end(function(err, res) {
            if (err) {
                done(err)
            }
            expect(res.status).toEqual(401);
            done()
        })
    })
});