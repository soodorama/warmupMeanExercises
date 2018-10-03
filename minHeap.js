class MinHeap {
    constructor () {
        this.heap = [undefined]
    }
    add(val) {
        this.heap.push(val)
        if (heap.length == 2) {
            return this.heap
        }
        let selfIndex = this.heap.length - 1
        let parentIndex = Math.trunc(selfIndex / 2)
        while (parentIndex && this.heap[parentIndex] > val) {
            console.log("swap")
            var temp = this.heap[parentIndex]
            this.heap[parentIndex] = this.heap[selfIndex]
            this.heap[selfIndex] = temp

            selfIndex = parentIndex
            parentIndex = Math.trunc(selfIndex / 2)
        }
        return this.heap
    }
}