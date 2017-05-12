# Write a method that takes an array of names as an argument and returns a string of all of those names separated by commas. For instance, if I pass the array [“Chris”, “Oggi”, “Emily”] the method should return the string “Chris, Oggi, Emily”.
# Then write a method that takes a string as an argument. This method will use the returned value from the first method in order to construct a larger string. For instance, if I pass my second method the string “work here.” then the second method should return “Chris, Oggi, Emily work here.”
#  If you finish, make the method return the string with “and” before the last name. For instance: “Chris, Oggi, and Emily work here.”

names = ['Chris', 'Oggi', 'Emily']


def comma array 
	array.join(", ")
end

p name_string = comma(names)

def make_sentence string
	string + " work here"
end

# def make_sentence string
# 	p string.split(", ") + " work here"
# end

p make_sentence(name_string)