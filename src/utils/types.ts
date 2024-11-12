export interface DataEntry {
  name: string;
  role: string;
  imageUrl: string;
  url?: string;
}

export interface DataProps {
  data: DataEntry[];
}

export interface InfoProps {
  title: string;
  description: string;
}

export interface PageProps {
  info: InfoProps;
}
