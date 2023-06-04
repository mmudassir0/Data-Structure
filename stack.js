class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class Stack{
    constructor(value){
        this.first=null
        this.last=null
        this.size=0
    }
    push(value){
        const newNode=new Node(value)
        if(!this.size){
            this.first=newNode
            this.last=newNode
        }else{
            const temp=this.first
            this.first=newNode
            newNode.next=temp
        }
        this.size++
        return this
    }
    pop(){
        if(this.size===0) return undefined
        if(this.size===1){
            this.first=null
            this.last=null
        }
        else{
            const temp=this.first
            this.first=temp.next
            
        }
        this.size--
        return this
    }
}
const s=new Stack()
s.push("first")
s.push("second")
s.push("third")
s.pop()