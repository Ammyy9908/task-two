import React from "react";
import { readRemoteFile } from "react-papaparse";
import { CsvToHtmlTable } from "react-csv-to-table";

export default function BasicTable({ tablename, setError }) {
  const [data, setData] = React.useState(null);
  // eslint-disable-next-line
  React.useEffect(() => {
    async function getCSV(filename) {
      readRemoteFile(
        `https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/csv/${filename}.csv`,
        {
          complete: (results) => {
            setData(results.data);
          },
          error: (err) => {
            // eslint-disable-next-line
            setError("CSV File Reading Error");
          },
        }
      );
    }
    getCSV(tablename.charAt(0).toLowerCase() + tablename.substring(1));
  }, []);

  let sampleData = ``;

  if (data) {
    data.map((item) => {
      sampleData += item.toString() + "\n";
    });
  }
  return (
    <CsvToHtmlTable
      data={sampleData}
      csvDelimiter=","
      tableClassName="table table-striped table-hover"
    />
  );
}
