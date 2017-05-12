const visitAllNodes = function(node, callback) {

  if (node.childNodes) {
    callback(node);
  }

  for (let i = 0; i<node.childNodes.length; i++) {
    const children = node.childNodes[i];
    visitAllNodes(children, callback)
  }

};

const flattenTreeToArray = function(node) {

  const result = [];
  visitAllNodes(node, element => result.push(element));
  return result

};


module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};