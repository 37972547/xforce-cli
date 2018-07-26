const isFore = function (answers) {
    return answers.solutionName === 'fore';
};

const isReact = function (answers) {
    return answers.frameName === 'react';
};

/**
* 拼接对象值
 * @param {[Object]} obj
 * @return {[String]}
* */
const objValueToString = function(obj) {
    const arr = Object.values(obj);
    arr.pop();
    return arr.join(',').replace(/,/g, '');
};

module.exports = {
    isFore: isFore,
    isReact: isReact,
    objValueToString: objValueToString
};