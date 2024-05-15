import { createTheme, ThemeProvider } from "@mui/material";
import Banner from "./Banner/Banner";
import Demo from "./BookDemo/BookDemo";
import Clients from "./Client";
import VideoCounter from "./Counter/VideoCounter";
import FooterandLogo from "./Footer/Footer";
import Header from "./Header";
import HelpYou from "./Help/Help";
import NavBar from "./Navbar";
import Testimonial from "./Testimonials/Testimonial";

const theme = createTheme({
    palette: {
      primary: {
        main: '#121D4B',
      },
      secondary: {
        main: '#FFFFFF',
      },
    },
  });

export default function Homepage () {
    return (
        <div >
            <Header />
            <NavBar />
            <Banner />
            <HelpYou />
            <ThemeProvider theme={theme}>
                <Demo />
            </ThemeProvider>
            {/* <VideoCounter />
            <Testimonial />
            <Clients />
            <ThemeProvider theme={theme}>
                <FooterandLogo />
            </ThemeProvider> */}
        </div>
    )
}