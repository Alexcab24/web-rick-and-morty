export interface Character {
  id: string;
  name: string;
  image: string;
  species: string;
}

export interface CharacterDetails {
  id: string;
  name: string;
  species: string;
  status: string;
  gender: string;
  episode: Array<{
    id: string;
  }>;
  location: {
    name: string;
  };
  image: string;
}


export interface Episode {
  id: string;
  name: string;
  episode: string;
  air_date: string;
}
