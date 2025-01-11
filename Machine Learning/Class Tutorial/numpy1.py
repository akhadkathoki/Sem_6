import numpy as np

# # list
# l1 = [1,3,5,6,7]

# x = np.array(list)
# print(x)

# Randam List
# # randam List
# ran = np.random.randint(11, size=10)
# print(ran)

# # randam mXn metrix
# y = np.random.randint(1,11,(5,5))
# print(y)

# # Zero Metrix
# x = np.zeros((5,5), dtype=int)
# print(x)

# a = np.random.randint(101, size = 60)
# smallest = min(a)
# print(smallest)
# print(a)


# p = np.random.randint(5,16,(3,3))
# q = np.random.randint(5,16,(3,3))
# # Operations
# print("Sum of P and Q is:\n",p+q, "\nor\n", np.add(p,q))
# print("Subtraction of P and Q is:\n",p-q, "\nor\n", np.subtract(p,q))
# print("Multiplication of P and Q is:\n",p*q, "\nor\n", np.multiply(p,q))
# print("Division of P and Q is:\n",p/q, "\nor\n", np.divide(p,q))


# INDEXING
x = np.random.randint(1,11,(3,3))
print(x)
print(x[1][1])