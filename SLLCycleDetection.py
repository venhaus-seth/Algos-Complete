def has_cycle(head):
    arr = []
    arr.append(head)
    while head.next:
        if head.next in arr:
            return 1
        arr.append(head.next)
        head = head.next
    return 0
