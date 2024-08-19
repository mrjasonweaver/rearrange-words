import {describe, expect, it} from '@jest/globals';
import {rearrangeWords} from './index';

describe('rearrangeWords function', () => {
    it('should rearrange the words by length', () => {
        const sentence_one = 'Leetcode is cool';
        const result = rearrangeWords(sentence_one);
        expect(result).toBe('Is cool leetcode');
    });

    it('should rearrange the words by length', () => {
        const sentence_two = 'Keep calm and code on';
        const result = rearrangeWords(sentence_two);
        expect(result).toBe('On and keep calm code');
    })

    it('should rearrange the words by length', () => {
        const sentence_three = 'To be or not to be';
        const result = rearrangeWords(sentence_three);
        expect(result).toBe('To be or to be not');
    })
});