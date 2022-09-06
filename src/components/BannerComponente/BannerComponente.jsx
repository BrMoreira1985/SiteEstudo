import "./BannerComponente_styles.css";
import Banner from "./ImagensBanner/Banner_melhorado.jpeg";

export default function BannerComponente() {
  return (
    <div className="banner">
      <img src={Banner} alt="banner" />
    </div>
  );
}
