export interface Character {
  id: string;
  name: string;
  image: string;
  species: string;
}

export interface CharacterDetails {
  id: string;
  name: string;
  image: string;
  species: string;
  gender: string;
  status: string;
  location: {
    name: string;
  };
  episode: Array<{
    id: string;
  }>;
}


export interface Episode {
  id: string;
  name: string;
  episode: string;
  air_date: string;
}
