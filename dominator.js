const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {

  const tree = flattenTreeToArray(root);

  for (let i = 0; i < tree.length; i++) {
    if (tree[i].id === id) {
      return tree[i]
    }
  }

};


const getElementsByClassName = function(root, className) {
  const tree = flattenTreeToArray(root);

  let result = [];

  for (let i = 0; i < tree.length; i++) {
    if (tree[i].className) {
      let classes = (tree[i].className).split(' ');
      for (let j = 0; j < classes.length; j++) {
        if (classes[j] === className) {
          result.push(tree[i])
        }
      }
    }
  }
  return result
};


const getElementsByTagName = function(root, tagName) {
  const tree = flattenTreeToArray(root);

  let result = [];

  for (let i = 0; i < tree.length; i++) {
    if (tree[i].tagName === tagName) {
      result.push(tree[i])
    }
  }

  return result
};


module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
