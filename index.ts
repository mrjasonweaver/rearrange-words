/**
 * Rearrange the words in text such that all words are rearranged in an increasing order of their lengths.
 * If two words have the same length, arrange them in their original order.
 * @link https://leetcode.com/problems/rearrange-words-in-a-sentence/description/
 */

export function rearrangeWords(sentence: string): string {
    const sentenceArray = sentence.split(" ");
    sentenceArray.sort((a, b) => a.length - b.length)
    const newSentence = sentenceArray.join(" ").toLowerCase();
    return newSentence.charAt(0).toUpperCase() + newSentence.slice(1);
}