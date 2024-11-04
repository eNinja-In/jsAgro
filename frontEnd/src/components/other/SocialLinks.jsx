import style from "./socialMedia.module.css";
import fLogo from "/socialMedia/facebook.png";
import iLogo from "/socialMedia/instagram.png";
import wLogo from "/socialMedia/whatsapp.png";
import eLogo from "/socialMedia/gmail.png";
import yLogo from "/socialMedia/youtube.png";
import { useNavigate } from "react-router-dom";
export default function SocialLinks(prope) {
  const navigate = useNavigate();

  return (
    <div className={style.main}>
      <div className={style.socialLinks}>
        {prope.facebook && (
          <div className={style.Links}>
            <img
              src={fLogo}
              alt={fLogo}
              onClick={() => navigate(`${prope.facebook}`)}
            />
          </div>
        )}
        {prope.instagram && (
          <div className={style.Links}>
            <img
              src={iLogo}
              alt={iLogo}
              onClick={() => navigate(`${prope.instagram}`)}
            />
          </div>
        )}
        {prope.whatsapp && (
          <div className={style.Links}>
            <img
              src={wLogo}
              alt={wLogo}
              onClick={() => navigate(`${prope.whatsapp}`)}
            />
          </div>
        )}
        {prope.email && (
          <div className={style.Links}>
            <img
              src={eLogo}
              alt={eLogo}
              onClick={() => navigate(`${prope.email}`)}
            />
          </div>
        )}
        {prope.youtube && (
          <div className={style.Links}>
            <img
              src={yLogo}
              alt={yLogo}
              onClick={() => navigate(`${prope.youtube}`)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
