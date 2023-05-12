def printLinkedList(head):
    if head == None:
        return
    print(head.data)
    while head.next:
        print(head.next.data)
        head = head.next