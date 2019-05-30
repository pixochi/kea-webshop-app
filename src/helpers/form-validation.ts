export const email = (value: string) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined;

export const maxLength = (max: number) => (value: string) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const minLength = (min: number) => (value: string) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;

const FIRST_LOWER_CASE_LETTER_CHAR_CODE = 97;
const LAST_LOWER_CASE_LETTER_CHAR_CODE = 122;

export const allLowerCaseLetters = (words: string[]) => {
  const lowerCaseWords = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let lowerCaseCount = 0;

    for (let j = 0; j < word.length; j++) {
      const letter = word[j];

      if (letter.charCodeAt(0) >= FIRST_LOWER_CASE_LETTER_CHAR_CODE || letter.charCodeAt(0) <= LAST_LOWER_CASE_LETTER_CHAR_CODE) {
        lowerCaseCount++;
      }
    }

    if (lowerCaseCount === word.length) {
      lowerCaseWords.push(word);
    }
  }

  return lowerCaseWords;
};
