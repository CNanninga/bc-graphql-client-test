# BigCommerce Client-Side GraphQL Test

This app is a simple test of the behavior of client-side requests to the BigCommerce GraphQL Storefront API from a third-party application, namely the behavior of the cookie used to track customer context.

Three simple buttons:
* **Log In** performs a `login` mutation
* **Log Out** performs a `logout` mutation
* **Get Customer** performs a `customer` query to fetch the email address of the currently logged-in customer

GQL responses are simply logged to the console.

The customer credentials are defined in env vars, not user input, because the point of this app is not to test different customer credentials, only client-side request behavior.

## Setup

Generate a storefront token with appropriate `allowed_cors_origins` including the domain where the app will be running.

Define the following env vars:

* `BC_GQL_TOKEN`: The storefront token
* `EMAIL`: Valid customer email
* `PASSWORD`: Valid customer password

## Test Cross-Origin Requests

Define the following env vars:

* `BC_STORE_HASH`
* `BC_CHANNEL_ID`

Make sure `BC_GQL_DOMAIN` is _not_ defined.

GQL queries will be made to `store-${BC_STORE_HASH}-${BC_CHANNEL_ID}.mybigcommerce.com/graphql`

## Test Same-Origin Requests

Configure two DNS records on the same domain:
* Subdomain that will resolve to the BigCommerce channel (e.g., the domain set as the Channel Site checkout URL, in a headless storefront scenario)
* Subdomain where this app will be deployed

Define the following env var:

* `BC_GQL_DOMAIN`: The BC subdomain (e.g., `https://checkout.mystore.com`)

Queries will be made to `${BC_GQL_DOMAIN}/graphql`
