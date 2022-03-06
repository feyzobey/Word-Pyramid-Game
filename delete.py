with open("20k.txt", "r") as f:
    lines = f.readlines()
with open("20k.txt", "w") as f:
    for line in lines:
        if line.strip("\n") != "asdfsadf":
            f.write(line)