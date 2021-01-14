import hello from "../src/hello";
import { expect } from "chai";

describe("Typescript + Babel usage suite", () => {
  it("should return string correctly", () => {
    expect(hello("mocha")).to.be.equal("Hello mocha");
  });
  it("should check if jwtVerify function exists", () => {
    //@ts-ignore
    const jwtVerify = hello.__get__("hello");
    expect(jwtVerify).to.be.a("function");
  });
});
