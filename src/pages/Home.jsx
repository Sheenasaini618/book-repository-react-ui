import BookCatalogue from "../components/BookCatalogue";
import Navbar from "../components/Navbar";
import SearchInventory from "../components/SearchInventory";

function Home() {

  return (
    <div>
        <Navbar />
        <SearchInventory/>
        {/* <BookCatalogue /> */}
    </div>
  );
}

export default Home;
