def getNode(llist, positionFromTail):
    # Write your code here
    if llist.next == None:
        return llist.data
    
    count = 0
    p1 = llist
    while p1.next:
        count += 1 
        p1 = p1.next
        
    nodeFromHead = count - positionFromTail
    p2 = llist
    for i in range(0, nodeFromHead):
        p2 = p2.next
        
    return p2.data