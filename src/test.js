import { useQuery, gql } from "@apollo/client";
// import { useQuery as useQuery11 } from "./helpers/useQuery";

const GET_DATA = gql`
  query {
    getCategoryProducts(categoryId: "602e537c205367233c805511") {
      products {
        id
        name
        images {
          path
          roles
        }
      }
    }
  }
`;

function ExchangeRates() {
  const { loading, error, data } = useQuery(GET_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.getCategoryProducts.products.map(({ id, images }) => {
    return (
      <div key={id}>
        <img
          src={`https://vmall-api.yereone.com/media/6027acbe5fc2b4627256d612/${images[0].path}`}
          alt=""
        />
      </div>
    );
  });
}

export default ExchangeRates;
