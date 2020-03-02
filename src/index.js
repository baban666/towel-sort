module.exports = function towelSort (matrix) {
    let result = [];

    if(!matrix){
        return result
    }

    result = matrix.map((item, index) => {
       return (index % 2 === 1) ? item.reverse() : item;
    });

    return result.flat();
};
