const random = ["1", "3", "1", "3", "2", "4", "1", "4" ];


function printRepeating(arr, size)
{
    let count = new Array(size);
    count.fill(0);
    let i;

    document.write("Repeating elements are ");
    for (i = 0; i < size; i++)
    {
        if (count[arr[i]] == 1)
            document.write(arr[i] + " ");
        else
            count[arr[i]]++;
    }
}

let arr_size = arr.length;
console.log(printRepeating(arr, arr_size));