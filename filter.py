
# word_list = words.words()
# three_char_words = [word for word in word_list if len(word) == 3]
# four_char_words = [word for word in word_list if len(word) == 4]
# five_char_words = [word for word in word_list if len(word) == 5]
# six_char_words = [word for word in word_list if len(word) == 6]
# seven_char_words = [word for word in word_list if len(word) == 7]

# # Randomly select words from each list
# def generate_random_word(word_list, count):
#     return random.sample(word_list, count)

# three_char_random = generate_random_word(three_char_words, 500)
# four_char_random = generate_random_word(four_char_words, 500)
# five_char_random = generate_random_word(five_char_words, 500)
# six_char_random = generate_random_word(six_char_words, 500)
# seven_char_random = generate_random_word(seven_char_words, 500)

# # Print the generated words
# print("3-character words:", three_char_random)
# print("4-character words:", four_char_random)
# print("5-character words:", five_char_random)
# print("6-character words:", six_char_random)
# print("7-character words:", seven_char_random)


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
