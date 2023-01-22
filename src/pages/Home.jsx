import { async } from "@firebase/util";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { useEffect } from "react";
import Slider from "../components/Slider";
import { db } from "../firebase";

export default function Home() {


  useEffect(() => {

    async function fetchListings() {

      const listingsRef = collection(db, "listings")
      const q = query(listingsRef, orderBy('timestamp', 'desc'), limit(5))
      const querySnap = await getDocs(q)
      let listings = []

      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        })
      })



    }

    fetchListings()
  }, [])
  return (
    <div>
      <Slider/>
    </div>
  )
}
