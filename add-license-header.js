import { readdirSync, statSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const author = 'Ignacio Gonzalez Acuña';
const projectName = 'Risp';
const year = '2025';
const changeDate = '2029-01-01';
const changeLicense = 'Apache 2.0';

const header = `/*
 * ${projectName}
 * Copyright (c) ${year} ${author}
 *
 * This source code is licensed under the Business Source License 1.1 (BUSL-1.1),
 * which restricts production use. You may not use this file except in compliance
 * with the License. You may obtain a copy of the License in the project root or at:
 *
 * https://mariadb.com/bsl11
 *
 * Change Date: ${changeDate}
 * Change License: ${changeLicense}
 */
`;

const ignoredDirs = ['node_modules', '.git', 'dist', 'build'];

function walk(dir, callback) {
  readdirSync(dir).forEach((file) => {
    const fullPath = join(dir, file);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      if (!ignoredDirs.includes(file)) {
        walk(fullPath, callback);
      }
    } else if (/\.(ts|js)$/.test(file)) {
      callback(fullPath);
    }
  });
}

function addHeaderIfMissing(filePath) {
  const content = readFileSync(filePath, 'utf8');
  if (!content.includes('Business Source License 1.1')) {
    writeFileSync(filePath, `${header}\n${content}`, 'utf8');
    console.log(`✅ Header added to ${filePath}`);
  } else {
    console.log(`⚠️  Header already exists in ${filePath}`);
  }
}

walk('.', addHeaderIfMissing);
