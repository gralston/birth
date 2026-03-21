/**
 * Lightweight zip code to county mapping.
 * Maps zip code prefixes (first 3 digits) to county names for supported states.
 * This covers the vast majority of cases. For zip codes that span county lines,
 * we pick the most populous county for that prefix.
 */

// California zip prefix (3 digits) to county mapping
const CA_ZIP_TO_COUNTY: Record<string, string> = {
  "900": "Los Angeles", "901": "Los Angeles", "902": "Los Angeles",
  "903": "Los Angeles", "904": "Los Angeles", "905": "Los Angeles",
  "906": "Los Angeles", "907": "Los Angeles", "908": "Los Angeles",
  "910": "Los Angeles", "911": "Los Angeles", "912": "Los Angeles",
  "913": "Los Angeles", "914": "Los Angeles", "915": "Los Angeles",
  "916": "Los Angeles", "917": "Los Angeles", "918": "Los Angeles",
  "919": "San Diego", "920": "San Diego", "921": "San Diego",
  "922": "Imperial", "923": "San Bernardino", "924": "San Bernardino",
  "925": "Riverside", "926": "Orange", "927": "Orange", "928": "Orange",
  "930": "Santa Barbara", "931": "Santa Barbara",
  "932": "Kern", "933": "Kern",
  "934": "San Luis Obispo",
  "935": "Tulare", "936": "Fresno", "937": "Fresno",
  "938": "Fresno",
  "939": "Monterey", "940": "San Francisco",
  "941": "San Mateo",
  "942": "Sacramento", "943": "Sacramento",
  "944": "San Francisco", "945": "Alameda", "946": "Alameda",
  "947": "Contra Costa",
  "948": "Marin", "949": "Marin",
  "950": "Santa Clara", "951": "Santa Clara",
  "952": "San Joaquin", "953": "Stanislaus",
  "954": "Sonoma",
  "955": "Humboldt", "956": "Sacramento",
  "957": "Yolo", "958": "Sacramento",
  "959": "Placer",
  "960": "Shasta", "961": "Butte",
  "962": "Sutter",
  "963": "Napa",
  "964": "Santa Cruz",
  "965": "Merced",
  "966": "Kings",
  "967": "Madera",
  "968": "Ventura", "969": "Ventura",
  "970": "Santa Cruz",
  "971": "Solano",
  "972": "San Bernardino",
  "973": "Riverside",
  "974": "San Bernardino",
  "975": "Riverside",
  "976": "San Bernardino",
  "977": "San Bernardino",
  "978": "Riverside",
  "979": "San Bernardino",
  "980": "San Bernardino",
  "981": "Los Angeles",
  "982": "Los Angeles",
  "983": "Los Angeles",
  "984": "Los Angeles",
  "985": "Los Angeles",
  "986": "Los Angeles",
  "987": "Los Angeles",
  "988": "Los Angeles",
  "989": "Los Angeles",
  "990": "Los Angeles",
  "991": "Los Angeles",
  "992": "Los Angeles",
  "993": "Los Angeles",
  "994": "Los Angeles",
  "995": "San Diego",
};

// Texas zip prefix (3 digits) to county mapping
const TX_ZIP_TO_COUNTY: Record<string, string> = {
  "750": "Dallas", "751": "Dallas", "752": "Dallas", "753": "Dallas",
  "754": "Dallas",
  "755": "Denton", "756": "Denton",
  "757": "Collin",
  "758": "Bell",
  "759": "McLennan",
  "760": "Tarrant", "761": "Tarrant", "762": "Tarrant",
  "763": "Parker",
  "764": "Johnson",
  "765": "Ellis",
  "766": "Smith",
  "767": "Gregg",
  "768": "Bowie",
  "769": "Grayson",
  "770": "Harris", "771": "Harris", "772": "Harris", "773": "Harris",
  "774": "Harris",
  "775": "Fort Bend",
  "776": "Brazoria",
  "777": "Galveston",
  "778": "Montgomery",
  "779": "Brazos",
  "780": "Bexar", "781": "Bexar", "782": "Bexar",
  "783": "Nueces",
  "784": "Cameron",
  "785": "Hidalgo",
  "786": "Travis", "787": "Travis",
  "788": "Hays",
  "789": "Williamson",
  "790": "Lubbock", "791": "Lubbock",
  "792": "Potter",
  "793": "Midland", "794": "Ector",
  "795": "Taylor",
  "796": "Tom Green",
  "797": "Wichita",
  "798": "El Paso", "799": "El Paso",
  "885": "El Paso",
};

const STATE_ZIP_MAPS: Record<string, Record<string, string>> = {
  CA: CA_ZIP_TO_COUNTY,
  TX: TX_ZIP_TO_COUNTY,
};

/**
 * Look up the county for a given zip code and state.
 * Returns the county name or undefined if not found.
 */
export function getCountyFromZip(
  zipCode: string,
  stateCode: string
): string | undefined {
  const map = STATE_ZIP_MAPS[stateCode];
  if (!map) return undefined;

  const prefix = zipCode.slice(0, 3);
  return map[prefix];
}

/**
 * Check if we have zip-to-county data for a given state.
 */
export function hasZipLookup(stateCode: string): boolean {
  return stateCode in STATE_ZIP_MAPS;
}
