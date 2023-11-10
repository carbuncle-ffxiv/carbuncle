import { resolve } from 'node:path';

import { sync } from 'glob';

const normalizePath = (route: string) => route.replace(/[\\/]+/g, '/');

export const getFilePaths = (route: string) => {
  return sync(normalizePath(`${process.cwd()}/dist/${route}`));
};

export const getFilePath = (route: string) => {
  return normalizePath(`${process.cwd()}/dist/${route}`);
};

export const importFile = async (filePath: string) => {
  const file = await import(`file://${resolve(filePath)}`);
  return file.default;
};
