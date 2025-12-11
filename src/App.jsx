import Header from './components/Header'
import About from './components/About'
import MassTimes from './components/MassTimes'
import Events from './components/Events'
import Announcements from './components/Announcements'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { siteData } from './data/siteData'
import HeroSlider from './components/HeroSlider'
import Clergy from './components/Clergy'
import Ministries from './components/Ministries'
import Liturgy from './components/Liturgy'
import Tithing from './components/Tithing'
import Location from './components/Location'
import React from 'react'


export default function App() {
  React.useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  }, []);

  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <div className="container">
          <About data={siteData.about} />
          <MassTimes times={siteData.massTimes} />
          <Clergy data={siteData.clergy} />
          <Ministries data={siteData.ministries} />
          <Events events={siteData.events} />
          <Announcements announcements={siteData.announcements} />
          <Liturgy />
          <Gallery images={siteData.gallery} />
          <Tithing data={siteData.tithing} />
          <Location />
          <Contact contact={siteData.contact} address={siteData.address} phone={siteData.phone} />
        </div>
      </main>
      <Footer />
    </>
  )
}
<a
  href="https://wa.me/5511932377810?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es"
  className="whatsapp-float"
  target="_blank"
  rel="noopener noreferrer"
>
  <img src="/whatsapp.png" alt="WhatsApp" />
</a>