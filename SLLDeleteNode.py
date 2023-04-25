class Node(object):
    def __init__(self, data=None, next_node=None):
        self.data = data
        self.next = next_node

def deleteNode(llist, position):
    # Write your code here      
    pointer = llist
    
    if position is 0:
        llist = llist.next
        
    for i in range(0,position-1):
        pointer = pointer.next
        
    pointer.next = pointer.next.next
    
    return llist