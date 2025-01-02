import Node from './Node.js';

class LinkedList {
    constructor(list = []) {
        this.list = list;
    }
    head(){
        return this.list[0];
    }
    tail(){
        return this.list[- 1];
    }
    size(){
        return this.list.length;
    }
    append(value) {
        // Adds a value to the tail of the list
        if (this.list.length === 0) {
            value = new Node(value);
            this.list.push(value);
        } else {
            value = new Node(value);
            this.list[- 1].nextNode = value;
            this.list.push(value);
        }
    }
    prepend(value){
        // Adds a value to the head of the list
        if (this.list.length === 0){
            value = new Node(value)
        } else {
            value = new Node(value, this.list[0].value)
        }
    }
    pop(){
        if(this.list.length !== 0){
            this.list.pop()
        }
    }
    constains(value){
        let foundedValue = false
        this.list.forEach(element => {
            if (element.value == value){
                foundedValue = true
            }
        });
        return foundedValue
    }
}

export default LinkedList;