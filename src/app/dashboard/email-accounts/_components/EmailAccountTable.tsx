import { useState } from "react";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Zap
} from "lucide-react";

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

import EmailAccountDrawer from "./EmailAccountDrawer";
import { EmailTableData } from "./EmailAccountsRoot";

interface EmailAccountTableProps {
  data: EmailTableData[];
  loading: boolean;
}

const EmailAccountTable: React.FC<EmailAccountTableProps> = ({
  data,
  loading,
}) => {
  const [selectedRow, setSelectedRow] = useState<EmailTableData | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleRowClick = (row: EmailTableData) => {
    setSelectedRow(row);
    setIsSheetOpen(true);
  };

  const columns: ColumnDef<EmailTableData>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <div onClick={(e) => e.stopPropagation()}>
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "email",
      header: "EMAIL",
    },
    {
      accessorKey: "phone",
      header: "EMAILS SENT",
    },
    {
      accessorKey: "username",
      header: "WARMUP EMAILS",
    },
    {
      accessorKey: "id",
      header: "HEALTH SCORE",
    },
    {
      id: "actions",
      cell: () => (
        <div
          className="flex items-center justify-end gap-2"
          onClick={(e) => e.stopPropagation()}
        >
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Zap className="h-5 w-5 text-gray-400 hover:text-gray-500" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreHorizontal className="h-5 w-5 text-gray-400 hover:text-gray-500" />
          </Button>
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  });

  // Calculate pagination info dynamically
  const { pageIndex, pageSize } = table.getState().pagination;
  const totalCount = data.length;
  const start = pageIndex * pageSize + 1;
  const end = Math.min((pageIndex + 1) * pageSize, totalCount);

  return (
    <div className="w-full rounded-lg">
      {loading ? (
        <p className="p-4 text-center">Loading...</p>
      ) : (
        <>
          <div className="mt-6">
            <Table className="border-b border-gray-200">
              <TableHeader className="bg-slate-100">
                <TableRow>
                  {table.getHeaderGroups().map((headerGroup) =>
                    headerGroup.headers.map((header) => (
                      <TableHead
                        key={header.id}
                        className={
                          header.id === "select" ? "w-12" : "font-bold"
                        }
                      >
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
                      className="border-b border-gray-200 cursor-pointer hover:bg-gray-50"
                      onClick={() => handleRowClick(row.original)}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id} className="text-sm">
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-between mt-4 px-2">
            <div className="text-sm text-gray-500">
              {start}-{end} of {totalCount} results
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                className="h-8 w-8 text-slate-800"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              {Array.from(
                { length: table.getPageCount() },
                (_, i) => i + 1
              ).map((page) => (
                <Button
                  key={page}
                  variant={page === pageIndex + 1 ? "secondary" : "ghost"}
                  size="sm"
                  className={`h-8 w-8 ${page === pageIndex + 1 ? "bg-gray-200" : ""}`}
                  onClick={() => table.setPageIndex(page - 1)}
                >
                  {page}
                </Button>
              ))}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
                className="h-8 w-8 text-slate-800"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Sheet for displaying row data */}
          <EmailAccountDrawer
            isOpen={isSheetOpen}
            onOpenChange={setIsSheetOpen}
            selectedRow={selectedRow}
          />
        </>
      )}
    </div>
  );
};

export default EmailAccountTable;
