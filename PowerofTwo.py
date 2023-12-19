import math

def isPowerOfTwo(n):
        
        # for i in range(n):
        #     if pow(2,i) == n:
        #         return True
        #     if pow(2,i) > n:
        #         return False
            
        NumtoCheck = math.log(n,2) 
        if NumtoCheck.is_integer():
                return True
        else:
                return False




n1 = 1
n2 = 16
n3 = 3
print(isPowerOfTwo(n1))
print(isPowerOfTwo(n2))
print(isPowerOfTwo(n3))