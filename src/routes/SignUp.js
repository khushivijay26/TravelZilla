import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SignUpImg from "../assets/SignUp.png";
import Footer from "../components/Footer";
import SignUpForm from "../components/SignUpForm";

function SignUp() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={SignUpImg}
                title="Sign Up"
                btnClass="hide"
            />
            <SignUpForm />
            <Footer />
        </>
    )
}
export default SignUp;