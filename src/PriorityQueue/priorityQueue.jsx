//import React from 'react';

class priorityQueue {
    constructor() {
        this.items = [];
        this.lock = false;
    }

    unlock() {
        this.lock = false;
    }

    append(element) {
        if (this.items.filter(i => i.element === element).length > 0) {
            this.boostItem(element);
        } else{
            this.items.push(new QElement(element, 0));
        }
    }

    boostItem(element) {
        let index = this.items.map(i => i.element).indexOf(element);
        //console.log("trye!", index);
        this.items[index].priority += 1;

        while (index > (this.lock ? 1 : 0) && this.items[index].priority > this.items[index - 1].priority) {
            let tmp = this.items[index - 1];
            this.items[index - 1] = this.items[index];
            this.items[index] = tmp;
            index--;
        }
    }

    removeFirst() {
        this.lock = true;
        if (this.items.length === 0) {
            return '';
        }
        return this.items.shift().element;
    }
}

class QElement { 
    constructor(element, priority) {
        this.element = element; 
        this.priority = priority;
    }
} 

//export default priorityQueue;
module.exports = priorityQueue;