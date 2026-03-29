##print("Hello, World")
##
### exercise 3.2
##print("Hello, World")
##print("Hello, World")
##
### exercise 3.3
##print("I love python programming language")
##
##recipe = "maggi, salt, ginger and garlic"
##print(recipe)
##
### exercise 4.1
##print('This is a string that uses "double quotation mark" inside the string.')
##
##print("well we can use an apostrophe inside, I'll just do this.")
##
##print("""we have to span a lot of words with it's white
##         space preserved, the major thing we just have to do is
##             to write the code and use triple quotation mark.""")
##
##print("we have to print a multiple line code, but it has to be printed\as a single line, when it's processed to be an output\the way is to use a blackslach but not at the end also.")
##
##paragraph = "This planet has—or rather had—a problem, which was \ this: most of the people living on it were unhappy for pretty much \ of the time. Many solutions were suggested for this problem, but \ most of these were largely concerned with the movements of small \ green pieces of paper, which is odd because on the whole it wasn't \ the small green pieces of paper that were unhappy."
##len(paragraph)
##print(paragraph)

### exercise 4.2
##word = "anime is life"
##len(word)
##
##first_name = "Sung"
##second_name = "Jinwoo"
##final_name = first_name + second_name
##print(final_name)
##
##first_name = "Sung"
##second_name = "Jinwoo"
##final_name = first_name + " " + second_name
##print(final_name)
##
##collect_word = "bazinga"
##print(collect_word[2:6])
##print(collect_word[-5:-1])

# exercise 4.3

###Chaging to lowercase
##word_1 = "Animal"
##print(word_1.lower())
##word_2 = "Badger"
##print(word_2.lower())
##word_3 = "Honey Bee"
##print(word_3.lower())
##word_4 = "Honey Badger"
##print(word_4.lower())
##
###Changing to uppercase
##word_11 = "Animal"
##print(word_11.upper())
##word_22 = "Badger"
##print(word_22.upper())
##word_33 = "Honey Bee"
##print(word_33.upper())
##word_44 = "Honey Badger"
##print(word_44.upper())
##
### Removing whitespace
##string1 = " Filet Mignon"
##print(string1.lstrip())
##string2 = "Brisket "
##print(string2.rstrip())
##string3 = " Cheeseburger "
##print(string3.strip())
##
### Determining if a string starts with a character
##string1 = "Becomes"
##print(string1.startswith("be"))
##string2 = "becomes"
##print(string2.startswith("be"))
##string3 = "BEAR"
##print(string3.startswith("be"))
##string4 = " bEautiful"
##print(string4.startswith("be"))
##
### Writing a code that alters the strings, so that they return all true
##string1 = "Becomes"
##string1 = string1.lower()
##print(string1.startswith("be"))
##string2 = "becomes"
##print(string2.startswith("be"))
##string3 = "BEAR"
##string3 = string3.lower()
##print(string3.startswith("be"))
##string4 = " bEautiful"
##string4 = string4.lower()
##print(string4.startswith("be"))


# Trying to create an interactive interface
prompt = "Hey what's up? "
user_input = input(prompt)
print("You said:" + "  " + user_input)
