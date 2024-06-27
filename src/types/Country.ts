export interface Country {
  altSpellings: {
    0: string;
    1: string;
    2: string;
    length: number;
  };
  area: number;
  capital: {
    0: string;
    length: number;
  };
  capitalInfo: {
    latlng: {
      0: number;
      1: number;
      length: number;
    };
  };
  car: {
    side: string;
    signs: {
      0: string;
      length: number;
    };
  };
  cca2: string;
  cca3: string;
  ccn3: string;
  coatOfArms: {
    png?: string;
    svg?: string;
  };
  continents: {
    0: string;
    length: number;
  };
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  demonyms: {
    [key: string]: {
      f: string;
      m: string;
    };
  };
  flag: string;
  flags: {
    png: string;
    svg: string;
  };
  idd: {
    root: string;
    suffixes: {
      0: string;
      length: number;
    };
  };
  independent: boolean;
  landlocked: boolean;
  languages: {
    [key: string]: string;
  };
  latlng: {
    0: number;
    1: number;
    length: number;
  };
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  name: {
    common: string;
    nativeName: {
      [key: string]: {
        common: string;
        official: string;
      };
    };
    official: string;
  };
  population: number;
  postalCode: {
    format: string;
    regex: string;
  };
  region: string;
  startOfWeek: string;
  status: string;
  subregion: string;
  timezones: {
    0: string;
  };
  tld: {
    0: string;
    length: number;
  };
  translations: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
  unMember: boolean;
}
