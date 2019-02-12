# this program implements insertion sort
# insertion sort works by searching for the proper position for an element in an already sorted list

def insertion_sort(list):

    for i in range(1, len(list)): #situate variables
        j = i-1
        next_element = list[i]

    while((list[j] > next_element) and (j >= 0)): #compare and sort elements, moving down the list
        list[j+1] = list[j]
        j = j-1

    list[j+1] = next_element #sets next element to use


#list for testing
alist = [19, 2, 31, 45, 30, 11, 121, 27]
insertion_sort(alist)
print(alist)