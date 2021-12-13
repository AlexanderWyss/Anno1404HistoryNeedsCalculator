export interface Info {
  localId: string;
  islands: IslandInfo[];
}

export  interface SavedIsland extends Needs {
  id: string;
  name: string;
}

export interface IslandInfo {
  id: string;
  population: Population;
  needs: Needs;
  savedIsland?: SavedIsland;
}

export type PopulationType = 'beggars' |
  'peasants' |
  'citizens' |
  'patricians' |
  'noblemen' |
  'nomads' |
  'envoys';

export const needs = ['fish',
  'spices',
  'bread',
  'meat',
  'most',
  'beer',
  'wine',
  'garments',
  'jerkins',
  'furCoats',
  'robes',
  'books',
  'candleSticks',
  'glasses',
  'dates',
  'milk',
  'carpets',
  'coffee',
  'pearlNecklaces',
  'perfume',
  'marzipan'] as const;
export type NeedsType = typeof needs[number];

export type Population = Record<PopulationType, number>;

export type Needs = Record<NeedsType, number>;

export const resources = [...needs,
  'flour',
  'wheat',
  'cattle',
  'salt',
  'coal',
  'brine',
  'herbs',
  'grapes',
  'barrels',
  'wood',
  'iron',
  'ironOre',
  'hemp',
  'animalHides',
  'fur',
  'silk',
  'gold',
  'goldOre',
  'indigo',
  'paper',
  'brass',
  'copper',
  'candles',
  'beeswax',
  'quartz',
  'coffeeBeans',
  'pearls',
  'roseOil',
  'almonds',
  'sugar',
  'sugarCane',
  'ropes',
  'tools',
  'mosaic',
  'clay',
  'potash',
  'glass',
  'stone',
  'weapons',
  'cannons',
  'warMachines'
] as const;

export type ResourcesType = typeof resources[number];

export interface ProductionChainDto {
  resource: ResourcesType;
  factor: number;
  niceFactor: number;
  singleFactor: number;
  requires: ProductionChainDto[];
  factory: string;
}
