#!/usr/bin/env ts-node

import * as t from 'io-ts'
import { isRight } from 'fp-ts/lib/Either'

const string = new t.Type<string, string, unknown>(
  'string',
  (input: unknown): input is string => typeof input === 'string',
  // `t.success` and `t.failure` are helpers used to build `Either` instances
  (input, context) => (typeof input === 'string' ? t.success(input) : t.failure(input, context)),
  // `A` and `O` are the same, so `encode` is just the identity function
  t.identity
)
console.log(isRight(string.decode('a string'))) // true
console.log(isRight(string.decode(null))) // false