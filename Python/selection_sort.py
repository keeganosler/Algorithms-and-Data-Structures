# this program implements selection sort
# selection sort works by finding the minimum value in a given list and moving list value to a sorted list, then repeating this process for the remaining elements

def selection_sort(list):
    for i in range(len(list)):
        min_val = i
        for j in range(i+1, len(list)):
            if(list[min_val] > list[j]):
                list[i], list[min_val] = list[min_val], list[i]

#list for testing
l = [19,2,31,45,30,11,121,27]
selection_sort(l)
print(l)