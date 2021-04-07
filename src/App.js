import { useState, useEffect } from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { useQuery, gql } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import Test from "./test";

import "./App.css";

const client = new ApolloClient({
  uri: "https://example-vmall-front.yereone.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    "account-id": "6027acbe5fc2b4627256d612",
    locale: "en_US",
  },
});

function App() {
  // const [data, setData] = useState([]);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  // useEffect(() => {
  //   client
  //     .query({
  //       query: gql`
  //         query {
  //           getCategoryProducts(categoryId: "602e537c205367233c805511") {
  //             products {
  //               id
  //               name
  //               images {
  //                 path
  //                 roles
  //               }
  //             }
  //           }
  //         }
  //       `,
  //     })
  //     .then((result) => {
  //       return setData({ data: result.data.getCategoryProducts.products });
  //     });
  // }, []);

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Test />
        {/* <p>My first Apollo app 🚀</p>
        <img
          src={`https://vmall-api.yereone.com/media/6027acbe5fc2b4627256d612/${data.data[0].images[0].path}`}
          alt=""
        /> */}
      </ApolloProvider>
    </div>
  );
}

export default App;
