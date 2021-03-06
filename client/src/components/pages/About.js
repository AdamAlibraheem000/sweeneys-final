import {useEffect} from "react";
import { Helmet } from "react-helmet";
import FadeIn from "react-fade-in/lib/FadeIn";


export default function About() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  
  return (
    <>
      <Helmet>
        <title>Sweeney’s - About Us</title>
      </Helmet>
      <div className="back-img-about"></div>
      <section className="about-section">
        <FadeIn>
          <div className="about-people">
            <article className="about-hours-flex">
            <p className="about-location">Sweeney's Seafood Bar & Grill is located in the heart of Centerville's historic
              district.  
            </p>
            <p>Parking located in rear of building.</p>
            <p>Phone: (937) 291-3474 </p>
            <p><a href="https://www.google.com/maps/place/28+W+Franklin+St,+Washington+Township,+OH+45459/@39.6281002,-84.1621482,17z/data=!3m1!4b1!4m5!3m4!1s0x88408ee1f1e6ace7:0x8062e0e52aba8bb!8m2!3d39.6281002!4d-84.1599595" 
            target="_blank"
            rel="noopener noreferrer"
            > 
            28 W Franklin St, Dayton, OH 45459</a></p>
            <h1 className="italicized">Hours of Operation</h1>
            <p> Monday Closed</p>
             <p>Tuesday - Thursday: 4pm - 9pm</p> 
              <p>Friday and Saturday 4pm - 10pm</p>
             <p>Sunday 4pm - 8:30pm</p> 
            <h1 className="italicized">Holiday Hours</h1>
            <p>Closed on:</p>
            <p>Thanksgiving</p>
            <p>Christmas</p>
            <p>Easter</p>
            <p>Super Bowl Sunday</p>
            <p>July 4th</p>
            <p>Mother's Day 12pm - 8pm</p>
            <p>Christmas Eve 4pm - 8pm</p>
            </article>
            
            <article className="about-people-flex">
              <h1 className="about-name">Lisa Long</h1>
              <h2 className="italicized about-name">General Manager & Owner</h2>
            
            
            <p className="about-p-styling">
              With a degree in hospitality management, comes to Sweeney’s
              Seafood Bar & Grill with an exemplary history at Sycamore Creek
              Country Club. When she resigned to become the day-to-day manager
              at Sweeney’s, she was responsible for all Food & Bar programs, as
              well as the Clubhouse itself and the Swimming Pool. Prior to that
              position she owned her own catering business for 11 years and was
              with the Westin Hotel Corporation. She chaired and continues to be
              active in the Miami Valley Club Managers Association of America as
              well as the Ohio Valley Club Managers Association of America and
              the Club Managers Association of America. She has lived in the
              area for over 15 years.
            </p>
           
              <h1 className="about-name">Larry Thompson</h1>
              <h2 className="italicized about-name">Managing Partner and Owner</h2>
            
            <p >
              A former college professor, has worked extensively in the
              legal/business publishing field (with McGraw-Hill, LexisNexis and
              Bloomberg Law). He held many positions within LexisNexis and
              retired as Senior Vice President and Global Marketing Officer for
              LexisNexis worldwide in 2006. In 2010 he took on a two-year
              project at Bloomberg in NYC where he was CEO of the Bloomberg Law
              Division. He has sat on the Board at Sycamore Creek Country Club
              and has lived and worked in the Dayton area since 1994.
            </p>
            
              <h1 className="about-name">Holley Thompson</h1>
              <h2 className="italicized about-name">Operations Partner and Owner</h2>
            
            <p>
              Is a former practicing attorney and consultant and worked
              extensively in the legal/business publishing field (LexisNexis).
              She has held many positions within LexisNexis and retired as
              Senior Vice President, US Marketing in 2006. She has sat on the Board of the University of Dayton School of Law and the St. Vincent de Paul Community Board and continues to serve as Treasurer on the Dayton Metro Library Board.
            </p>
            </article>
            </div>
        </FadeIn>
      </section>
    </>
  );
}
