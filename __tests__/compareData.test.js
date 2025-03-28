import { test, expect } from '@jest/globals';
import compareData from '../src/compareData.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('flat comparison', () => {
  const json1 = getFixturePath('file1.json');
  const json2 = getFixturePath('file2.json');
  const yml1 = getFixturePath('file1.yml');
  const yml2 = getFixturePath('file2.yml');
  const result = readFile('flatResult.txt');
  expect(compareData(json1, json2)).toEqual(result);
  expect(compareData(yml1, yml2)).toEqual(result);
  expect(compareData(json1, yml2)).toEqual(result);
});
