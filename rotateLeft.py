def rotateLeft(d, arr):
    # Write your code here
    for i in range(0, d):
        rotating_num = arr.pop(0)
        arr.append(rotating_num)
        
    return arr

x = 2
x_arr = [1,2,3,4,5]
print(rotateLeft(x, x_arr))