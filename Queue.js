class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class Queue{
    constructor(value){
        this.first=null
        this.last=null
        this.size=0
    }
    enqueue(value){
        const newNode=new Node(value)
        if(!this.size){
            this.first=newNode
            this.last=this.first
        }else{
            this.last.next=newNode
            this.last=newNode
        }
        this.size++
        return this
    }
    dequeue(){
        if(this.size===0) return null
        if(this.size===1){
            this.first=null
            this.last=null
        }else{
            this.first=this.first.next
        }
        this.size--
        return this
    }
}
const q=new Queue()
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.dequeue()