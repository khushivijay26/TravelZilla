import "./TripStyles.css"
import TripData from "./TripData";
import Trip1 from "../assets/andaman.jpg";
import Trip2 from "../assets/udaipur.jpg";
import Trip3 from "../assets/rishikesh.jpg";


function Trip() {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData
                    image={Trip1}
                    heading="Trip in Andaman"
                    text="Andaman & Nicobar Islands is a little slice of paradise tucked around 1,400 km away from the east coast of mainland India. Port Blair, the capital of this union territory, has a major airport and seaport connected with the rest of the country."
                />
                <TripData
                    image={Trip2}
                    heading="Trip in Udaipur"
                    text="Udaipur, also known as the City of Lakes, is one of the most visited tourist places in Rajasthan. Located around stunning water lakes and enveloped by the Aravalli Hills in all directions. It is also one of the best places to experience luxury in India. "
                    />
                <TripData
                    image={Trip3}
                    heading="Trip in Rishikesh"
                    text="Rishikesh, Located in the foothills of the Himalayas along the convergence of Ganga and Chandrabhaga River. Rishikesh is a small town in the Dehradun district, located close to Haridwar in Uttarakhand. Rishikesh is also a pilgrimage town and one of the holiest places for Hindus."
                />
            </div>
        </div>
    );
}

export default Trip;