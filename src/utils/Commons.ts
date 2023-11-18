export const clientSymbol = Symbol('client');

export const developers = [
  //glazk0
  '247344130798256130',
  // Fading Lotus
  '149295692462948352',
];

export const titleCase = (string: string) => {
  return string
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export enum Emojis {
  Carbuncle = '<:carbuncle:1170455611780112395>',
  BlueMage = '<:BlueMage:1171859549586727003>',
  Botanist = '<:Botanist:1171859585645154378>',
  Fisher = '<:Fisher:1171859587104772158>',
  Miner = '<:Miner:1171859589659107378>',
  Alchemist = '<:Alchemist:1171859630645858385>',
  Armorer = '<:Armorer:1171859632130637854>',
  Blacksmith = '<:Blacksmith:1171859634177445980>',
  Carpenter = '<:Carpenter:1171859635620298763>',
  Culinarian = '<:Culinarian:1171859637969113108>',
  Goldsmith = '<:Goldsmith:1171859639508402286>',
  Leatherworker = '<:Leatherworker:1171859641559429222>',
  Weaver = '<:Weaver:1171859642628980878>',
  Bard = '<:Bard:1171859721544806542>',
  BlackMage = '<:BlackMage:1171859722647912468>',
  Dancer = '<:Dancer:1171859725328076861>',
  Dragoon = '<:Dragoon:1171859727593001000>',
  Machinist = '<:Machinist:1171859728708681728>',
  Monk = '<:Monk:1171859729673375817>',
  Ninja = '<:Ninja:1171859731984416808>',
  Reaper = '<:Reaper:1171859733272084491>',
  RedMage = '<:RedMage:1171859734618460281>',
  Samurai = '<:Samurai:1171859736589783100>',
  Summoner = '<:Summoner:1171859767652778024>',
  Astrologian = '<:Astrologian:1171859884707434597>',
  Sage = '<:Sage:1171859886305460284>',
  Scholar = '<:Scholar:1171859888381640855>',
  WhiteMage = '<:WhiteMage:1171859890269073492>',
  DarkKnight = '<:DarkKnight:1171859949165482005>',
  Gunbreaker = '<:Gunbreaker:1171859950528630936>',
  Paladin = '<:Paladin:1171859952365740132>',
  Warrior = '<:Warrior:1171859953468837888>',
  Gladiator = '<:Gladiator:1171859987899879484>',
  Marauder = '<:Marauder:1171860007936086076>',
  Conjurer = '<:Conjurer:1171860049887510609>',
  Arcanist = '<:Arcanist:1171860093285965876>',
  Archer = '<:Archer:1171860094686859284>',
  Lancer = '<:Lancer:1171860096582684746>',
  Pugilist = '<:Pugilist:1171860097870340117>',
  Rogue = '<:Rogue:1171860099434823772>',
  Thaumaturge = '<:Thaumaturge:1171860100831527043>',
  DPSRole = '<:DPSRole:1171860144074797078>',
  HealerRole = '<:HealerRole:1171860145169514496>',
  TankRole = '<:TankRole:1171860147191169044>',
  HopOff = '<a:hopoff:1172227488890490901>',
  HopOn = '<a:hopon:1172227490501099651>',
  Moogle = '<a:moogle:1172227493114159126>',
  FPointer = '<:Pointer:1172230204987551765>',
  BPointer = '<:BPointer:1173723631042445403>',
  Universalis = '<:universalis:1173731858056486922>',
  UniversalisAlt = '<:UniversalisAlt:1173736330837114930>',
  Gil = '<:Gil:1173737695474884748>',
}
