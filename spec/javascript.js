export function styling() {
  const object = {
    shouldBe: {
      camelCase: 1,
      strings: 'withSingleQuotes',
      withDanglingComma: 'comma',
    },
  }; // With dangling comment
  const inlineArray = ['inline', 'array'];
  const multilineArray = [
    'this',
    'is',
    'a',
    'multiline',
    'array',
    'very',
    'big',
    'indeed',
  ];

  let groupVisuallyLetAndConst = 'but space with 1 line after const';

  return {
    object,
    inlineArray,
    multilineArray,
    groupVisuallyLetAndConst,
  };
}
