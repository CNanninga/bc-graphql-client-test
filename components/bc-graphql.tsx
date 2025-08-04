'use client';

import { useEffect } from "react";

export default function BcGraphQl({
  token,
  endpoint,
  email,
  password,
}: { token: string, endpoint: string, email: string, password: string }) {
  const logGqlFetch = (gql: string) => {
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Accept-Language': 'en-US',
      },
      credentials: 'include',
      body: JSON.stringify({ query: gql }),
    })
      .then(res => res.json())
      .then(data => {
        console.log('GraphQL response:', data);
      })
      .catch(err => {
        console.error('GraphQL fetch error:', err);
      });
  };

  const login = () => {
    const gql = `
      mutation {
        login(
          email: "${email}"
          password: "${password}"
        ) {
          customer {
            email
          }
        }
      }
    `;

    logGqlFetch(gql);
  };

  const logout = () => {
    const gql = `
      mutation {
        logout {
          result
        }
      }
    `;

    logGqlFetch(gql);
  };

  const getCustomer = () => {
    const gql = `
      query {
        customer {
          email
        }
      }
    `;

    logGqlFetch(gql);
  };

  return <>
    <div>
      <button onClick={login}>Log In</button>
    </div>
    <div>
      <button onClick={logout}>Log Out</button>
    </div>
    <div>
      <button onClick={getCustomer}>Get Customer</button>
    </div>
  </>;
}
