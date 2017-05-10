const fs = require('fs');
const { visitAllNodes,
        flattenTreeToArray } = require('../dom-util');

describe('dom-util', () => {

  describe('visitAllNodes()', () => {
    it('visits the correct number of nodes', () => {
      const data = fs.readFileSync('./test/fixtures/broccoli.json', 'utf-8');
      const broccoli = JSON.parse(data);

      let count = 0;
      visitAllNodes(broccoli, () => {
        count++;
      });
      expect(count).toEqual(39);
    });

    it('performs an action on each node', () => {
      const data = fs.readFileSync('./test/fixtures/broccoli.json', 'utf-8');
      const broccoli = JSON.parse(data);

      const sizeCounts = {};
      visitAllNodes(broccoli, (node) => {
        if (sizeCounts[node.size]) {
          sizeCounts[node.size]++;
        } else {
          sizeCounts[node.size] = 1;
        }
      });

      expect(sizeCounts).toEqual({
        5: 1,
        4: 2,
        3: 4,
        2: 8,
        1: 24
      });
    });
  });

  describe('flattenTreeToArray()', () => {
    it('flattens to an array of the correct length', () => {
      const data = fs.readFileSync('./test/fixtures/broccoli.json', 'utf-8');
      const broccoli = JSON.parse(data);
      const nodes = flattenTreeToArray(broccoli);
      expect(nodes.length).toEqual(39);
    });
  });

});
