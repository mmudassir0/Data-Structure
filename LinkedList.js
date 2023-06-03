class Node {
    constructor(value) {
        this.value=value
            this.next=null
    }
}

class LinkedList{
    constructor(value){
        this.head={
            value:value,
            next:null
        }
        this.tail=this.head
        this.length=1
    }
    append(value){
        const newNode=new Node(value)
        this.tail.next=newNode
        this.tail=newNode
        this.length++
        // return this
    }
    prepend(value){
       const newNode=new Node(value)
        newNode.next=this.head
        this.head=newNode
        this.length++
    }
    PrintList(){
        const array=[]
        let CurrentNode=this.head
        while(CurrentNode !== null){
            array.push(CurrentNode.value)
            CurrentNode=CurrentNode.next
        }
        return array
    }
    insert(index,value){
        if(index>=this.length){
            return this.append(value)
        }
        const newNode={
            value:value,
            next:null
        }
        const leader=this.traverseToIndex(index-1)
        const holdPointer=leader.next
        leader.next=newNode
        newNode.next=holdPointer
        this.length++
        return this.PrintList()
    }
    traverseToIndex(index){
        let counter=0
        let CurrentNode=this.head
        while(index !==counter){
        // console.log(CurrentNode)
            
            CurrentNode=CurrentNode.next
            counter++
        }
        return CurrentNode;
    }
    remove(index){
        const leader=this.traverseToIndex(index-1)
        const unwantedNode=leader.next
        leader.next=unwantedNode.next
        this.length--
        return this.PrintList()
        
    }
}
const first=new LinkedList(10)
first.append(14)
first.append(16)
first.prepend(1)
// first.traverseToIndex(1)
first.insert(1,22)
first.PrintList()
// first.remove(2)
// first.remove(2)
// console.log(first)``