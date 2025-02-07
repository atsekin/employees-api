import jetSchema from 'jet-schema';
import { isNumber, isString, isBoolean } from 'jet-validators';
import { isRelationalKey, isStatus } from './validators';


export default jetSchema({
  globals: [
    { vf: isRelationalKey, default: -1 },
    { vf: isStatus, default: 'Working' },
    { vf: isNumber, default: 0 },
    { vf: isString, default: '' },
    { vf: isBoolean, default: false },
  ],
});
