class Node(object):
    def __init__(self, data=None, next_node=None):
        self.data = data
        self.next = next_node
        
def reverse(llist):
    # Write your code here
    pointer = llist
    newHead = Node(pointer.data)
    while pointer.next:
        newNode = Node(pointer.next.data)
        newHead.prev = newNode
        newNode.next = newHead
        newHead = newNode
        pointer = pointer.next
    return newHead