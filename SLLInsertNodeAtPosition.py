class Node(object):
    def __init__(self, data=None, next_node=None):
        self.data = data
        self.next = next_node
        
def insertNodeAtPosition(llist, data, position):
    # Write your code here
    new_node = Node(data)
    pointer = llist
    for i in range(0, position-1):
        pointer = pointer.next  
    new_node.next = pointer.next
    pointer.next = new_node
    return llist   