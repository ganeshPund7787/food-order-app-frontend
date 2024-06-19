import landingImage from "../assets/landing.png";
import appDownloadImg from "../assets/appDownload.png";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-md shadow-md py-8 flex flex-col gap-5 text-center -mt-48">
        <h1 className="text-5xl font-bold tracking-tight text-red-600">
          Savor epic eats on-the-go
        </h1>
        <span className="text-xl">Indian flavors just a click away!</span>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} alt="landing_img" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway in a snap !
          </span>
          <span>
            Downloads YourChoice App for faster ordering and personalised
            recommendations
          </span>
          <img src={appDownloadImg} alt="app img" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
