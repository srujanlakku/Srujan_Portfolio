export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  category: "Databases" | "AI & DS" | "Software Methodology";
}

export const certificationsData: Certification[] = [
  {
    title: "SQL Course",
    issuer: "Intellipaat",
    date: "2023",
    category: "Databases"
  },
  {
    title: "Data Science Certification",
    issuer: "Intellipaat",
    date: "2023",
    category: "AI & DS"
  },
  {
    title: "Python Training",
    issuer: "Intellipaat",
    date: "2023",
    category: "AI & DS"
  },
  {
    title: "Agile Explorer",
    issuer: "IBM",
    date: "2024",
    credentialId: "IBM-AG-EXP-9402",
    category: "Software Methodology"
  },
  {
    title: "AI for Everyone",
    issuer: "Coursera (DeepLearning.AI)",
    date: "2023",
    category: "AI & DS"
  }
];
