# first = []
# second = []

# with open('./20k.txt') as f, open('./wordlist2.txt', 'w') as f2:
#     for line in f:
#         for word in line.split(): 
#             word = word.strip("'")
#             if len(word) == 6:   
#                 f2.write(word + '\n')


# with open("./copy.txt", "r") as f1, open("./wordlist2.txt", "r") as f2:
#     for line1 in f1:
#         for word1 in line1.split():
#             first.append(word1)
#     for line2 in f2:
#         for word2 in line2.split():
#             second.append(word2)


# with open("./allDiffWords.txt", "w") as f:
#     for i in range(len(first)):
#         j = 0
#         for j in range(len(second)):
#             isDiff = True
#             while (j + 1) != len(second):
#                 if(first[i] == second[j]):
#                     isDiff = False
#                     break
#                 isDiff = j < len(second)
#                 if (j + 1) != len(second):
#                     j += 1
#             if isDiff:
#                 print(first[i])
#                 f.write(first[i] + "\n")
#             break


# with open("20k.txt", "r") as f:
#     lines = f.readlines()
# with open("20k.txt", "w") as f:
#     for line in lines:
#         if line.strip("\n") != "asdfsadf":
#             f.write(line)
