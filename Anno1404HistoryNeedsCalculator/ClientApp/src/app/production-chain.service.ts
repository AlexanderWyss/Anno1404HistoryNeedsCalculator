import {Injectable} from '@angular/core';
import {ProductionChainDto, ResourcesType} from "./_models/Modes";

interface ProductionChain {
  requires?: ProductionChainElement[];
  factory: string;
  niceFactor?: number;
}

interface ProductionChainElement {
  resource: ResourcesType;
  factor: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductionChainService {

  private readonly productionChains: Record<ResourcesType, ProductionChain> = {
    fish: {
      factory: 'Fisherman\'s Hut'
    },
    spices: {
      factory: 'Spice Farm'
    },
    bread: {
      factory: 'Bakery',
      requires: [{resource: 'flour', factor: 1}]
    },
    flour: {
      factory: 'Mill',
      requires: [{resource: 'wheat', factor: 2}]
    },
    wheat: {
      factory: 'Crop Farm',
    },
    meat: {
      factory: 'Butcher\'s Shop',
      requires: [{resource: 'cattle', factor: 2}, {resource: 'salt', factor: 0.5}],
      niceFactor: 2
    },
    cattle: {
      factory: 'Cattle Farm',
    },
    salt: {
      factory: 'Salt Works',
      requires: [{resource: 'coal', factor: 1}, {resource: 'brine', factor: 1}]
    },
    coal: {
      factory: 'Charcoal Burner\'s Hut'
    },
    brine: {
      factory: 'Salt Mine'
    },
    most: {
      factory: 'Cider Farm'
    },
    beer: {
      factory: 'Brewery',
      requires: [{resource: 'herbs', factor: 1}, {resource: 'wheat', factor: 1}]
    },
    herbs: {
      factory: 'Monastery Garden'
    },
    wine: {
      factory: 'Wine Press',
      requires: [{resource: 'grapes', factor: 3}, {resource: 'barrels', factor: 1}],
      niceFactor: 2
    },
    grapes: {
      factory: 'Vineyard'
    },
    barrels: {
      factory: 'Barrel Cooperage',
      requires: [{resource: 'wood', factor: 0.67}, {resource: 'iron', factor: 0.5}]
    },
    wood: {
      factory: 'Lumberjack\'s Hut'
    },
    iron: {
      factory: 'Iron Smelter',
      requires: [{resource: 'ironOre', factor: 1}, {resource: 'coal', factor: 1}]
    },
    ironOre: {
      factory: 'Ore Mine'
    },
    garments: {
      factory: 'Weaver\'s Hut',
      requires: [{resource: 'hemp', factor: 2}]
    },
    hemp: {
      factory: 'Hemp Plantation'
    },
    jerkins: {
      factory: 'Tannery',
      requires: [{resource: 'salt', factor: 0.5}, {resource: 'animalHides', factor: 2}],
      niceFactor: 2
    },
    animalHides: {
      factory: 'Pig Farm'
    },
    furCoats: {
      factory: 'Furrier\'s Workshop',
      requires: [{resource: 'fur', factor: 1}, {resource: 'salt', factor: 0.333333333}],
      niceFactor: 3
    },
    fur: {
      factory: 'Trapper\'s Lodge'
    },
    robes: {
      factory: 'Silk Weaving Mill',
      requires: [{resource: 'silk', factor: 2}, {resource: 'gold', factor: 1}]
    },
    silk: {
      factory: 'Silk Plantation'
    },
    gold: {
      factory: 'Gold Smelter',
      requires: [{resource: 'coal', factor: 0.75}, {resource: 'goldOre', factor: 1}]
    },
    goldOre: {
      factory: 'Gold Mine'
    },
    books: {
      factory: 'Printing House',
      requires: [{resource: 'indigo', factor: 2}, {resource: 'paper', factor: 0.5}],
      niceFactor: 2
    },
    indigo: {
      factory: 'Indigo Farm'
    },
    paper: {
      factory: 'Paper Mill',
      requires: [{resource: 'wood', factor: 2}]
    },
    candleSticks: {
      factory: 'Redsmith\'s Workshop',
      requires: [{resource: 'brass', factor: 0.75}, {resource: 'candles', factor: 1.5}],
      niceFactor: 4
    },
    brass: {
      factory: 'Copper Smelter',
      requires: [{resource: 'copper', factor: 1}, {resource: 'coal', factor: 0.666666666}]
    },
    copper: {
      factory: 'Copper Mine'
    },
    candles: {
      factory: 'Candlemaker\'s Workshop',
      requires: [{resource: 'beeswax', factor: 2}, {resource: 'hemp', factor: 1}]
    },
    beeswax: {
      factory: 'Apiary'
    },
    glasses: {
      factory: 'Optican\'s Workshop',
      requires: [{resource: 'brass', factor: 0.75}, {resource: 'quartz', factor: 0.75}],
      niceFactor: 4
    },
    quartz: {
      factory: 'Quartz Quarry'
    },
    dates: {
      factory: 'Date Plantation'
    },
    milk: {
      factory: 'Goat Farm'
    },
    carpets: {
      factory: 'Carpets Workshop',
      requires: [{resource: 'silk', factor: 1}, {resource: 'indigo', factor: 1}]
    },
    coffee: {
      factory: 'Roasting House',
      requires: [{resource: 'coffeeBeans', factor: 2}]
    },
    coffeeBeans: {
      factory: 'Coffee Plantation'
    },
    pearlNecklaces: {
      factory: 'Pearl Workshop',
      requires: [{resource: 'pearls', factor: 1}]
    },
    pearls: {
      factory: 'Pearl Fisher\'s Hut'
    },
    perfume: {
      factory: 'Perfumery',
      requires: [{resource: 'roseOil', factor: 3}]
    },
    roseOil: {
      factory: 'Rose Nursery'
    },
    marzipan: {
      factory: 'Confectioner\'s Workshop',
      requires: [{resource: 'almonds', factor: 2}, {resource: 'sugar', factor: 1}]
    },
    almonds: {
      factory: 'Almond Plantation'
    },
    sugar: {
      factory: 'Sugar Mill',
      requires: [{resource: 'sugarCane', factor: 2}]
    },
    sugarCane: {
      factory: 'Sugar Cane Plantation'
    },
    ropes: {
      factory: 'Ropeyard',
      requires: [{resource: 'hemp', factor: 1}]
    },
    tools: {
      factory: 'Toolmaker\'s Workshop',
      requires: [{resource: 'iron', factor: 0.5}],
      niceFactor: 2
    },
    mosaic: {
      factory: 'Mosaic Workshop',
      requires: [{resource: 'quartz', factor: 0.9}, {resource: 'clay', factor: 2}]
    },
    clay: {
      factory: 'Clay Pit',
    },
    glass: {
      factory: 'Glass Smelter',
      requires: [{resource: 'quartz', factor: 0.375}, {resource: 'potash', factor: 0.5}],
      niceFactor: 2
    },
    potash: {
      factory: 'Forest Glassworks'
    },
    stone: {
      factory: 'Stonemason\'s Hut'
    },
    weapons: {
      factory: 'Weapon Smith',
      requires: [{resource: 'iron', factor: 1}]
    },
    cannons: {
      factory: 'Cannon Foundry',
      requires: [{resource: 'iron', factor: 0.75}, {resource: 'wood', factor: 2}]
    },
    warMachines: {
      factory: 'War Machines Workshop',
      requires: [{resource: 'ropes', factor: 1.5}, {resource: 'wood', factor: 2}]
    }
  };

  constructor() {
  }


  public getProductionChain(type: ResourcesType, factor: number, niceFactor: number = NaN, singleFactor: number = 1): ProductionChainDto {
    const productionChain = this.productionChains[type];
    if (!niceFactor && productionChain.niceFactor) {
      niceFactor = Math.ceil(factor / productionChain.niceFactor) * productionChain.niceFactor; // next factor divisible by niceFactor
    }
    const requires: ProductionChainDto[] = [];
    if (productionChain.requires) {
      for (const requiresElement of productionChain.requires) {
        requires.push(this.getProductionChain(requiresElement.resource, requiresElement.factor * factor, requiresElement.factor * niceFactor, requiresElement.factor * singleFactor))
      }
    }
    return {
      resource: type,
      factory: productionChain.factory,
      factor: factor,
      niceFactor: niceFactor,
      singleFactor: singleFactor,
      requires: requires
    };
  }

  public getResourcesWithRequirements(): ResourcesType[] {
    return Object.entries(this.productionChains).filter(([, value]) => value.requires).map(([key,]) => key as ResourcesType);
  }
}
