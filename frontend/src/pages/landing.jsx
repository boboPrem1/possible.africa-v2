import Logo from "../assets/LogoPossible.png";
import MediaImg from "../assets/media_img.png";
import OrganisationImg from "../assets/jumia.jpg";

const Landing = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-11/12">
        <div className="h-24 w-full flex justify-between items-center mb-28">
          <img src={Logo} alt="" className="w-[100px] h-[50px]" />
          <div className="flex justify-between w-5/12 items-center">
            <span className="text-xl font-medium text-[#242827]">
              # Connect AfricaTech Ecosystem
            </span>
            <select
              name=""
              id=""
              className="px-3 py-1 outline-none rounded-full text-[#124B42] font-semibold text-xl bg-[#C0E8E2]"
            >
              <option value="en">EN</option>
              <option value="fr">FR</option>
            </select>
            <button className="flex justify-between items-center w-[216px] h-[48px] bg-[#2BB19C] text-lg font-medium rounded-full px-[20px] py-[12px] text-white">
              <span>+</span>
              <span>Free first campaign</span>
            </button>
          </div>
        </div>
        <div className="w-full flex justify-between px-5 gap-x-5">
          <div className="w-9/12 flex flex-col justify-start p-5 rounded-xl shadow-xl">
            <div className="flex justify-between items-center mb-5">
              <span className="text-lg font-medium">Last news (980)</span>
              <div className="w-2/12 flex justify-end items-center self-center gap-x-3">
                <span className="text-nowrap">View more</span>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="27"
                    height="27"
                    rx="13.5"
                    stroke="#666968"
                  />
                  <path
                    d="M18.3766 10.325H10.6985C10.5418 10.325 10.3916 10.2628 10.2809 10.1521C10.1701 10.0413 10.1079 9.89107 10.1079 9.73442C10.1079 9.57778 10.1701 9.42755 10.2809 9.31679C10.3916 9.20603 10.5418 9.1438 10.6985 9.1438H18.9672C19.1239 9.1438 19.2741 9.20603 19.3849 9.31679C19.4956 9.42755 19.5579 9.57778 19.5579 9.73442V18.0032C19.5579 18.1598 19.4956 18.31 19.3849 18.4208C19.2741 18.5316 19.1239 18.5938 18.9672 18.5938C18.8106 18.5938 18.6604 18.5316 18.5496 18.4208C18.4388 18.31 18.3766 18.1598 18.3766 18.0032V10.325Z"
                    fill="#242827"
                  />
                  <path
                    d="M18.5483 9.31627C18.6592 9.20537 18.8096 9.14307 18.9665 9.14307C19.1233 9.14307 19.2737 9.20537 19.3847 9.31627C19.4956 9.42718 19.5579 9.5776 19.5579 9.73444C19.5579 9.89128 19.4956 10.0417 19.3847 10.1526L9.34403 20.1932C9.23313 20.3041 9.08271 20.3664 8.92587 20.3664C8.76903 20.3664 8.61861 20.3041 8.5077 20.1932C8.3968 20.0823 8.3345 19.9319 8.3345 19.7751C8.3345 19.6182 8.3968 19.4678 8.5077 19.3569L18.5483 9.31627Z"
                    fill="#242827"
                  />
                </svg>
              </div>
            </div>
            <div className="flex justify-start flex-col gap-y-3">
              <New />
              <New />
              <New />
              <New />
              <New />
              <New />
              <New />
              <New />
              <New />
              <New />
            </div>
          </div>
          <div className="min-h-16 w-3/12 p-5 rounded-xl shadow-xl">
            <div className="flex justify-between items-center mb-5">
              <span className="text-lg font-medium">
                Last organisations (105)
              </span>
              <div className="w-2/12 flex justify-end items-center self-center gap-x-3">
                <span className="text-nowrap">View more</span>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="27"
                    height="27"
                    rx="13.5"
                    stroke="#666968"
                  />
                  <path
                    d="M18.3766 10.325H10.6985C10.5418 10.325 10.3916 10.2628 10.2809 10.1521C10.1701 10.0413 10.1079 9.89107 10.1079 9.73442C10.1079 9.57778 10.1701 9.42755 10.2809 9.31679C10.3916 9.20603 10.5418 9.1438 10.6985 9.1438H18.9672C19.1239 9.1438 19.2741 9.20603 19.3849 9.31679C19.4956 9.42755 19.5579 9.57778 19.5579 9.73442V18.0032C19.5579 18.1598 19.4956 18.31 19.3849 18.4208C19.2741 18.5316 19.1239 18.5938 18.9672 18.5938C18.8106 18.5938 18.6604 18.5316 18.5496 18.4208C18.4388 18.31 18.3766 18.1598 18.3766 18.0032V10.325Z"
                    fill="#242827"
                  />
                  <path
                    d="M18.5483 9.31627C18.6592 9.20537 18.8096 9.14307 18.9665 9.14307C19.1233 9.14307 19.2737 9.20537 19.3847 9.31627C19.4956 9.42718 19.5579 9.5776 19.5579 9.73444C19.5579 9.89128 19.4956 10.0417 19.3847 10.1526L9.34403 20.1932C9.23313 20.3041 9.08271 20.3664 8.92587 20.3664C8.76903 20.3664 8.61861 20.3041 8.5077 20.1932C8.3968 20.0823 8.3345 19.9319 8.3345 19.7751C8.3345 19.6182 8.3968 19.4678 8.5077 19.3569L18.5483 9.31627Z"
                    fill="#242827"
                  />
                </svg>
              </div>
            </div>
            <div className="flex justify-start flex-col gap-y-3">
              <Organisation />
              <Organisation />
              <Organisation />
              <Organisation />
              <Organisation />
              <Organisation />
              <Organisation />
              <Organisation />
              <Organisation />
              <Organisation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

