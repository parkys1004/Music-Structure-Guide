export interface Template {
  id: number;
  cat: string;
  title: string;
  titleKo: string;
  desc: string;
  icon: string;
  steps: string[];
}

export interface Sample {
  name: string;
  desc: string;
}

export interface BlockSamples {
  [key: string]: Sample[];
}
