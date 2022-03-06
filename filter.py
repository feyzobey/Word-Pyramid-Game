first = []
second = []
with open("./wordlist.txt", "r") as f1, open("./filteredWords2.txt", "r") as f2:
    for line1 in f1:
        for word1 in line1.split():
            first.append(word1)
    for line2 in f2:
        for word2 in line2.split():
            second.append(word2)
# j = 0
# with open("./copy.txt", "w") as f3:
#     for i in range(len(first)):
#         for j in range(len(second)):
#             isDiff = j < len(second)
#             while isDiff:
#                 if first[i] == second[j]:
#                     isDiff = False
#                 if isDiff:
#                     print(first[i])
#                     f3.write(first[i] + "\n")
#                     j += 1
#                     break
#             break

j = 0
with open("./copy.txt") as f:
    lines = f.readlines()
    for i in range(len(first)):
        for j in range(len(second)):
            isDiff = j < len(second)
            while isDiff:
                if first[i] == second[j]:
                    for line in lines:
                        if line.strip("\n") != first[i]:
                            f.write(line)
                    isDiff = False
                if isDiff:
                    print(first[i])
                    j += 1
                    break
            
# with open("20k.txt", "r") as f:
#     lines = f.readlines()
# with open("20k.txt", "w") as f:
#     for line in lines:
#         if line.strip("\n") != "asdfsadf":
#             f.write(line)
