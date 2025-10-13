import { addUnitSignToValueBy, processValueBy } from "./process-value-by";

describe('ProcessValueBy suite tests', () => {
  const mockData: Record<string, string> = {
    rotation_period: '23',
    orbital_period: '304',
    height: '172',
    mass: '77',
    diameter: '10465',
    cost_in_credits: '123000',
    length: '120000',
  };

  it('Should add correctly the sufix to all values', () => {
    Object.entries(mockData).forEach(([key, value]) => {
      const result = processValueBy(key, value);
      expect(result).toBe(`${value} ${addUnitSignToValueBy?.[key]}`);
    })
  })

  it('Should do nothing if the key does not exist on processValueBy', () => {
    const result = processValueBy('keyThatDoesNotRequireToBeProcess', 'data');
    expect(result).toBe('data');
  })
});
