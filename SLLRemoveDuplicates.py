def removeDuplicates(llist):
    # Write your code here
    pointer = llist
    llistValues = []
    
    while pointer.next:
        llistValues.append(pointer.data)
        if pointer.next.data in llistValues:
            if pointer.next.next:
                pointer.next = pointer.next.next
            else: 
                pointer.next = None
        else:
            pointer = pointer.next
            
    return llist