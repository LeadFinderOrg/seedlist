export interface Variant {
  id: string;
  label: string;
  active: boolean;
  sent: number;
  opened: number;
  replied: number;
  replyRate: string;
  clicked: number;
  opportunities: number;
}

export interface StepAnalyticsData {
  id: string;
  label: string;
  sent: number;
  opened: number;
  replied: number;
  replyRate: string;
  clicked: number;
  opportunities: number;
  variants?: Variant[];
}

export const stepAnalyticsData: StepAnalyticsData[] = [
  {
    id: "step1",
    label: "Step 1",
    sent: 75,
    opened: 0,
    replied: 2,
    replyRate: "0.5%",
    clicked: 0,
    opportunities: 0,
    variants: [
      {
        id: "step1-a",
        label: "A",
        active: true,
        sent: 25,
        opened: 0,
        replied: 1,
        replyRate: "5%",
        clicked: 0,
        opportunities: 0,
      },
      {
        id: "step1-b",
        label: "B",
        active: true,
        sent: 25,
        opened: 0,
        replied: 1,
        replyRate: "5%",
        clicked: 0,
        opportunities: 0,
      },
      {
        id: "step1-c",
        label: "C",
        active: false,
        sent: 25,
        opened: 0,
        replied: 0,
        replyRate: "",
        clicked: 0,
        opportunities: 0,
      },
    ],
  },
  {
    id: "step2",
    label: "Step 2",
    sent: 75,
    opened: 0,
    replied: 2,
    replyRate: "0.5%",
    clicked: 0,
    opportunities: 0,
    variants: [
      {
        id: "step2-a",
        label: "A",
        active: true,
        sent: 25,
        opened: 0,
        replied: 1,
        replyRate: "5%",
        clicked: 0,
        opportunities: 0,
      },
    ],
  },
  {
    id: "step3",
    label: "Step 3",
    sent: 75,
    opened: 0,
    replied: 2,
    replyRate: "0.5%",
    clicked: 0,
    opportunities: 0,
    variants: [
      {
        id: "step3-a",
        label: "A",
        active: true,
        sent: 25,
        opened: 0,
        replied: 1,
        replyRate: "5%",
        clicked: 0,
        opportunities: 0,
      },
      {
        id: "step3-b",
        label: "B",
        active: false,
        sent: 25,
        opened: 0,
        replied: 1,
        replyRate: "25%",
        clicked: 0,
        opportunities: 0,
      },
    ],
  },
];
