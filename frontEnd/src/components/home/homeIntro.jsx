import style from "./homeIntro.module.css";
import JS from "/shop/JS.png";
import { useNavigate } from "react-router-dom";

export default function HomeIntro() {
  const navigate = useNavigate();

  // Function to handle the brochure download
  const downloadBrochure = () => {
    // This will trigger the download directly in the browser
    const link = document.createElement('a');
    link.href = '/Brochure.pdf';  // Make sure the PDF file is located in the public folder or adjust the path accordingly
    link.download = 'Brochure.pdf';  // Optional: Rename the file when downloading
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={style.main}>
      <div className={style.home}>
        <div className={style.homeIntro}>
          <div className={style.JSIntro}>
            <div className={style.Info}>
              <h2>Welcome to JS-Agro Equipment</h2>
            </div>
            <div className={style.Info}>
              <h3>"Discover the Future of Farming"</h3>
            </div>
            <div className={style.Info}>
              <p>
                " At JS Agro Equipment, we are dedicated to revolutionizing
                agriculture with innovative solutions. Established in 2020, our
                mission is to empower farmers and agricultural businesses with
                cutting-edge equipment and technology. We believe in enhancing
                productivity, sustainability, and efficiency through our
                state-of-the-art products and exceptional customer service. "
              </p>
            </div>
            <div className={style.Info}>
              <button className={style.JsAboutBtn} onClick={()=> navigate('/about')}>Learn</button>
              {/* Button triggers the downloadBrochure function */}
              <button className={style.JsBrochureBtn} onClick={downloadBrochure}>
                Brochure
              </button>
            </div>
          </div>
        </div>
        <div className={style.homeLogo}>
          <div className={style.homeIntroLogos}>
            <div className={style.container}>
              <div className={style.figure}>
                <div className={style.figureImage}>
                  <img src={JS} alt="" />
                </div>
                <div className={style.figureImage}>
                  <img src={JS} alt="" />
                </div>
                <div className={style.figureImage}>
                  <img src={JS} alt="" />
                </div>
                <div className={style.figureImage}>
                  <img src={JS} alt="" />
                </div>
                <div className={style.figureImage}>
                  <img src={JS} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
