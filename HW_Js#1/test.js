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

test('test_string_search_reg', () => {
    let str = 'I like geek talks in GeekHub';
    expect(str.search(/Geek/)).toEqual(21);
});

test('test_string_replace', () => {
    let str = 'I like geek talks in GeekHub';
    expect(str.replace(/Geek/)).toEqual(21);
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

test('test_arrays', () => {
    expect().toEqual();
});

test('test_compare_operators', () => {
    expect().toEqual();
});

test('test_equality_comparison_algorithm', () => {
    expect().toEqual();
});