import {Injectable} from '@angular/core';
import {ProductionChainDto, ResourcesType} from "./_models/Modes";

interface ProductionChain {
  requires?: ProductionChainElement[];
  factory: string;
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
      requires: [{resource: 'cattle', factor: 2}, {resource: 'salt', factor: 0.5}]
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
      requires: [{resource: 'grapes', factor: 0.333333333}, {resource: 'barrels', factor: 1}]
    },
    grapes: {
      factory: 'Vineyard'
    },
    barrels: {
      factory: 'Barrel Cooperage',
      requires: [{resource: 'wood', factor: 1}, {resource: 'iron', factor: 0.5}]
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
      requires: [{resource: 'salt', factor: 0.5}, {resource: 'animalHides', factor: 2}]
    },
    animalHides: {
      factory: 'Pig Farm'
    },
    furCoats: {
      factory: 'Furrier\'s Workshop',
      requires: [{resource: 'fur', factor: 1}, {resource: 'salt', factor: 0.333333333}]
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
      requires: [{resource: 'indigo', factor: 2}, {resource: 'paper', factor: 0.5}]
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
      requires: [{resource: 'brass', factor: 0.75}, {resource: 'candles', factor: 1.5}]
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
      requires: [{resource: 'brass', factor: 0.75}, {resource: 'quartz', factor: 0.75}]
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
    }
  };

  constructor() {
  }


  public getProductionChain(type: ResourcesType, factor: number = 1): ProductionChainDto {
    const productionChain = this.productionChains[type];
    const requires: ProductionChainDto[] = [];
    if (productionChain.requires) {
      for (const requiresElement of productionChain.requires) {
        requires.push(this.getProductionChain(requiresElement.resource, requiresElement.factor * factor))
      }
    }
    return {
      resource: type,
      factory: productionChain.factory,
      factor: factor,
      requires: requires
    };
  }
}
