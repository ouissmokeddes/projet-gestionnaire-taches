// tests/unit/utils/priority.test.js
const { computePriority } = require('../../../backend/src/utils/priority');
const { expect } = require('chai');

describe('computePriority', () => {
  it('retourne 1 pour haute priorité', () => {
    const result = computePriority({ dueDate: '2025-07-10', priority: 'high' });
    expect(result).to.equal(1);
  });

  it('retourne 3 pour basse priorité', () => {
    const result = computePriority({ dueDate: '2025-07-10', priority: 'low' });
    expect(result).to.equal(3);
  });
});