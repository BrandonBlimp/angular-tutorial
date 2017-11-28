import datetime
from math import ceil

# TODO-Brandon: make a better way to input or change roster this sucks lol
roster = [("Stephanie Chung", datetime.time(0,31,38)), ("Nicole Wong", datetime.time(0,35,17)), ("Bryanne Chan", datetime.time(0,35,8)), ("Mine Celebi", datetime.time(0,31,13)), ("Cherrie Ng", datetime.time(0,30,41)), ("Rachel Lee", datetime.time(0,26,54)), ("Eliza Lim", datetime.time(0,28,48)), ("Amanda Cheung", datetime.time(0,35,28)), ("Amy Cheng", datetime.time(0,31,54)), ("Samantha Lam", datetime.time(0,32,2)), ("Anika Cheng", datetime.time(0,31,53)), ("Carmen To", datetime.time(0,31,40)), ("Yuxin Zhang", datetime.time(0,33,40)), ("Owen Fan", datetime.time(0,28,51)), ("Alex Pang", datetime.time(0,26,51)), ("Andrew Lin", datetime.time(0,29,40)), ("Joey Teed", datetime.time(0,26,5)), ("Daniel Wong", datetime.time(0,27,23)), ("Alex Zhang", datetime.time(0,25,35)), ("Charlie Liu", datetime.time(0,28,39)), ("Brandon Lim", datetime.time(0,28,59)), ("Julian Lum", datetime.time(0,27,24)), ("Gregory Goana", datetime.time(0,28,15)), ("Oshi Edirisinghe", datetime.time(0,28,22))]

roster_size = len(roster)
number_of_boats = ceil(roster_size / 6)

boats = [[] for n in range(number_of_boats)]

#----------------------------------------------------------------------------------------------------
#
# greedy implementation: won't do well if we have boats that have uneven number of people.
#
#----------------------------------------------------------------------------------------------------

sorted_roster = sorted(roster, key=lambda tup: tup[1])

for i, paddler in enumerate(sorted_roster, start=0):   # default is zero
    boats[i % len(boats)].append(paddler[0])

# print resulting roster
print("Number of boats = {0}".format(number_of_boats))
for i, boat in enumerate(boats, start=1):
    print("boat {0}: ".format(i) + str(boat))


