// 1. Please write a function that shows the usage of closures
const closure = () =>{
    const name = "John"
    const secondName = "WIck"

    const getName = () =>{
        return name
    }

    const getSecondName = () =>{
        return secondName
    }

    return {getName, getSecondName}
}

const variable = closure()
console.log(variable.getName())

// 2. Please write a function that returns a sum of array items
// example input [9, 1, 22, 0, 2]
// example output 34

const sumArray = (array) =>{
    return array.reduce( (a,b) =>{
        return a + b
    })
}
console.log(sumArray([9, 1, 22, 0, 3]))

// 3. Please write a recursive function that flattens a list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]

const flatArray = (array) =>{
    let flat = []
    array.forEach(element =>{
        if(Array.isArray(element)){
            const nestedArray = flatArray(element)
            nestedArray.forEach(element2 =>{
                flat.push(element2)
            })
        }
        else{
            flat.push(element)
        }
    })
    return flat
}

console.log(flatArray([[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]))

// 4. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]

const commonElements = (array1, array2) =>{
    let commonArray = array1.filter(element => array2.includes(element))
    return commonArray
}

console.log(commonElements(['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']))

// 5. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']

const diffrentElements = (array1, array2) =>{
    let diffrentArray1 = array1.filter(element => !array2.includes(element))
    let diffrentArray2 = array2.filter(element => !array1.includes(element))
    return diffrentArray1.concat(diffrentArray2)
}

console.log(diffrentElements(['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']))

// 6. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]

const tuples = (array1, array2) =>{
    let tuplesArray = []
    array1 <= array2 ? array1.forEach( (item, index) => tuplesArray.push([item, array2[index]])) : array2.forEach( (item, index) => tuplesArray.push([item, array1[index]]))
    return tuplesArray
}

console.log(tuples([1,2,3], [4,5,6,7]))

// 7. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'

const path = (array, object) =>{
    return array.reduce((o,i)=> o[i], object)
}

console.log(path(['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }))

// 8. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false

const compareObjects = (object1, object2) =>{
    
    let areEqual = true
    let keys1 = Object.keys(object1)
    let keys2 = Object.keys(object2)
    if(keys1.length !== keys2.length){
        areEqual = false
    }
    keys1.forEach( item =>{
        if(object1[item] !== object2[item]){
            areEqual = false
        }
    })
    return areEqual
}

console.log(compareObjects({ a: 'b', c: 'd' }, { c: 'd', a: 'b' }))
// 9. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }

const objectWithoutKeys = (array, object) =>{
    array.forEach( item =>{
        delete object[item]
    })
    return object
} 

console.log(objectWithoutKeys(['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }))