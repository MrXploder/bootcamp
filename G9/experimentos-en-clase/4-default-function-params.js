"use strict";

function double(x = 1) {
  return x * 2;
}

const doubler = (x = 1) => x * 2;

double()
double(1)
double(2)