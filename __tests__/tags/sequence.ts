import { testTag } from '../helpers/tags';
import { sequence, uint8, uint16 } from '../../src';

describe('sequence', () => {
  testTag(sequence()`empty`, [], []);
  testTag(sequence(uint8, uint16)`mixed`, [0x01, 0x00, 0x02], [1, 2]);
});
