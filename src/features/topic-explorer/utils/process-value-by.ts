const addUnitSignToValueBy: Record<string, string> = {
  rotation_period: 'hs',
  orbital_period: 'days',
  height: 'cm',
  mass: 'kg',
  diameter: 'km',
  cost_in_credits: 'R',
  length: 'cm',
};

export const processValueBy = (key: string, value: string) => {
  return addUnitSignToValueBy?.[key]
    ? `${value} ${addUnitSignToValueBy[key]}`
    : value
};
