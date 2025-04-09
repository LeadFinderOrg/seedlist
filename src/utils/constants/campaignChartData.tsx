export interface EmailCampaignData {
  date: string;
  sent: number;
  totalOpens: number;
  uniqueOpens: number;
  linksClicked: number;
  totalReplies: number;
}

export interface ChartSeries {
  id: string;
  color: string;
  data: { x: string; y: number }[];
}

export const CAMPAIGN_CHART_COLORS = {
  BLUE: "#3B82F6",
  YELLOW: "#EAB308",
  LIGHT_GREEN: "#A3E635",
  TEAL: "#2DD4BF",
  INDIGO: "#4F46E5",
};

export const DUMMY_CHART_DATA: EmailCampaignData[] = [
  {
    date: "01 Oct",
    sent: 90,
    totalOpens: 18,
    uniqueOpens: 12,
    linksClicked: 8,
    totalReplies: 5,
  },
  {
    date: "05 Oct",
    sent: 65,
    totalOpens: 22,
    uniqueOpens: 15,
    linksClicked: 10,
    totalReplies: 6,
  },
  {
    date: "10 Oct",
    sent: 40,
    totalOpens: 25,
    uniqueOpens: 18,
    linksClicked: 12,
    totalReplies: 18,
  },
  {
    date: "15 Oct",
    sent: 45,
    totalOpens: 20,
    uniqueOpens: 15,
    linksClicked: 10,
    totalReplies: 5,
  },
  {
    date: "20 Oct",
    sent: 60,
    totalOpens: 18,
    uniqueOpens: 12,
    linksClicked: 17,
    totalReplies: 14,
  },
  {
    date: "25 Oct",
    sent: 70,
    totalOpens: 15,
    uniqueOpens: 10,
    linksClicked: 55,
    totalReplies: 3,
  },
  {
    date: "01 Nov",
    sent: 75,
    totalOpens: 20,
    uniqueOpens: 15,
    linksClicked: 8,
    totalReplies: 34,
  },
  {
    date: "05 Nov",
    sent: 85,
    totalOpens: 25,
    uniqueOpens: 18,
    linksClicked: 10,
    totalReplies: 25,
  },
  {
    date: "10 Nov",
    sent: 100,
    totalOpens: 30,
    uniqueOpens: 50,
    linksClicked: 12,
    totalReplies: 16,
  },
  {
    date: "13 Nov",
    sent: 90,
    totalOpens: 24,
    uniqueOpens: 90,
    linksClicked: 0,
    totalReplies: 40,
  },
  {
    date: "15 Nov",
    sent: 110,
    totalOpens: 26,
    uniqueOpens: 18,
    linksClicked: 19,
    totalReplies: 5,
  },
  {
    date: "20 Nov",
    sent: 95,
    totalOpens: 22,
    uniqueOpens: 16,
    linksClicked: 39,
    totalReplies: 4,
  },
];

export const CHART_VALUE: ChartSeries[] = [
  {
    id: "Sent",
    color: CAMPAIGN_CHART_COLORS.BLUE,
    data: DUMMY_CHART_DATA.map((d) => ({ x: d.date, y: d.sent })),
  },
  {
    id: "Total Opens",
    color: CAMPAIGN_CHART_COLORS.YELLOW,
    data: DUMMY_CHART_DATA.map((d) => ({ x: d.date, y: d.totalOpens })),
  },
  {
    id: "Unique Opens",
    color: CAMPAIGN_CHART_COLORS.LIGHT_GREEN,
    data: DUMMY_CHART_DATA.map((d) => ({ x: d.date, y: d.uniqueOpens })),
  },
  {
    id: "Links Clicked",
    color: CAMPAIGN_CHART_COLORS.TEAL,
    data: DUMMY_CHART_DATA.map((d) => ({ x: d.date, y: d.linksClicked })),
  },
  {
    id: "Total Replies",
    color: CAMPAIGN_CHART_COLORS.INDIGO,
    data: DUMMY_CHART_DATA.map((d) => ({ x: d.date, y: d.totalReplies })),
  },
];
