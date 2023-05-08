def reversePrint(llist):
    # Write your code here
    reversed_data_array = []
    pointer = llist
    while pointer:
        reversed_data_array.insert(0, pointer.data)
        pointer = pointer.next
    
    for i in reversed_data_array:
        print(i)