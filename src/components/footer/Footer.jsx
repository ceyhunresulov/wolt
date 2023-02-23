import Nav from "./Nav";

const navData = [
  {
    title: "Gəlin, birlikdə edək",
    list: [
      "Kuryerlər üçün",
      "Restoranlar üçün",
      " Mağazalar üçün",
      "Şirkətlər üçün",
    ],
  },
  {
    title: "Company",
    list: [
      "Haqqımızda",
      "İşlər",
      "Məsuliyyət",
      "Təhlükəsizlik",
      "Təhlükəsizlik",
      "İnvestorlar",
      "Wolt Drive",
    ],
  },
  {
    title: "Faydalı bağlantılar",
    list: ["Dəstək", "Media", "Əlaqə", "Danış"],
  },
  {
    title: "Bizi izlə",
    list: [
      "Wolt bloq",
      "Mühəndislik bloqu",
      "Instagram",
      "Facebook",
      "Twitter",
      "LinkedIn",
    ],
  },
];

function Footer() {
  return (
    <div className="min-h-96 py-10 box-border bg-bgFourthColor flex items-center justify-center mt-6 relative">
      <div className="w-desktop mx-auto md:flex justify-between">
        <div className="mb-12 md:mb-0">
          <img
            className="scale-75 -ml-3 mb-4"
            src={require("../../images/logo_footer.png")}
            alt=""
          />
          <div className="flex md:block">
            <a href="" className="w-40 h-10 block mr-4 md:mb-4">
              <img
                className="w-full h-full"
                src="https://consumer-static-assets.wolt.com/app-store-badges/Download_on_the_App_Store_Badge_AZ_RGB_blk_100517.svg"
                alt=""
              />
            </a>
            <a href="" className="w-32 h-10 block">
              <img
                className="w-full h-full"
                src="https://consumer-static-assets.wolt.com/app-store-badges/google-play-badge_az.png"
                alt=""
              />
            </a>
          </div>
        </div>

        <div className="md:flex md:w-2/3 justify-between">
          {navData.map((item,i) => (
            <Nav key={i} title={item.title} list={item.list} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
