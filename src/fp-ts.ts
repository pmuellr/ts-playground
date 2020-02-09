#!/usr/bin/env ts-node

import * as T from "fp-ts/lib/Task"
import { pipe } from "fp-ts/lib/pipeable"

pipe(
  T.of(2),
  T.chain(result => T.of(result * 3)),
  T.chain(result => T.of(result + 4))
)().then(console.log); // 10