let chai = require("chai");
let chaiHttp = require("chai-http");
const expect = require("chai").expect;

chai.use(chaiHttp);
const url = "http://localhost:3977/api";

const credential = {
  email: "test@test.com",
  password: "test",
};

/*
 * Testing login
 */
describe("Auth", () => {
  it("respond with 200 OK", (done) => {
    chai
      .request(url)
      .post("/login")
      .send({
        email: "admin@admin.com",
        password: "administrador",
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status(200);
        done();
      });
  });

  it("respond with 200 OK", (done) => {
    chai
      .request(url)
      .post("/register")
      .send({
        email: "test@test.com",
        password: "test",
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status(500);
        done();
      });
  });
});
