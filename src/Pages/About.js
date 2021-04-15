import React from "react";
import {Container} from "react-bootstrap"
import Navigation from "../Components/Navigation";

export default function About() {
  return (
    <>
      <Navigation />
      <section>
        <Container className="shadow px-5">
          <div className="text-center pt-4">
            <h1 className="display-4"> About the Data </h1>
            <p className="text-left lead">
              The data is pulled from the Kaggle Dataset that can be found{" "}
              <a href="https://www.kaggle.com/gpreda/covid-world-vaccination-progress">
                here
              </a>
              . More in-depth information about the data can be learned
              following the previous link.
              <br />
              The data is collected and shared by Gabriel Preda. He is a Data
              Scientist at Endava based out of Romania. His Kaggle profile can
              be found <a href="https://www.kaggle.com/gpreda">here</a>.
            </p>
          </div>
          <div className="text-center pt-3 pb-5">
            <h1 className="display-4"> About the Code </h1>
            <p className="text-left lead">
              The data is in .csv format. I used the python library pandas on
              the backend to transfer the data from .csv to json. Also using
              pandas, I was able to make some calculations and further interpret
              the data (Top 10 countries with most vaccines/ How many countires
              are using a specific vaccine.) From this I was able to use Flask
              to set up a server to send this json data from an API request.
              Information on the API can be found here and the source code for
              it can be found here.
            </p>
            <p className="text-left lead">
              For the frontend, I used React.js with Chart.js for data
              visualization. Some plugins for chart js were used to create nicer
              color themes. I used bootstrap in order to quickly build a decent
              looking UI quickly. I used React's context API in order to have
              better state managment across various components. Axios and
              asynchronous API calls were used in order to get the data from the
              backend.
            </p>
            <p className="text-left lead">
              Overall, this project taught me how to use flask to create an API that connects to a frontend. As well taught me how to use React's context API for state management and gae me more practice with asynchronus programming. Thank you for checking out this project. If you would like to learn more, check out the contact tab to get in touch with me!
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
