export interface Info {
  name: string;
  population: Population;
  needs: Needs;
}

export type PopulationType = 'beggars' |
  'peasants' |
  'citizens' |
  'patricians' |
  'noblemen' |
  'nomads' |
  'envoys';

export type NeedsType = 'fish' |
  'spices' |
  'bread' |
  'meat' |
  'most' |
  'beer' |
  'wine' |
  'garments' |
  'jerkins' |
  'furCoats' |
  'robes' |
  'books' |
  'candleSticks' |
  'glasses' |
  'dates' |
  'milk' |
  'carpets' |
  'coffee' |
  'pearlNecklaces' |
  'perfume' |
  'marzipan';

export type Population = Record<PopulationType, number>;

export type Needs = Record<NeedsType, number>;
