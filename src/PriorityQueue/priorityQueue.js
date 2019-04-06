class queue {
    
    constructor() {
        this.items = [];
    }

    append(element) {
        if (element in containingElements) {
            boostItem(element);
        } else{
            items.push(QElement(element, 0));
        }
    }

    boostItem(element) {
        let index = items.index(element);
        items[index].priority += 1;

        while (index !== 0 && items[index].priority > items[index - 1].priority) {
            let tmp = items[index - 1];
            items[index - 1] = items[index];
            items[index] = tmp;
            index--;
        }
    }

    removeFirst() {
        items.removeFirst;
    }

    getQueue() {
        return items.map(i => (
            <div>{i.element}, {i.priority}</div>
        ));
    }

    render() {
        return {getQueue()};
    }
}

class QElement { 
    constructor(element, priority) {
        this.element = element; 
        this.priority = priority;
    }
} 

export default queue;