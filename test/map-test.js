// @flow
"use strict";
const { Observable } = require("../src/es-observable");
const { expect } = require("chai");
const { stub } = require("sinon");
const { map } = require("../src/operators/map");

describe("map function", function() {
  it("transforms values", function() {
    const observable = Observable.of(0, 1, 2);
    const next = stub();
    const error = stub();
    const complete = stub();

    map((value, index) => [value, index])(observable).subscribe({
      next,
      error,
      complete
    });

    expect(next.args).to.deep.equal([[[0, 0]], [[1, 1]], [[2, 2]]]);
    expect(error.called).equal(false);
    expect(complete.calledOnce).equal(true);
  });
});
