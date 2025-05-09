/* eslint-disable @typescript-eslint/no-explicit-any */
import Loading from "@/components/ui/Loading";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetMyRequestedMaintenanceQuery } from "@/redux/features/maintenance/maintenanceApi";

const RequestedMaintenance = () => {
  const {
    data: maintenanceData,
    isLoading,
    isError,
  } = useGetMyRequestedMaintenanceQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div className="text-center text-red-500 p-5">Error loading Maintenance. Please try again later.</div>;
  }

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
      <h1 className="text-xl sm:text-2xl font-bold text-center text-green-500 mb-6">
        Requested For Maintenance
      </h1>

      <div className="overflow-x-auto">
        <Table className="min-w-[800px]">
          <TableCaption>
            {maintenanceData?.data?.length === 0 ? (
              <div className="text-center py-10 text-lg font-semibold">
                No Requested Maintenance...
              </div>
            ) : (
              <div className="text-md font-semibold my-6">
                A list of Requested Maintenance.
              </div>
            )}
          </TableCaption>
          <TableHeader className="bg-green-400">
            <TableRow>
              <TableHead className="text-white">BikeId</TableHead>
              <TableHead className="text-white text-start">Last Service</TableHead>
              <TableHead className="text-white text-start">Next Service</TableHead>
              <TableHead className="text-white text-start">Service Details</TableHead>
              <TableHead className="text-white text-start">Notes</TableHead>
              <TableHead className="text-white text-center">Status</TableHead>
              <TableHead className="text-white text-right">Discount %</TableHead>
              <TableHead className="text-white text-right">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {maintenanceData?.data?.map((maintenance: any) => (
              <TableRow
                key={maintenance._id}
                className="bg-purple-100 hover:bg-white border-b border-green-200"
              >
                <TableCell className="font-medium">
                  {maintenance.buyerId.name}
                </TableCell>
                <TableCell>{maintenance.lastServicingDate}</TableCell>
                <TableCell>{maintenance.nextServicingDate}</TableCell>
                <TableCell className="text-start">
                  <ul className="list-disc pl-4">
                    {maintenance.serviceDetails.map((item: string, idx: number) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </TableCell>
                <TableCell>{maintenance.notes || "---"}</TableCell>
                <TableCell className="text-center">
                  {maintenance.isPending ? (
                    <p className="border border-green-300 bg-yellow-200 hover:bg-slate-300 rounded-lg px-2 py-1">
                      Pending
                    </p>
                  ) : (
                    <p className="border border-green-300 bg-green-300 hover:bg-slate-300 rounded-lg px-2 py-1">
                      Accepted
                    </p>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  {maintenance?.discount?.percentage ?? 0} %
                </TableCell>
                <TableCell className="text-right">
                  {maintenance?.discount?.fixedAmount ?? 0}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default RequestedMaintenance;
