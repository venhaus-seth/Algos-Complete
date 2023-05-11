class Node(object):
    def __init__(self, data=None, next_node=None):
        self.data = data
        self.next = next_node

def sortedInsert(llist, data):
    # Write your code here
    if llist == None: 
        return Node(data)
    
    pointer = llist
    while pointer.next:
        #insert at head
        if data <= pointer.data:
            newHead = Node(data)
            newHead.next = pointer
            pointer.prev = newHead
            llist = newHead
            return llist
        #insert inside DLL
        if data > pointer.data and data < pointer.next.data:
            newNode = Node(data)
            temp = pointer
            newNode.next = pointer.next
            pointer.next= newNode
            pointer.next.prev = newNode
            return llist
        #move pointer
        else:
            pointer = pointer.next
    #insert at tail
    newTail = Node(data)
    pointer.next = newTail
    return llist