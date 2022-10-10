import Layout from '../components/Layout';
import Listings from '../components/Listings';
import data from '../utils/data';

export default function Home() {
  return (
    <Layout title="Home Page">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.listings.map((listing) => (
          <Listings listing={listing} key={listing.listing_id}></Listings>
        ))}
      </div>
    </Layout>
  );
}