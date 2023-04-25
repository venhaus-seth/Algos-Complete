class Node(object):
    def __init__(self, data=None, next_node=None):
        self.data = data
        self.next = next_node

def insertNodeAtTail(head, data):
    if head == None:
        head = data
        return Node(data)
    
    pointer = head
    
    while pointer.next:
        pointer = pointer.next
    pointer.next = Node(data)
        
    return head