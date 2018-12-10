'use strict';

test('test_string', () => {
    expect('strict').toEqual('strict');
});

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