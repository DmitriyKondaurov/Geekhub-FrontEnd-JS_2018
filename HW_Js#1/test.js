'use strict';

// -----------------------STRINGS----------------------------------------
test('test_string_fromCharCode', () => {
    expect(String.fromCharCode(71, 101, 101, 107, 32, 72, 117, 98)).toEqual('Geek Hub');
});

test('test_string_length', () => {
    let str = 'test';
    expect(str.length).toEqual(4);
});

test('test_string_repeat', () => {
    let str = 'test ';
    expect(str.repeat(3)).toEqual('test test test ');
});

test('test_string_addition_of_string_numbers', () => {
    let str = '5+5';
    expect(eval(str)).toEqual(10);
});

test('test_string_search_no_reg', () => {
    let str = 'I like geek talks in GeekHub';
    expect(str.search(/Geek/i)).toEqual(7);
});

test('test_string_numbers_toString', () => {
    let x = 5;
    expect(x.toString()).toEqual('5');
});

test('test_string_search_reg', () => {
    let str = 'I like geek talks in GeekHub';
    expect(str.search(/Geek/)).toEqual(21);
});

test('test_string_replace', () => {
    let str = 'I like geek talks in GeekHub';
    expect(str.replace('Hub', 'talks')).toEqual('I like geek talks in Geektalks');
});

test('test_string_upperCase', () => {
    let str = 'I like geek talks in GeekHub';
    expect(str.toUpperCase()).toEqual('I LIKE GEEK TALKS IN GEEKHUB');
});

test('test_string_concat', () => {
    let str0 = 'like\'s geek talks in GeekHub';
    let str1 = 'Dima';
    let res = '';
    expect(res.concat(str1+' ', str0)).toEqual("Dima like's geek talks in GeekHub");
});

test('test_string_cut', () => {
    let str = 'I like geek talks in GeekHub';
    expect(str.slice(21, 25)).toEqual('Geek');
});

test('test_string_split', () => {
    let str = 'I like geek talks in GeekHub';
    expect(str.split(' ')).toEqual(["I", "like", "geek", "talks", "in", "GeekHub"]);
});

test('test_string_trim', () => {
    let str = '     I like geek talks in GeekHub             ';
    expect(str.trim()).toEqual('I like geek talks in GeekHub');
});

// -----------------NUMBERS--------------------------
test('test_numbers_parseFloat', () => {
    expect(Number.parseFloat('5.0')).toEqual(5);
});

test('test_numbers_parseInt', () => {
    expect(Number.parseInt('5.5')).toEqual(5);
});

test('test_numbers_isFinite', () => {
    expect(Number.isFinite(5.5)).toEqual(true);
});

test('test_numbers_isInteger', () => {
    expect(Number.isInteger(5.5)).toEqual(false);
});

test('test_numbers_isNaN', () => {
    expect(Number.isNaN('5.5')).toEqual(false);
});

test('test_numbers_isSafeInteger', () => {
    expect(Number.isSafeInteger(5)).toEqual(true);
});

test('test_numbers_to_fixed', () => {
    let x = 5;
    expect(x.toFixed(2)).toEqual('5.00');
    expect(x.toFixed(6)).toEqual('5.000000');
    expect(x.toPrecision(2)).toEqual('5.0');
    expect(x.valueOf()).toEqual(5);

});

test('test_arrays', () => {
    let arr = ['a1', 'b1', 'c1'],
        arrCp = ['e1', 'f1', 'd1'],
        res;

    expect(Array.isArray(arr)).toEqual(true);
    // проверка на массив

    expect(arr.concat(arrCp)).toEqual(["a1", "b1", "c1", "e1", "f1", "d1"]);
    // Joins two or more arrays, and returns a copy of the joined arrays

    expect(arr.concat(arrCp) == "a1,b1,c1,e1,f1,d1").toEqual(true);
    // при сравнении массива со строкой, массив преобразовывается в строку

    expect(arr.push('xx')).toEqual(4);
    //Adds new elements to the end of an array, and returns the new length

    expect(Array.from('abcd1')).toEqual(['a','b','c','d','1']);
    //Adds new elements to the end of an array, and returns the new length

    expect(arr.entries().next().value).toEqual([0, 'a1']);
    //Returns a key/value pair Array Iteration Object

    expect(arr.copyWithin(3, 1, 2)).toEqual(["a1", "b1", "c1", "b1"]);
    //Copies array elements within the array, to and from specified positions

    expect(arr.fill('xx2')).toEqual(['xx2', 'xx2', 'xx2', 'xx2']);
    //Fill the elements in an array with a static value

    arr = ['a1', 'b1', 'c2', 'd2', 'f1'];
    expect(arr.filter(
        function condition(x) {
            return x.includes('2');
        }
    )).toEqual(['c2', 'd2']);
    //Creates a new array with every element in an array that pass a test

    expect(arr.find(
        function condition(x) {
            return x >= 'c2';
        }
    )).toEqual('c2');
    //Returns the value of the first element in an array that pass a test

    expect(arr.findIndex(
        function condition(x) {
            return x >= 'c2';
        }
    )).toEqual(2);
    //Returns the index of the first element in an array that pass a test


    expect(arr.indexOf('c2')).toEqual(2);
    //Search the array for an element and returns its position


    expect(arr.join(', ')).toEqual('a1, b1, c2, d2, f1');
    //Joins all elements of an array into a string

    expect(Object.keys(arr)).toEqual(['0', '1', '2', '3', '4']);
    //Returns a Array Iteration Object, containing the keys of the original array

    expect(arr.lastIndexOf('c2')).toEqual(2);
    //Search the array for an element, starting at the end, and returns its position

    arr = ['a1', 'b1', 'c1', 'd1', 'f1'];
    let newArr = [];
    expect((arr.forEach(
        function condition(value, index) {
            newArr[index] = value;
            // return newArr.includes('1');
        }
    )) == true).toEqual(false);
    //Calls a function for each array element

    arr = [4, 9, 16, 25];
    expect(arr.map(Math.sqrt)).toEqual([2, 3, 4, 5]);
    //Creates a new array with the result of calling a function for each array element

    arr = [4, 9, 16, 25];
    expect(arr.pop()).toEqual(25);
    //Removes the last element of an array, and returns that element

});




test('test_compare_operators', () => {
    expect(2 + 2).toEqual( 4 );
    expect( (2 + 2) * 2).toEqual( 8 );
    expect( 2 - 2 + 8 / 2  ).toEqual( 4 );
    expect( 100 != 101 ).toEqual(true);
    expect( 100 < 101  ).toEqual(true);
    expect( 100 <= 100  ).toEqual(true);
    expect( false < true  ).toEqual(true);
    expect( false < 1 ).toEqual(true);

});

test('test_equality_comparison_algorithm', () => {
    expect(null != 0).toEqual(true);
    expect(false+true).toEqual(1);
    expect(4 /"2").toEqual(2);
    expect(12 +'string' + 15).toEqual('12string15');
    expect('true' == true).toEqual(false);
    expect('false' === false ).toEqual(false);
    expect(5 == '5' ).toEqual(true);
    expect('5k8=' + 'date').toEqual('5k8=date');
});