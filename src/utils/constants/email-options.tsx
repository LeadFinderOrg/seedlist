import { Ban, CircleAlert, ListChecks, LucideIcon, Zap } from "lucide-react";

const ICON_COLOR_BLUE = "#1d4ed8";
const ICON_FILL_BLUE = "#1d4ed8";
const INACTIVE_COLOR = "#6b7280";
const WARNING_COLOR = "#e9a616";
const ERROR_COLOR = "#e96016";

export interface StatusOption {
  value: string;
  label: string;
  icon: LucideIcon;
  color?: string;
  fill?: string;
}

export interface SortOption {
  value: string;
  label: string;
}

export const STATUS_OPTIONS: StatusOption[] = [
  {
    value: 'all',
    label: 'All Statuses',
    icon: ListChecks,
    color: INACTIVE_COLOR,
    fill: 'none'
  },
  {
    value: 'warmup-active',
    label: 'Warmup Active',
    icon: Zap,
    color: ICON_COLOR_BLUE,
    fill: ICON_FILL_BLUE
  },
  {
    value: 'warmup-paused',
    label: 'Warmup Paused',
    icon: Zap,
    color: INACTIVE_COLOR,
    fill: 'none'
  },
  {
    value: 'no-custom-tracking',
    label: 'No Custom Tracking Domain',
    icon: Ban,
    color: WARNING_COLOR,
    fill: 'none'
  },
  {
    value: 'has-errors',
    label: 'Has Errors',
    icon: CircleAlert,
    color: ERROR_COLOR,
    fill: 'none'
  }
];

export const SORT_OPTIONS: SortOption[] = [
  { value: 'no-sorting', label: 'No Sorting' },
  { value: 'sort-by-newest', label: 'Sort by Newest' },
  { value: 'sort-by-oldest', label: 'Sort by Oldest' },
  { value: 'alphabetical', label: 'Alphabetical' },
  { value: 'reverse-alphabetical', label: 'Reverse Alphabetical' }
];