const New = () => {
  return (
    <div className="flex justify-between items-center gap-x-5  bg-[#D9D9D9]/20 rounded-md min-h-26 p-2.5 min-w-full">
      <div className="w-1/12 flex justify-center items-center">
        <img
          src={MediaImg}
          height={40}
          width={40}
          alt={`media img's logo`}
          className="min-w-10 min-h-10"
        />
      </div>
      <div className="flex flex-col justify-start items-center gap-y-1 w-11/12">
        <div className="flex justify-between w-full">
          <span className="font-semibold">Cameroon CEO</span>
          <span>27/1/2025</span>
        </div>
        <div className="w-full font-medium">
        Bilan économique 2024 et perspectives pour 2025 : Analyse critique des
        dynamiques économiques du Cameroun, Bilan économique 2024 et perspectives pour 2025 : Analyse critique des
        dynamiques économiques du Cameroun
        </div>
        <div className="w-full text-xs flex justify-start gap-x-2 overflow-auto scrollbar-hidden">
          <div className="py-0.5 px-1.5 border rounded flex justify-between items-center gap-x-1">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.00956 3.77606L3.65606 3.42256M5.49006 10.0971L1.84106 6.44806C1.65606 6.26306 1.55106 6.01306 1.54756 5.75206L1.50006 2.00756C1.49905 1.94063 1.51148 1.87418 1.53663 1.81215C1.56177 1.75012 1.59912 1.69378 1.64645 1.64645C1.69378 1.59912 1.75012 1.56177 1.81215 1.53663C1.87418 1.51148 1.94063 1.49905 2.00756 1.50006L5.75206 1.54756C6.01351 1.55064 6.26335 1.656 6.44806 1.84106L10.0971 5.49006C10.4341 5.82656 10.6931 6.46956 10.3091 6.85356L6.85406 10.3086C6.46956 10.6931 5.82656 10.4336 5.49006 10.0971Z"
                stroke="#124B42"
                stroke-width="0.7"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span className="text-nowrap">Actualité</span>
          </div>
        </div>
      </div>
    </div>
  );
};
const Organisation = () => {
  return (
    <div
      key="Jumia"
      className="flex justify-between items-center gap-x-2.5 bg-[#D9D9D9]/20 rounded-md min-h-18 p-2.5"
    >
      <div className="w-12 h-12 flex justify-center items-center self-start bg-custom-white rounded">
        <img
          src={OrganisationImg}
          height={40}
          width={40}
          alt={`media img's logo`}
          className="min-w-10 min-h-10 rounded"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-y-1 w-11/12">
        <div className="w-full flex justify-between text-[#242827]">
          <span className="text-sm font-semibold">Jumia</span>
          <span className="text-xs font-semibold mr-3">Fintech</span>
        </div>
        <div className="w-full text-xs font-medium text-[#7C7E7D]">
          Boutique N°1 d'achat et vente en ligne au Sénégal TVs, smartphones,
          électroménager, mode, jouets, sport, jeux . . .
        </div>
        <div className="flex justify-start gap-x-2.5 w-full text-[#7C7E7D]">
          <span className="border border-[#7C7E7D] text-xs rounded px-1.5 py-0.5">Sénegal</span>
          <span className="border border-[#7C7E7D] text-xs rounded px-1.5 py-0.5">Morocco</span>
        </div>
      </div>
    </div>
  );
};
