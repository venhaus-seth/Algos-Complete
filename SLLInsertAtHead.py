class Node(object):
    def __init__(self, data=None, next_node=None):
        self.data = data
        self.next = next_node
        
def insertNodeAtHead(llist, data):
    # Write your code here
    if llist is None:
        return Node(data)
    
    new_Node = Node(data)
    new_Node.next = llist
    return new_Node