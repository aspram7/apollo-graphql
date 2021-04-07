import { useState, useEffect } from "react";
import axios from "axios";

export const useQuery = (query) => {
  const {
    loc: {
      source: { body },
    },
  } = query;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  useEffect(async () => {
    setLoading(true);
    console.log(body);
    // const { data } = await axios.post("https://example-vmall-front.yereone.com/graphql", {
    //   query: body,
    // });
    const { data } = await axios.post("https://example-vmall-front.yereone.com/graphql", {
      query: `
        {
          getCategoryProducts(categoryId: "602e537c205367233c805511") {
            products {
              id
              name
              images {
                path
                roles
                __typename
              }
              __typename
            }
            __typename
          }
        }
      `,
      variables: {},
    });

    console.log(data, 11);
  }, [query]);

  return {
    data,
    loading,
    error,
  };
};
