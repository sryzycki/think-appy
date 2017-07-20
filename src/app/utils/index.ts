import * as uuid from 'uuid';

export const generateId = (): string => {
  return uuid.v1();
};
