export interface EmergencyCategory {
  id: number;
  slug: string;
  title: string;
  iconPath: string;
  bgColor: string;
  textColor: string;
  severity: "critical" | "high" | "medium";
}

export interface StepItem {
  text: string;
  imageUrl?: string;
}

export interface EmergencySection {
  type: "warning" | "info" | "steps" | "notes" | "definition" | "signs";
  title?: string;
  content?: string;
  items?: string[];
  stepItems?: StepItem[];
  imageUrl?: string;
}

export interface EmergencyDetail {
  slug: string;
  title: string;
  severity: "critical" | "high" | "medium";
  sections: EmergencySection[];
}
