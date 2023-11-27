import { User, user as me } from './main';
import type { RandomType } from './typeFile';

type A = RandomType;

function printUser(user: User) {
  console.log(user.name);
  return user.name;
}

const a: A = printUser(me);
a;
