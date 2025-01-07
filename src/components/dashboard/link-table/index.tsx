"use client"

import { ShortenUrlService } from "@/services/shorten-url.services";
import { Url, columns } from "./columns";
import { DataTable } from "./data-table";
import { useLinkTableStore } from "@/store/app.store";
import { useEffect, useState } from "react";

async function getData(): Promise<Url[]> {
  // Fetch data from your API here.
  try {
    const response = await ShortenUrlService.getUserUrls();
    // console.log(response);
    return response.userShortUrls; // Assuming the API returns data in the correct format
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array on error
  }
}

export default function LinkTable() {
  const { loadingTable, setLoadingTable } = useLinkTableStore();
  const [data, setData] = useState<Url[]>([]);

  useEffect(() => {
    async function fetchData() {
      setLoadingTable(true);
      const fetchedData = await getData();
      setData(fetchedData);
      console.log(fetchedData);
      
      setLoadingTable(false);
    }

    fetchData();
  }, [setLoadingTable]);

  return (
    <div className="container mx-auto py-10">
      {loadingTable ? (
        <div>Loading...</div> // Display loading indicator while fetching
      ) : (
        <DataTable columns={columns} data={data} />
      )}
    </div>
  );
}
