import Logo from "../assets/LogoPossible.png";
import MediaImg from "../assets/media_img.png";
import OrganisationImg from "../assets/jumia.jpg";
import AfricanTechIndustry from "../assets/african_tech_industry.webp";
import LogoHyperlink from "../assets/logo_hyperlink.png";
import { useEffect, useState } from "react";
import { fetchResource } from "../utils/possible_api_actions";
import Loader from "../assets/icons/loader.svg";

function getDate(dateSended) {
  const date = new Date(dateSended);

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Les mois commencent à 0
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${day}/${month}/${year} à ${hours}:${minutes}`;
}

const Landing = () => {
  const [dashBoardData, setDashboardData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let data;
    async function fetchData() {
      // You can await here
      let data = await fetchResource("dashboard", {});
      setDashboardData(data);
      console.log(data);
      // ...
    }
    fetchData();
  }, [isLoading]);

  useEffect(() => {
    if (dashBoardData) {
      setIsLoading(false);
    }
  }, [dashBoardData]);

  if (!dashBoardData) {
    return (
      <div className="flex justify-center">
        <div className="flex flex-col w-11/12">
          <Header page="database" />
          <div className="h-[400px] w-full m-auto flex justify-center items-center">
            <img
              src={Loader}
              style={{
                transformOrigin: "bottom center",
                translate: "-100px 0",
              }}
              alt="Loader possible"
              className="w-16 animate-[loading_1s_ease-in-out_infinite_alternate]"
            />
          </div>
        </div>
      </div>
    );
  }

  // return <div>{JSON.stringify()}</div>

  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-11/12">
        <Header page="/" />
        <div className="w-full flex justify-between px-5 gap-x-5">
          <div className="w-full md:w-9/12 flex flex-col justify-start p-5 rounded-xl shadow-xl">
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
              {dashBoardData.posts?.lastByLang["en"].map((post) => {
                return <New post={post} />;
              })}
            </div>
          </div>
          <div className="w-full md:min-h-16 md:w-3/12 p-5 rounded-xl shadow-xl">
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
              {dashBoardData.organisations?.last.map((organisation) => {
                return <Organisation org={organisation} />;
              })}
            </div>
          </div>
        </div>
        <div className="p-5">
          <div className="shadow-xl rounded-xl">
            <div className="p-5 text-2xl">Our services</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-10">
              <div className="m-auto flex justify-between items-center gap-10 bg-[#D9D9D9]/20 rounded-md min-h-[132px] p-5 w-11/12">
                <span className="inline-block w-3/12">
                  <ExaLogo />
                </span>
                <span className="inline-block w-9/12 text-xl text-[#666968]">
                  Exa Consulting : Work with us or hire a consultant from our
                  network to expand your business on the African Continent.
                </span>
              </div>
              <div className="m-auto flex justify-between items-center gap-10 bg-[#D9D9D9]/20 rounded-md min-h-[132px] p-5 w-11/12">
                <span className="inline-block w-3/12">
                  <PyramidLogo />
                </span>
                <span className="inline-block w-9/12 text-xl text-[#666968]">
                  Africaleads : Easy-to-use CRM and lead gen tool. Get more
                  qualified leads and grow your business with our sales CRM.
                </span>
              </div>
              <div className="m-auto flex justify-between items-center gap-10 bg-[#D9D9D9]/20 rounded-md min-h-[132px] p-5 w-11/12">
                <span className="inline-block w-3/12">
                  <img
                    src={AfricanTechIndustry}
                    width={172}
                    alt={`media img's logo`}
                    className="min-w-10 min-h-10"
                  />
                </span>
                <span className="inline-block w-9/12 text-xl text-[#666968]">
                  Africa Tech Industry : Network of decision-makers and leaders
                  placing African markets at the heart of their innovation and
                  development strategy.
                </span>
              </div>
              <div className="m-auto flex justify-between items-center gap-10 bg-[#D9D9D9]/20 rounded-md min-h-[132px] p-5 w-11/12">
                <span className="inline-block w-3/12">
                  <img
                    src={LogoHyperlink}
                    width={172}
                    alt={`media img's logo`}
                    className="min-w-10 min-h-10"
                  />
                </span>
                <span className="inline-block w-9/12 text-xl text-[#666968]">
                  Yprlink est un concours qui offre aux startups africaines
                  l’opportunité unique de bénéficier d’un accompagnement
                  stratégique
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

const New = ({ post }) => {
  return (
    <div className="flex justify-between items-center gap-x-5  bg-[#D9D9D9]/20 rounded-md min-h-26 p-2.5 min-w-full">
      <div className="w-1/12 flex justify-center items-center">
        <img
          src={`https://logo.clearbit.com/${
            post.airLogo
              .split("/")
              [post.airLogo.split("/").length - 1].split(".jpg")[0]
              .split("com")[0]
          }.com`}
          height={40}
          width={40}
          alt={`media img's logo`}
          className="min-w-10 min-h-10"
        />
      </div>
      <div className="flex flex-col justify-start items-center gap-y-1 w-11/12">
        <div className="flex justify-between w-full">
          <span className="font-semibold">{post.airMedia}</span>
          <span>{getDate(post.airDateAdded)}</span>
        </div>
        <div className="w-full font-medium">{post.title}</div>
        <div className="w-full text-xs flex justify-start gap-x-2 overflow-auto scrollbar-hidden">
          {post.airTags &&
            post.airTags.split(", ").map((tag) => {
              return (
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

                  <span className="text-nowrap">{tag}</span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
const Organisation = ({ org }) => {
  return (
    <div
      key="Jumia"
      className="flex justify-between items-center gap-x-2.5 bg-[#D9D9D9]/20 rounded-md min-h-18 p-2.5"
    >
      <div className="w-12 h-12 flex justify-center items-center self-start bg-custom-white rounded">
        <img
          src={`https://logo.clearbit.com/${org.website}`}
          height={40}
          width={40}
          alt={`${org.name}'s logo`}
          className="min-w-10 min-h-10 rounded"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-y-1 w-11/12">
        <div className="w-full flex justify-between text-[#242827]">
          <span className="text-sm font-semibold">{org.name}</span>
          <span className="text-xs font-semibold mr-3">{org.sector}</span>
        </div>
        <div className="w-full text-xs font-medium text-[#7C7E7D]">
          {org.description.slice(0, 45) + " ..."}
        </div>
        <div className="flex justify-start gap-x-2.5 w-full text-[#7C7E7D]">
          <span className="border border-[#7C7E7D] text-xs rounded px-1.5 py-0.5">
            Sénegal
          </span>
          <span className="border border-[#7C7E7D] text-xs rounded px-1.5 py-0.5">
            Morocco
          </span>
        </div>
      </div>
    </div>
  );
};

const ExaLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 522.35 223.69"
      fill="#319795"
    >
      <defs></defs>
      <g id="Calque_2" data-name="Calque 2">
        <g id="Layer_1" data-name="Layer 1">
          <path
            class="cls-1"
            d="M266.54,171.7v4.06h4.12v.9h-4.12v4.12h4.58v.9h-5.67V170.8h5.67v.9Z"
          />
          <path
            class="cls-1"
            d="M285.58,176.25l3.29,5.43h-1.21l-2.77-4.54-2.62,4.54h-1.22l3.28-5.47-3.28-5.39h1.22l2.75,4.52,2.65-4.52h1.22Z"
          />
          <path
            class="cls-1"
            d="M305.17,176.19a3.89,3.89,0,0,1-2.75.86h-2.19v4.63h-1.09V170.82h3.28a3.92,3.92,0,0,1,2.75.85,3.24,3.24,0,0,1,0,4.52Zm-.2-2.25a2.14,2.14,0,0,0-.6-1.65,2.86,2.86,0,0,0-1.95-.56h-2.19v4.38h2.19C304.12,176.11,305,175.39,305,173.94Z"
          />
          <path
            class="cls-1"
            d="M322.59,179.1h-4.94l-.95,2.58h-1.15l4-10.73h1.22l3.95,10.73h-1.15Zm-.32-.9-2.15-5.88L318,178.2Z"
          />
          <path
            class="cls-1"
            d="M343,181.68h-1.08l-6-9.14v9.14h-1.09V170.82h1.09l6,9.12v-9.12H343Z"
          />
          <path
            class="cls-1"
            d="M360.19,171.47a4.53,4.53,0,0,1,2,1.88,6.57,6.57,0,0,1,0,5.82,4.54,4.54,0,0,1-2,1.86,6.89,6.89,0,0,1-3.1.65h-3.21V170.82h3.21A6.76,6.76,0,0,1,360.19,171.47Zm.36,8.12a4.5,4.5,0,0,0,1.19-3.32,4.57,4.57,0,0,0-1.19-3.35,4.65,4.65,0,0,0-3.46-1.2H355v9.06h2.13A4.68,4.68,0,0,0,360.55,179.59Z"
          />
          <path class="cls-1" d="M387,170.82v10.86h-1.09V170.82Z" />
          <path
            class="cls-1"
            d="M406,181.68h-1.09l-6-9.14v9.14h-1.09V170.82h1.09l6,9.12v-9.12H406Z"
          />
          <path
            class="cls-1"
            d="M435.84,179.1h-4.95l-.94,2.58H428.8l4-10.73H434l3.94,10.73h-1.15Zm-.33-.9-2.15-5.88-2.14,5.88Z"
          />
          <path
            class="cls-1"
            d="M453.94,170.82v.9h-4.79v4.05h4v.9h-4v5h-1.08V170.82Z"
          />
          <path
            class="cls-1"
            d="M469.9,181.68l-2.69-4.54h-2v4.54h-1.09V170.82h3.26a3.94,3.94,0,0,1,2.76.87,3,3,0,0,1,.94,2.28,3,3,0,0,1-.68,2,3.16,3.16,0,0,1-2,1.08l2.8,4.62Zm-4.69-5.43h2.19a2.64,2.64,0,0,0,1.92-.62,2.5,2.5,0,0,0,0-3.32,2.83,2.83,0,0,0-2-.58h-2.17Z"
          />
          <path class="cls-1" d="M482.72,170.82v10.86h-1.09V170.82Z" />
          <path
            class="cls-1"
            d="M493.79,173.37a5,5,0,0,1,1.91-2,5.29,5.29,0,0,1,2.7-.71,5.57,5.57,0,0,1,3.12.86A4.92,4.92,0,0,1,503.4,174h-1.27a3.73,3.73,0,0,0-1.42-1.73,4.51,4.51,0,0,0-4.46-.06,3.83,3.83,0,0,0-1.5,1.61,5.24,5.24,0,0,0-.55,2.43,5.17,5.17,0,0,0,.55,2.42,3.81,3.81,0,0,0,1.5,1.6,4.11,4.11,0,0,0,2.15.56,4.19,4.19,0,0,0,2.31-.61,3.7,3.7,0,0,0,1.42-1.7h1.27a4.85,4.85,0,0,1-1.89,2.41,5.55,5.55,0,0,1-3.11.85,5.19,5.19,0,0,1-2.7-.71,5,5,0,0,1-1.91-2,5.74,5.74,0,0,1-.7-2.86A5.81,5.81,0,0,1,493.79,173.37Z"
          />
          <path
            class="cls-1"
            d="M520.25,179.1h-4.94l-.95,2.58h-1.15l4-10.73h1.23l4,10.73H521.2Zm-.33-.9-2.14-5.88-2.14,5.88Z"
          />
          <path
            class="cls-1"
            d="M276.5,51.07V92.26h41.82v9.15H276.5v41.82h46.55v9.15h-57.6V41.92h57.6v9.15Z"
          />
          <path
            class="cls-1"
            d="M384.59,97.31,418,152.38H405.73L377.65,106.3,351,152.38H338.67L372,96.83l-33.3-54.75H351L378.91,88l27-45.92H418.2Z"
          />
          <path
            class="cls-1"
            d="M501,126.18H450.86l-9.62,26.2H429.56L469.8,43.5h12.47l40.08,108.88H510.67ZM497.73,117,476,57.38,454.18,117Z"
          />
          <path
            class="cls-1"
            d="M43.78,3.69a7.86,7.86,0,0,0,2.83,2.62c1.52.61,8.48-1,9.79-1.31s6-3.33,7.88-2.93,1.62-.8,3.43-.7,6.46-.52,8.89,0c2.72-.5,6.46-2.31,6.66,1.12-.5,1-.64,1.95.71,2.66C83.26,6.52,81,8.87,81.38,9.71s.16,1.32,2.12,1.35c.6,1.21.13,1.82.47,2.09s9.32,1.48,10.4,3c-.78.57-1.28,1.65.23,2a44.71,44.71,0,0,1,6,1.78c.74.4,3.47,2.59,4.82-.3-.78-1.25-1.38-1.38-.41-2.49s2.26-4.44,4.92-3.54,4,4,9.42,4.38,4.78,1.14,6.06,1.55a13.81,13.81,0,0,0,4.77,0c.54-.13,2.9-2.25,5.49-.2s4.58-.57,6,0,3.17,11.17.17,9.45c-1.95-3.23-3.93-6.09-2.69-.57,2.76,4.21,8.82,15.45,10.53,18s2.93,2.33,3.18,5.56a10.14,10.14,0,0,0,4.3,7.62c2.32,1.51,3.68,6.66,4.34,8.18s7.57,6.16,9.49,9,.86,3.23,1.81,4.4,2.13,2.87,3.44,2.92,11-1.46,16.66-5.1c1-.35,3.48-1.71,2.92,4.3s-7.26,20.44-16,27.41c-2.82,1.41-7,4.54-8.07,6.49s-1.22,3.1-2.56,3.44a6.71,6.71,0,0,0-4.38,5.58c-.54,3.5-3,4.51-3,5s-.13,4,.21,4.51,1.14.47,1.14,1.61-.27,8.22-.27,8.49,1.62.6,2.22,2.42,1.28,6.06.67,8.28,1.15,2.56-.13,4.64-.61,3.57-1.62,4-6.66,3.3-7.6,4.44-2.29,2.36-2.53,2.7-.5.26-.57,1.07-2,.74-2.15.74-.67,1.69-.88,1.82-2.28-.13-2.89,1.28,3,6.8.2,12.79c-.54,1.68-6.73,3.9-6.86,4.71s-.21,7.6-5.79,12.18c-.94,1.35-1.45,3.22-2.31,4.23s-6.86,7.26-7.82,7.72-6.62,3-9.64,1.77a2.26,2.26,0,0,0-2.86,1.11c-.85,1.71-1.69-.66-1.69-.66a9.75,9.75,0,0,1-1.28,1.92c-.36.2-1.92-.94-2.38-.88s-2.92,4.11-6.85-.16c0,0,.67-5.32.63-5.86s-.6-1.45-.87-1.48-2.32-8-4.81-9.53-1.7-2.94-1.7-3.14-1.72-2.48-2-3.38-.3-5.86-.46-6.62-1.11-2-1.11-2.47.46-1.16.36-1.77-1-1.16-1.37-1.56a10.72,10.72,0,0,1-1.36-3.39c0-.65-1.51-3.23-1.66-4.19s-2-1-2-1.71-.56-2.93-.66-3.69-2.52-1.61-1.46-3.68c.4-2.53,1.71-8.23,2.37-11,1.06-1.86,3.38-4.14,3.58-5.7a2.6,2.6,0,0,0-.6-2.37A19.1,19.1,0,0,1,85.63,148c-.2-.51.41-6.21-.91-8.94s-2-3.48-1.81-4.44-4.09-7.07-6.51-9.44-4.45-7-4.35-8.53,3.13-8.38,3.39-9-.61-5.35-.81-6.16-1.11.58-1.24.78-1.49-1.61-1.89-1.79-5.45,1-6.21,1.06-2.32-.65-2.88-3.78a6.66,6.66,0,0,0-7.12-3.08c-1.66,1.06-5.6,3.23-9.33,3.58-1.27.2-2.48.66-2.63.66s-1.36,1.66-1.77,1.92a5.27,5.27,0,0,1-3.23-.66,11,11,0,0,0-7.62-.46c-3,1.06-5.1,2.28-6.26,2.12s-8.88-6.1-9.59-7.32a5.39,5.39,0,0,0-2.42-.4c-.91,0-3.84-2.72-3.89-4.34s.6-3.38.4-3.84S5.57,83.5,5.07,83s.45-1.82-.36-2.43a15.59,15.59,0,0,0-3.58-2C-.08,78.15.07,76.69.07,76.69s-.36-1.27.55-1.82.05-2.68.05-2.68-1.56-2.07.61-4.49c1.56-2.47,2.78-5.6,3.53-6.51a2.56,2.56,0,0,0,0-2.07A7.23,7.23,0,0,1,5.32,53c.07-1.14-.76-.78-1.14-.78a1.67,1.67,0,0,1-.55-2.6c.7-1.44,5.69-8.38,6.16-8.58s1.55-.41,2-2.76,5-5.86,6.19-6.67c.53-.52.27-1.34,2.22-2.29s3.36-2.18,4.14-2.49,1.18-1.58,1.34-1.44a2.13,2.13,0,0,0,1.28-.14c.21-.13.34-2.12.64-2.19s1-.26,1.21-.3A3.46,3.46,0,0,0,30,21.09a8.52,8.52,0,0,1,.43-3,17.72,17.72,0,0,1,8.72-7.54,12,12,0,0,0,3.6-4.25C43.13,5.57,42.67,4,43.78,3.69Z"
          />
          <path
            class="cls-1"
            d="M192,152c.5,1,1.85,11.41,1.75,11.82s-.68,2.22-2.76-.61c.13.74-.14,2.59,0,2.86s1.34,1.72.77,2.56-8.31,20.09-12,23.52c-.94,1.21-1,1.69-3,1.18-.31.2-.44,1.35-1.22,1.58a11.17,11.17,0,0,1-4,0c-.47-.23-1.21-1.65-1.48-2s.1-1.65,0-2.25-2.39-1.22-.1-3.13a36,36,0,0,1,.3-4.82c.1-.54,1.65-1.44,2.12-2.62s.34-2,1.31-2.53a14.18,14.18,0,0,1-.06-1.88c0-.17-1.25-1.92-.47-3.37-.34-.8-1.42-2,.13-3.53s3-4.38,6.87-4.41c1.07-1,1.91-1.55,2-1.68s1.42.07,1.72.07,2.26-3.94,2.9-4.31c.13-.88-.07-2,1.81-2s1.18-1.82,1.11-2.19S191.12,151.6,192,152Z"
          />
          <path
            class="cls-1"
            d="M142.77,222.83l-1.52-7.45A105,105,0,0,0,120.09,7.61a105.87,105.87,0,0,0-23.65,2.67L94.73,2.87A112.65,112.65,0,0,1,232.65,112.56C232.65,165.8,194.85,212.18,142.77,222.83Z"
          />
          <path
            class="cls-1"
            d="M87.93,220.46C40.59,206.37,7.53,162,7.53,112.56a113.24,113.24,0,0,1,.6-11.66l7.57.78a106.54,106.54,0,0,0-.56,10.88c0,46.1,30.83,87.47,75,100.61Z"
          />
        </g>
      </g>
    </svg>
  );
};

const PyramidLogo = () => {
  return (
    <svg
      width="166"
      height="52"
      viewBox="0 0 166 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.8608 3.87451C21.4193 3.87451 17.0776 5.17219 13.3846 7.60346C9.69168 10.0347 6.81338 13.4904 5.1137 17.5334C3.41403 21.5765 2.96931 26.0253 3.8358 30.3174C4.70229 34.6094 6.84106 38.552 9.98165 41.6464C13.1222 44.7408 17.1236 46.8481 21.4797 47.7018C25.8359 48.5556 30.3511 48.1174 34.4545 46.4427C38.5579 44.7681 42.0651 41.9321 44.5327 38.2934C47.0002 34.6548 48.3172 30.3769 48.3172 26.0008C48.3177 23.095 47.7371 20.2176 46.6087 17.5329C45.4804 14.8482 43.8262 12.4089 41.7409 10.3542C39.6555 8.29948 37.1798 6.66969 34.455 5.5579C31.7303 4.4461 28.8099 3.87408 25.8608 3.87451ZM25.9355 9.92619L30.3361 17.9013L25.9355 16.6566L21.4784 17.9177L25.9355 9.92619ZM20.6368 20.1175L25.9355 18.6193L31.1695 20.1012L34.9742 26.9952L25.9355 24.442L16.7856 27.0279L20.6368 20.1175ZM25.8608 32.9471L11.8703 36.529L15.9356 29.231L25.9288 26.408L35.7975 29.1983L39.8479 36.5356L25.8608 32.9471Z"
        fill="#2BB19C"
      />
      <path
        d="M62.157 7.07861C59.77 7.07861 57.3812 7.09988 54.9941 7.09988V22.0671H57.8593V17.6641H62.157C69.6005 17.6641 69.5772 7.07861 62.157 7.07861ZM62.157 15.0766H57.8593V9.77243H62.157C65.8024 9.77243 65.824 15.0766 62.157 15.0766Z"
        fill="#2BB19C"
      />
      <path
        d="M76.4859 13.2808L72.6248 7.10156H69.2168V7.22914L75.055 15.8896V22.0688H77.9185V15.8896L83.9742 7.22914V7.10156H80.5231L76.4859 13.2808Z"
        fill="#2BB19C"
      />
      <path
        d="M95.5416 16.7662C98.4284 16.1872 99.3829 14.1133 99.3829 12.0606C99.3829 9.47312 97.4955 7.12277 93.9148 7.09988C91.5045 7.09988 89.1008 7.07861 86.6855 7.07861V22.0671H89.5507V17.0655H92.308L96.7352 22.0671H100.141V21.8758L95.5416 16.7662ZM89.5507 14.5189V9.73154H93.9148C95.7159 9.73154 96.5177 10.9272 96.5177 12.126C96.5177 13.3249 95.7359 14.5189 93.9148 14.5189H89.5507Z"
        fill="#2BB19C"
      />
      <path
        d="M112.05 7.09985H108.93L102.115 22.0671H105.219L106.519 19.2457H114.464L115.742 22.0671H118.87L112.05 7.09985ZM107.67 16.6157L110.492 10.2451L113.314 16.6157H107.67Z"
        fill="#2BB19C"
      />
      <path
        d="M129.557 13.5588L124.804 7.1228H121.506V22.0901H124.371V11.2069L129.21 17.728H129.774L134.721 11.2281V22.0901H137.586V7.1228H134.309L129.557 13.5588Z"
        fill="#2BB19C"
      />
      <path
        d="M144.801 7.10156H141.957V22.0688H144.801V7.10156Z"
        fill="#2BB19C"
      />
      <path
        d="M154.994 7.09985H149.018V22.0671H154.994C160.306 22.0671 162.654 18.2399 162.59 14.4567C162.523 10.757 160.201 7.09985 154.994 7.09985ZM154.994 19.3537H151.869V9.77241H154.994C158.29 9.77241 159.68 12.1048 159.744 14.4338C159.811 16.8676 158.443 19.3537 154.994 19.3537Z"
        fill="#2BB19C"
      />
      <path
        d="M63.9361 29.72H61.808L55.002 44.6856H57.0653L58.5328 41.4013H67.2129L68.7069 44.6938H70.7487L63.9361 29.72ZM59.2715 39.6823L62.872 31.5993L66.4742 39.6823H59.2715Z"
        fill="#2BB19C"
      />
      <path
        d="M74.0039 44.707H75.8913V38.4427H84.1814V36.7106H75.8913V31.4931H84.5499V29.7185H74.0039V44.707Z"
        fill="#2BB19C"
      />
      <path
        d="M96.1395 39.1475C97.6147 39.0385 98.7136 38.5434 99.4363 37.6624C100.174 36.7131 100.549 35.5382 100.496 34.3438C100.442 33.1493 99.9638 32.0115 99.1441 31.1298C98.2389 30.1899 96.9767 29.72 95.3577 29.72H88.457V44.6856H90.3445V39.298H94.0346L98.7706 44.6856H101.156L96.1395 39.1475ZM90.3445 37.6297V31.385H95.3577C96.3852 31.385 97.1837 31.7121 97.7663 32.3484C98.3283 32.9465 98.6319 33.7366 98.6129 34.5515C98.6276 34.9579 98.5592 35.3632 98.4117 35.743C98.2643 36.1229 98.0409 36.4697 97.7547 36.7628C97.1837 37.3418 96.3537 37.6308 95.2647 37.6297H90.3445Z"
        fill="#2BB19C"
      />
      <path
        d="M106.661 29.7185H104.773V44.6858H106.661V29.7185Z"
        fill="#2BB19C"
      />
      <path
        d="M118.574 43.1465C116.635 43.1465 115.152 42.58 114.125 41.4471C113.098 40.3142 112.573 38.9207 112.548 37.2666C112.534 35.5983 113.051 34.1808 114.1 33.014C115.15 31.8473 116.644 31.2629 118.582 31.2607C120.276 31.2607 121.693 31.8168 122.835 32.929L124.138 31.7317C123.414 31.0078 122.548 30.4356 121.593 30.0497C120.638 29.6638 119.614 29.4721 118.582 29.4861C116.876 29.4861 115.407 29.8677 114.177 30.631C113.019 31.3163 112.085 32.3142 111.486 33.5063C110.914 34.6872 110.63 35.9831 110.656 37.2911C110.669 39.4283 111.36 41.2351 112.728 42.7114C114.095 44.1878 116.045 44.9255 118.576 44.9244C120.818 44.9244 122.699 44.1829 124.22 42.7L122.892 41.4177C122.33 41.981 121.657 42.425 120.914 42.7223C120.172 43.0196 119.375 43.164 118.574 43.1465Z"
        fill="#2BB19C"
      />
      <path
        d="M135.022 29.72H132.894L126.08 44.6856H128.152L129.619 41.4013H138.299L139.793 44.6938H141.833L135.022 29.72ZM130.355 39.6823L133.962 31.5993L137.564 39.6823H130.355Z"
        fill="#2BB19C"
      />
    </svg>
  );
};

export const Header = ({ page }) => {
  return (
    <>
      <div className="h-24 w-full flex justify-between items-center mb-10">
        <div className="w-6/12">
          <img src={Logo} alt="" className="w-[100px] h-[50px]" />
        </div>
        <div className="flex justify-end md:justify-between w-6/12 items-center gap-x-3">
          <span className="text-xl font-medium text-[#242827] hidden md:inline-block">
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
          <div className="md:hidden w-11 h-11 rounded border border-gray-darkest shadow-xl p-[4px] flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"
              />
            </svg>
          </div>
          <button className="hidden md:flex justify-between items-center w-[216px] h-[48px] bg-[#2BB19C] text-lg font-medium rounded-full px-[20px] py-[12px] text-white">
            <span>+</span>
            <span>Free first campaign</span>
          </button>
        </div>
      </div>
      {/* <div> */}
      <div className="hidden md:flex justify-start items-start gap-x-10 mb-6 px-5">
        {/* <span className="border-b-2 border-primary">Overview</span> */}
        <a
          href="/"
          className={`text-lg font-medium ${
            page === "/"
              ? "font-black text-primary underline underline-offset-8"
              : ""
          }`}
        >
          Home
        </a>
        <a
          href="/news"
          className={`text-lg font-medium ${
            page === "/news"
              ? "font-black text-primary underline underline-offset-8"
              : ""
          }`}
        >
          News
        </a>
        <a
          href="/database"
          className={`text-lg font-medium ${
            page === "/database"
              ? "font-black text-primary underline underline-offset-8"
              : ""
          }`}
        >
          Database
        </a>
        <a
          href="/organisations"
          className={`text-lg font-medium ${
            page === "/organisations"
              ? "font-black text-primary underline underline-offset-8"
              : ""
          }`}
        >
          Organisations
        </a>
        <a
          href="/yprlink"
          target="_blank"
          className={`text-lg font-medium ${
            page === "/yprlink"
              ? "font-black text-primary underline underline-offset-8"
              : ""
          }`}
        >
          Yprlink
        </a>
      </div>
      {/* </div> */}
    </>
  );
};
