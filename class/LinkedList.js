import Node from './Node.js';

class LinkedList {
    constructor(list = []) {
        this.list = list;
    }
    head(){
        // Returns the first element of the list
        return this.list[0];
    }
    tail(){
        // Returns the last element of the list
        return this.list[- 1];
    }
    size(){
        // Returns the length of the list
        return this.list.length;
    }
    append(value) {
        // Adds a value to the tail of the list
        if (this.list.length === 0) {
            const newNode = new Node(value);
            this.list.push(newNode);
        } else {
            const newNode = new Node(value);
            this.list[- 1].nextNode = value;
            this.list.push(newNode);
        }
    }
    prepend(value){
        // Adds a value to the head of the list
        if (this.list.length === 0){
            const newNode = new Node(value)
        } else {
            const newNode = new Node(value, this.list[0].value)
        }
        this.list
    }
    at(index){
        // Returns the value of an node of the list in a determined index
        return this.list[index].value
    }
    pop(){
        // Deletes the last element of the list
        if(this.list.length !== 0){
            this.list.pop()
        }
    }
    constains(value){
        // Returns if an element is present on the list
        return this.list.includes(value)
    }
    find(value){
        // Returns the index of the node with a value
        return this.list.indexOf(value)
    }
    toSting(){
        // Returns a string showing the list
        let listToString = ""
        this.list.forEach(node => {
            if (node === this.head){
                listToString = `( ${node.value} )`
            } else {
                listToString += ` -> ( ${node.value} )`
            }
        });
        listToString += " -> null"
        return listToString
    }
    insertAt(value, index){
        // Inserts a value in the index position of the list
        let previousNode = this.list[index - 1]
        const nextNode = this.list[index]
        const newNode = new Node(value, nextNode.value)

        // We address the previous Node to the new Node we're introducing
        previousNode.nextNode = newNode.value

        // We divide the list by the index, and then concat it again placing the
        // the new node in the middle
        this.list = this.list.slice(0, index).concat(newNode).concat(this.list.slice(index))
    }
    removeAt(index){
        // Removes an element in the index
        let previousNode = this.list[index -1]
        let nextNode = this.list[index +1]
        previousNode.nextNode = nextNode.value
        this.list.pop(index)
    }
}

export default LinkedList;