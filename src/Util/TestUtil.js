export const findByTestAttribute = (node,attributeName) => {
    return node.find(`[data-test="${attributeName}"]`);
};