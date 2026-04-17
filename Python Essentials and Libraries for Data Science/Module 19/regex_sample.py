import re

# Create a regex pattern for phone numbers
phnNumRegex = re.compile(r'''
    (\+?\d{1,3})?        # area code (optional, with +)
    [\s\-.]?             # separator (space, dash, dot)
    (\d{3})              # first 3 digits
    [\s\-.]?             # separator
    (\d{3})              # second 3 digits
    [\s\-.]?             # separator
    (\d{4,5})            # last 4 or 5 digits
''', re.VERBOSE)

# Sample text
text = '''
(+1) 541-754-3017
+19-541-754-3017
(001) 8004207240
415-863-9900
415 863 9950
info@nostarch.co.in
media@gmail.com
academic@nostarch.com
help@yahoo.com
'''

# Store matches
matches = []

for num in phnNumRegex.findall(text):
    # num = (area, part1, part2, part3)
    
    if num[0] != '':
        phoneNum = "(" + num[0] + ") "
    else:
        phoneNum = ""
    
    phoneNum += "-".join([num[1], num[2], num[3]])
    
    matches.append(phoneNum)

# Print result
print(matches)