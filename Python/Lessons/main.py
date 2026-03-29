import random

#adding a global constant 
MAX_LINES = 3
MAX_BET = 100
MIN_BET = 1

ROWS = 3
COLS = 3

#making a dictionary
symbol_count = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}

symbol_value = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}

def check_winnings(columns, lines, bet, values):
    winnings = 0
    winning_lines = []
    for line in range(lines):
        symbol = columns[0][line]
        for column in columns:
            symbol_to_check = column[line]
            if symbol!= symbol_to_check:
                break
        else:
            winnings += values[symbol] * bet
            winning_lines.append(line + 1)

    return winnings, winning_lines

#generating what the outcome of the slot machine is using the above values
def get_slot_machine_spin(rows, cols, symbols):
    all_symbols = []   #a list
    #a for loop that adds the symbol into the all_symbols list
    for symbol, symbol_count in symbols.items():  # what .item() does is to return key and value associated with the dictionary
        for _ in range(symbol_count):
            all_symbols.append(symbol)

    #selecting the values that are going to go in every single col
    columns = []
    for _ in range(cols):
        column = []
        current_symbols = all_symbols[:]
        for _ in range(rows): 
            value = random.choice(current_symbols)
            current_symbols.remove(value)
            #adding value to the column
            column.append(value)

        columns.append(column)
    
    return columns

def print_slot_machine(columns):
    #we have to transpose the rows to column to be able to print it
    for row in range(len(columns[0])):
        for i, column in enumerate(columns):
            if i != len(columns) - 1:
                print(column[row], end=" | ")
            else:
                print(column[row], end="")

        print()


#making a function to collect user input
def deposit():
    while True:
        amount = input("What would you like to deposite? $")
        #checking if the amount is actually a valid number
        if amount.isdigit():
            #converting the String to Int type
            amount = int(amount)
            if amount > 0:
                break
            else:
                print("Amount must be greater than 0.")
        else:
            print("Please enter a number.")

    return amount   

#collecting bet from the user -knowing how much they want to bet and how many slots-
def get_number_of_line():
    while True:
        lines = input("Enter the numbers of lines to bet on (1-" + str(MAX_LINES) + ")? ")
        #checking if the amount is actually a valid number
        if lines.isdigit():
            #converting the String to Int type
            lines = int(lines)
             #Want to check if a value is inbetween two values
            if 1 <= lines <= MAX_LINES:
                break
            else:
                print("Enter a valid number of lines.")
        else:
            print("Please enter a number.")

    return lines

#getting the amount a player want to bet on each line
def get_bet():
    while True:
        amount = input("How much would you like to bet on each line? $")
        #checking if the amount is actually a valid number
        if amount.isdigit():
            #converting the String to Int type
            amount = int(amount)
            if MIN_BET <= amount <= MAX_BET:
                break
            else:
                print(f"Amount must be between ${MIN_BET} - ${MAX_BET}.")
        else:
            print("Please enter a number.")

    return amount

def spin(balance):
    lines = get_number_of_line()
    #checking if the amount they are betting is within their amount
    while True:
        bet = get_bet()
        total_bet = bet * lines

        if total_bet > balance:
            print(f"You do not have enough to bet that amount, your current balance is: ${balance}")
        else:
            break

    print(f"You are betting ${bet} on {lines} lines. Total bet is equal to: ${total_bet}")

    #print(balance, lines)


    #generating the slot machine
    #spinning the machine
    slots = get_slot_machine_spin(ROWS, COLS, symbol_count)
    print_slot_machine(slots)
    winnings, winning_lines = check_winnings(slots, lines, bet, symbol_value)
    print(f"You have won ${winnings}.")
    print(f"You have won on lines:", *winning_lines)
    return winnings - total_bet


# calling our function
#deposit()
#then we making amount = deposit()  but calling it balance
def main(): #putting our program in mainfunction so that we end our program it can start again
    balance = deposit()
    while True:
        print(f"Current balance is ${balance}")
        answer = input("Press enter to play (q to quit).")
        if answer == "q":
            break
        balance += spin(balance)

    print(f"You left with ${balance}")

main()
