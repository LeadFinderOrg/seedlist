import { useRouter } from "next/navigation";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { MoreHorizontal, Pause, Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import CampaignStats from "./CampaignStats";
import StatusBadge from "./StatusBadge";

export interface Campaign {
  id: number;
  name: string;
  status: "Active" | "Paused" | "Completed";
  stats: {
    users: number;
    sent: number;
    emails: number;
    shares: number;
  };
}

const campaigns: Campaign[] = [
  {
    id: 1,
    name: "Campaign Name 1",
    status: "Paused",
    stats: { users: 0, sent: 0, emails: 0, shares: 0 },
  },
  {
    id: 2,
    name: "Campaign Name 2",
    status: "Completed",
    stats: { users: 452, sent: 6678, emails: 539, shares: 271 },
  },
  {
    id: 3,
    name: "Campaign Name 3",
    status: "Paused",
    stats: { users: 0, sent: 0, emails: 0, shares: 0 },
  },
  {
    id: 4,
    name: "Campaign Name 4",
    status: "Active",
    stats: { users: 1236, sent: 223, emails: 62, shares: 13 },
  },
];

export function CampaignDataTable() {
  const router = useRouter();

  const handleRowClick = (id: number) => {
    router.push(`/dashboard/campaigns/${id}`);
  };

  const handleActionClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const handleMoreClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  // Define columns
  const columns: ColumnDef<Campaign>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          onClick={(event) => event.stopPropagation()}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          onClick={(event) => event.stopPropagation()}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "name",
      header: "CAMPAIGN",
      cell: ({ row }) => (
        <div className="font-medium">{row.getValue("name")}</div>
      ),
    },
    {
      accessorKey: "status",
      header: "STATUS",
      cell: ({ row }) => <StatusBadge status={row.getValue("status")} />,
    },
    {
      accessorKey: "stats",
      header: "CAMPAIGN STATS",
      cell: ({ row }) => <CampaignStats stats={row.getValue("stats")} />,
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const campaign = row.original;
        return (
          <div className="flex" onClick={(e) => e.stopPropagation()}>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={(event) => handleActionClick(event)}
            >
              {campaign.status === "Active" ? (
                <Pause className="h-5 w-5 text-red-500" />
              ) : (
                <Play className="h-5 w-5 text-blue-500" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={(event) => handleMoreClick(event)}
            >
              <MoreHorizontal className="h-5 w-5 text-gray-500 hover:text-blue-400" />
            </Button>
          </div>
        );
      },
    },
  ];

  const table = useReactTable({
    data: campaigns,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="mt-6">
      <Table className="border-b border-gray-200">
        <TableHeader className="bg-gray-100">
          <TableRow>
            {table.getHeaderGroups().map((headerGroup) =>
              headerGroup.headers.map((header) => (
                <TableHead key={header.id} className="font-bold">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className="border-b cursor-pointer"
                onClick={() => handleRowClick(row.original.id)}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No campaigns found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default CampaignDataTable;
