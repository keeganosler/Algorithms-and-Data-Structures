# this program implements a mergesort algorithm
# merge sort divides the list into equal halves then combines them in a sorted manner

def merge_sort(list):

    if(len(list) <= 1):
        return list #list is already sorted

    mid = len(list)//2 #defines the midpoint and slices the list into two halves
    left = list[:mid]
    right = list[mid:]

    left = merge_sort(left)
    right = merge_sort(right) #recursively mergesort the left and right lists

    return merge(left,right)


def merge(left, right):

    result = []

    while(len(left) != 0 and len(right) != 0): #merge the two lists together
        if(left[0] < right[0]):
            result.append(left[0])
            left.remove(left[0])
        else:
            result.append(right[0])
            right.remove(right[0])
    
    if(len(left) == 0):
        result = result + right
    else:
        result = result + left
    
    return result

#example list for testing
list = [64, 34, 25, 12, 22, 11, 90]
print(merge_sort(list))