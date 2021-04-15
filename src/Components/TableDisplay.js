import React, {useContext } from "react";
import { Table } from "react-bootstrap";
import { DataContext } from "../DataContext";

export default function TableDisplay() {
  const [data] = useContext(DataContext);

  return (
    <>
      {data.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <section className="mb-3">
            <h1>
              Raw Data for
              {data.length === 0 ? " Loading" : ` ${data.country}`}{" "}
            </h1>
          </section>
          <section className="table-wrap pt-3 mb-5 shadow">
            <Table bordered hover striped size="sm" responsive>
              <thead className="thead-dark">
                <th>Date</th>
                <th>Total Vaccines</th>
                <th>Total People Vaccinated</th>
                <th>Total Daily Vaccines</th>
                <th>Total People Fully Vaccinated</th>
                <th>Source Name</th>
                <th>Vaccine</th>
              </thead>
              <tbody>
                {data.vaccine_data.map((index) => {
                  return (
                    <tr>
                      <td> {index.date}</td>
                      <td> {index.total_vaccinations}</td>
                      <td> {index.people_vaccinated}</td>
                      <td> {index.daily_vaccinations}</td>
                      <td> {index.people_fully_vaccinated}</td>
                      <td> {index.source_name}</td>
                      <td>{index.vaccines}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </section>
        </>
      )}
    </>
  );
}
