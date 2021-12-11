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

export type ResourcesType = NeedsType |
  'flour' |
  'wheat' |
  'cattle' |
  'salt' |
  'coal' |
  'brine' |
  'herbs' |
  'grapes' |
  'barrels' |
  'wood' |
  'iron' |
  'ironOre' |
  'hemp' |
  'animalHides' |
  'fur' |
  'silk' |
  'gold' |
  'goldOre' |
  'indigo' |
  'paper' |
  'brass' |
  'copper' |
  'candles' |
  'beeswax' |
  'quartz' |
  'coffeeBeans' |
  'pearls' |
  'roseOil' |
  'almonds' |
  'sugar' |
  'sugarCane'
  ;

export interface ProductionChainDto {
  resource: ResourcesType;
  factor: number;
  niceFactor: number;
  singleFactor: number;
  requires: ProductionChainDto[];
  factory: string;
}
