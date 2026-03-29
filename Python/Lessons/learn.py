print("hello worid")

print("g*od python")

x = "python did not save all my work"
print(x)

#for list in python arrays
thislist = ["apple", "mangos", "oranges", "pineapples", "lime"]
print(thislist)

# for tuple in python arrays(coolection)
thistuple = ("apple", "magos", "oranges", "pineapples", "lime")
print(thistuple)

# accessing the items in the arrays using index
print(thislist[1])
print(thistuple[1])

print(thislist[-1]) #negative index
print(thistuple[-1])

print(thislist[1:3]) #range of index
print(thistuple[1:4])

print(thislist[-3:-1]) #range negative of index
print(thistuple[-4:-1])

#changing a list
thislist[1] = "blackchops"
print(thislist)

#changing a tuple (must convert to a list first)
x = ("apple", "oranges", "lime")
y = list(x)
y[1] = "pineapple"
x = tuple(y)

print(x)

#looping through a list
thislist = ["apple", "magos", "oranges", "pineapples", "lime"]
for x in thislist:
    print(x)

#looping through a tuple
thistuple = ("apple", "magos", "oranges", "pineapples", "lime")
for x in thistuple:
    print(x)

#checking if an iten exists in both list and tuple
thislist = ["apple", "magos", "oranges", "pineapples", "lime"]
if "magos" in thislist:
    print("yes it is in list")

thistuple = ("apple", "magos", "oranges", "pineapples", "lime")
if "apple" in thistuple:
    print("yes it's in tuple")

#length of array
thistuple = ("apple", "banana", "cherry")
print(len(thistuple))

thislist = ("apple", "banana", "cherry", "lime", "mango")
print(len(thislist))


if 5 > 2:
    print("its true")


