import BcGraphQl from "@/components/bc-graphql";

const { BC_STORE_HASH, BC_CHANNEL_ID, BC_GQL_TOKEN, EMAIL, PASSWORD } = process.env;

const token = BC_GQL_TOKEN;
const endpoint = `https://store-${BC_STORE_HASH}-${BC_CHANNEL_ID}.mybigcommerce.com/graphql`;

export default function Home() {
  return (
    <div className="font-sans items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <BcGraphQl token={token ?? ''} endpoint={endpoint ?? ''}
        email={EMAIL ?? ''} password={PASSWORD ?? ''} />
    </div>
  );
}
