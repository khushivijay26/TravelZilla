import Mountain1 from "../assets/leh-ladakh.jpg";
import Mountain2 from "../assets/bike.jpg";
import Mountain3 from "../assets/coorg.jpg";
import Mountain4 from "../assets/coorg1.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame.</p>

            <DestinationData
                className="first-des"
                heading="Leh Ladakh, Jammu & Kashmir"
                text="Ladakh is a union territory in the Kashmir region of India. Formerly falling in the state of Jammu & Kashmir. Extending from the Siachen Glacier to the main Great Himalayas, Ladakh is a land like no other. Dominated by dramatic landscapes, Ladakh is known as the world's coldest desert. Stunning Gompas (Tibetan Buddhist monasteries), fluttering prayer flags, whitewashed stupas, Ladakh is a riot of intricate murals and red-robed monks. It is an adventure playground for rafting and high-altitude trekking."
                img1={Mountain1}
                img2={Mountain2}
            />

            <DestinationData
                className="first-des-reverse"
                heading="Coorg, Karnataka"
                text="Coorg, officially known as Kodagu, is the most affluent hill station in Karnataka. It is well known for its breathtakingly exotic scenery and lush greenery. Forest covered hills, spice and coffee plantations only add to the landscape. Madikeri is the region's centre point with all transportation for getting around starting from here. On a visit to Coorg, cover the beautiful towns like Virajpet, Kushalnagar, Gonikoppal, Pollibetta, and Somwarpet, and experience the beautiful concept of homestays to make your experience more memorable! "
                img1={Mountain3}
                img2={Mountain4}
            />

        </div>
    )
}

export default Destination;