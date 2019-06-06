import { expect } from "chai"

import Farmer from "../models/Farmer"
import { exportAllDeclaration } from "@babel/types";

describe("Farmer", () => {
  let p = new Farmer()

  it("should be an object", () => {

    expect(p).to.be.an('object')

  })

  it("should have properties initiated", () => {

    expect(p).to.be.an('object').that.includes({
      budget: 1000,
      year : 2020,
      temp: 0.0,
    })

  })

})
