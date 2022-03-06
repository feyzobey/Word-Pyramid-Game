first = []
second = []
diffWords = []
with open("./wordlist.txt", "r") as f1, open("./filteredWords2.txt", "r") as f2:
    for line1 in f1:
        for word1 in line1.split():
            first.append(word1)
    for line2 in f2:
        for word2 in line2.split():
            second.append(word2)
    
with open("./wordlist2.txt", "w") as f3:
    for i in range(len(first)):
        for j in range(len(second)):
            while j < len(first):
                if first[i] == second[j]:
                    break
            f3.write(first[i])