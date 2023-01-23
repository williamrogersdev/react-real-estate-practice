import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import Slider from "../components/Slider";
import { db } from "../firebase";

export default function Home() {
  const [offerListing, setOfferListing] = useState(null);

  useEffect(() => {
    async function fetchListings() {
      try {
        //get reference
        const listingsRef = collection(db, "listings");
        //create query

        const q = query(
          listingsRef,
          where("offer", "==", true),
          orderBy("timestamp", "desc"),
          limit(4)
        );

        //excute query, gets info and puts inside query

        const querySnap = await getDocs(q);

        const listings = [];

        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });

        setOfferListing(listings);
        console.log(listings);
      } catch (error) {
        console.log(error);
      }
    }

    fetchListings();
  }, []);

  return (
    <div>
      <Slider />
    </div>
  );
}
