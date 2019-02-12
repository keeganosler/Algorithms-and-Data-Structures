# this program implements a bubblesort algorithm
# in bubblesort, each pair of adjacent elements is compared and the elements are swapped if they are not in the correct order. this continues until everything is properly ordered

def bubble_sort(list):
    for pair in range(len(list)-1, 0, -1): #iterate over each pair in the list
        for i in range(pair): #iterate over each item in the pair
            if(list[i]>list[i+1]): #if unordered, create temp, switch elements
                temp = list[i]
                list[i] = list[i+1]
                list[i+1] = temp

#example list to test
list = [19,2,31,45,6,11,121,27]
bubble_sort(list)
print(list)