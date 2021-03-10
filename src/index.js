// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix) {
        let arr = []
        matrix.forEach((item, index) => {
            if (index % 2 != 0) {
                arr.push(item.reverse())
            } else arr.push(item)
        })
        return arr.flat();
    }else return []
}
