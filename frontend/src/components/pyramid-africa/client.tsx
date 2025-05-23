import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/card";
import { Link } from "react-router-dom";
// @ts-ignore
import myriad from "../../assets/consulting/myriad.png";
// @ts-ignore
import joro from "../../assets/consulting/joro.png";
// @ts-ignore
import transsion from "../../assets/consulting/transsion.png";
// @ts-ignore
import cegid from "../../assets/consulting/cegid.png";
// @ts-ignore
import nomad from "../../assets/consulting/nomad.png";
// @ts-ignore
import inclusivity from "../../assets/consulting/inclusivity.png";
// @ts-ignore
import africaTechIndustry from "../../assets/consulting/africaTechIndustry.jpg";
// @ts-ignore
import lauchAfrica from "../../assets/consulting/lauchAfrica.png";
// @ts-ignore
import magma from "../../assets/consulting/magma.png";
// @ts-ignore
import prepayNation from "../../assets/consulting/prepayNation.jpg";
// @ts-ignore
import dlocal from "../../assets/consulting/d-local.png";

const Client = () => {
  return (
    <div>
      <Header page="https://expand-in-africa.com/" />
      <div className="bg-[#F4FBFA] py-28 flex justify-center">
        <div className="max-w-[750px] gap-12 flex flex-col justify-center items-center">
          <div className="flex flex-row gap-1">
            <Link to="https://expand-in-africa.com/" className="text-grayDarkest font-medium">
              Home
            </Link>
            <span>{">"}</span>
            <Link to="https://expand-in-africa.com//clients" className="text-[#2BB19C] font-bold">
              Clients
            </Link>
          </div>
          <h1 className="text-[40px] sm:text-[55px] text-center font-bold leading-16 text-transparent bg-clip-text bg-gradient-to-r from-[#111B21] to-[#2BB19C]">
            Our Clients
          </h1>
          <p className="text-[#242827] font-light text-center text-xl max-w-[655px]">
            We support a great variety of clients: private firms, public
            institutions, marketing and event agencies, and Non-Governmental
            Organizations.
          </p>
        </div>
      </div>

      {/* Clients Section */}
      <section className="px-6 py-20 flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 max-w-7xl">
          <Card
            src={""}
            name="Tolbi"
            country="Senegal"
            sector="Agriculture"
            description="Tolbi is a cutting-edge agricultural analysis platform that helps businesses in West Africa make informed decisions and improve their performance."
            website="https://tolbi.ai/"
          />

          <Card
            src={myriad}
            name="Myriad"
            country="Panafricain"
            sector="Fintech"
            description="Myriad, an innovative player, offers digital and financial solutions to telcos, banks and fintechs, including a white-label wallet for microfinance institutions."
            website="https://fintech.myriadgroup.com/"
          />

          <Card
            src={joro}
            name="Joro"
            country="Morrocco"
            sector="Fintech"
            description="Joro is a Moroccan fintech offering financial services to the unbanked via a network of local agents, enabling deposits, withdrawals, payments and top-ups."
            website="https://play.google.com/store/apps/details?id=com.mynk.mobile.lite&hl=fr&pli=1"
          />

          <Card
            src={transsion}
            name="Transsion"
            country="Global"
            sector="Publicité"
            description="Transsion, Africa's leading smartphone manufacturer (Tecno, Infinix, Itel), offers EagleWin, a platform that boosts brand visibility and boosts downloads."
            website="https://www.transsion.com/en"
          />

          <Card
            src={cegid}
            name="Cegid"
            country="Panafrican"
            sector="software and technology"
            description="Cegid is a leading global provider of cloud-based business management solutions, specializing in software for accounting, finance, payroll, and retail management."
            website="https://www.cegid.com/fr/"
          />

          <Card
            src={nomad}
            name="Nomad Education"
            country="Panafrican"
            sector="Education"
            description="Nomad Education is an edtech platform that provides free, mobile-based learning resources and study guides for students across various educational levels."
            website="https://www.nomadeducation.fr/"
          />

          <Card
            src={inclusivity}
            name="Inclusivity Solutions"
            country="Panafrican"
            sector="Fintech"
            description="Inclusivity Solutions is a digital insurance provider that develops and delivers affordable, accessible insurance products tailored for emerging market."
            website="https://inclusivitysolutions.com/"
          />

          <Card
            src={africaTechIndustry}
            name="African Tech Industry"
            country="Panafrican"
            sector="Institutional"
            description="The African Tech Industry Club is a network of decision-makers and leaders who place African markets at the heart of their innovation and development strategies."
            website="https://www.africantechindustry.com/african-tech-industry"
          />

          <Card
            src={lauchAfrica}
            name="Launch Africa"
            country="Panafrican"
            sector="Investment"
            description="Launch Africa is a venture capital firm that invests in early-stage tech startups across the African continent."
            website="https://www.launchafrica.vc/"
          />

          <Card
            src={magma}
            name="Magma"
            country="Cameroun"
            sector="Remittance"
            description="Kamis is the first solution allowing Cameroonian to transfer funds to Cameroun with 0% commission fees."
            website="#"
          />

          <Card
            src={prepayNation}
            name="Prepay Nation"
            country="Cameroun"
            sector="Remittance"
            description="Prepay Nation is a world leader in the distribution of prepaid digital services, offering a wide range of products."
            website="#"
          />

          <Card
            src="https://image.jimcdn.com/app/cms/image/transf/none/path/sc5cc55079f645780/image/iebc39ae84b38f4f6/version/1675772979/image.png"
            name="One All Sports"
            country="Cameroun"
            sector="Remittance"
            description="Kamis is the first solution allowing Cameroonian to transfer funds to Cameroun with 0% commission fees."
            website="#"
          />

          <Card
            src="https://image.jimcdn.com/app/cms/image/transf/dimension=235x10000:format=png/path/sc5cc55079f645780/image/ie9b0f707303ccd6f/version/1675700003/image.png"
            name="Cova Assurance"
            country="Panafrican"
            sector="Assurance"
            description="Making insurance less hard to distribute, to buy and to benefit from, for billions Africans."
            website="https://cova.africa/"
          />

          <Card
            src="https://image.jimcdn.com/app/cms/image/transf/dimension=201x10000:format=png/path/sc5cc55079f645780/image/ia395f61769ce46bd/version/1675772872/image.png"
            name="Possible.africa"
            country="Panafrican"
            sector="Media"
            description="Possibe.africa is an online media taht promotes positives initiatives in Africa."
            website="https://www.possible.africa/"
          />

          <Card
            src="https://image.jimcdn.com/app/cms/image/transf/dimension=232x10000:format=png/path/sc5cc55079f645780/image/i049459e5f7276005/version/1675772833/image.png"
            name="One All Sports"
            country="Cameroun"
            sector="Retail"
            description="One All Sports has 20 years of experience in sports related apparel and accessories industry."
            website="https://www.oneallsports.com/"
          />

          <Card
            src="https://image.jimcdn.com/app/cms/image/transf/dimension=234x10000:format=png/path/sc5cc55079f645780/image/i4975fac7d8a7e3e2/version/1675772828/image.png"
            name="Bee"
            country="Panafrican"
            sector="Consulting"
            description="Bee Moto offers a safe way to move around Douala and Yaounde."
            website="https://beegroup.cm/"
          />

          <Card
            src="https://image.jimcdn.com/app/cms/image/transf/dimension=294x10000:format=png/path/sc5cc55079f645780/image/i2715957938f5852b/version/1667650675/image.png"
            name="Plug & Play"
            country="Morocco"
            sector="Tech"
            description="Plug and Play is an innovation platform bringing together startups and large corporations."
            website="https://www.plugandplaytechcenter.com/morocco/"
          />

          <Card
            src="https://image.jimcdn.com/app/cms/image/transf/dimension=294x10000:format=png/path/sc5cc55079f645780/image/ib2ec4302f92bf8c8/version/1667650675/image.png"
            name="Chapter54"
            country="Panafrican"
            sector="Tech"
            description="Chapter54 is a program by doers, with doers, for doers. Each year we will select 10 companies, coming from all over Europe, to support them to expand to Africa."
            website="https://chapter54.com/"
          />

          <Card
            src="https://image.jimcdn.com/app/cms/image/transf/dimension=294x10000:format=png/path/sc5cc55079f645780/image/i0b7ab7bddcbc3b09/version/1667650675/image.png"
            name="Inskip"
            country="Panafrican"
            sector="Consulting"
            description="INSKIP is an entrepreneurship development company."
            website="https://www.inskip.fr/en/home"
          />

          <Card
            src="https://image.jimcdn.com/app/cms/image/transf/dimension=294x10000:format=png/path/sc5cc55079f645780/image/ia16f71316721aa58/version/1650811318/image.png"
            name="Libon"
            country="Ivory Coast"
            sector="Telecom"
            description="Libon is a voice over IP service for cross border calls."
            website="https://www.libon.com/fr/"
          />

          <Card
            src="https://image.jimcdn.com/app/cms/image/transf/dimension=294x10000:format=png/path/sc5cc55079f645780/image/ibfe3a15f926e112e/version/1650811426/image.png"
            name="Intouch"
            country="Panafrican"
            sector="Financial Services"
            description="Fintech specializing in payment solutions, aggregation of digital services and distribution network acquisition."
            website="#"
          />

          <Card
            src="https://image.jimcdn.com/app/cms/image/transf/dimension=294x10000:format=png/path/sc5cc55079f645780/image/i03c4f93627d9de9c/version/1650811509/image.png"
            name="Hub2"
            country="Panafrican"
            sector="Financial Services"
            description="Payment aggregator in Sub-Saharan Africa deployed in 7 countries."
            website="https://www.hub2.io/"
          />

          <Card
            src="https://image.jimcdn.com/app/cms/image/transf/dimension=294x10000:format=png/path/sc5cc55079f645780/image/i674bdc431e22785a/version/1650811647/image.png"
            name="Pass Africa"
            country="Afrique - Europe"
            sector="Institutional"
            description="The Presidential Council for Africa (CPA) is an organization founded by French President E. Macron Its aim is to provide the President with original insight into the challenges of the relationship between France and the countries of the African continent."
            website="https://www.cpafrique.fr/portail-entrepreneurs/"
          />

          <Card
            src={dlocal}
            name="Dlocal"
            country="Panafrican"
            sector="Financial Services"
            description="DLocal powers local payments connecting merchants with billions of emerging market consumers through one single API."
            website="https://dlocal.com/"
          />

          <Card
            src="https://image.jimcdn.com/app/cms/image/transf/dimension=294x10000:format=png/path/sc5cc55079f645780/image/i535d824cb24cad9d/version/1650811798/image.png"
            name="Aza Finance"
            country="Panafrican"
            sector="Financial Services"
            description="AZA is a leading provider of cross-border payment solutions for businesses."
            website="https://azafinance.com/about/"
          />

          <Card
            src="https://image.jimcdn.com/app/cms/image/transf/dimension=294x10000:format=png/path/sc5cc55079f645780/image/i63943bc0018601f1/version/1650816534/image.png"
            name="Ding"
            country="Panafrican"
            sector="Telecom"
            description="Ding is an international mobile recharge service, allowing users to send mobile top-up to friends and family in over 150 countries."
            website="https://www.ding.com/about-us"
          />

          <Card
            src="https://image.jimcdn.com/app/cms/image/transf/dimension=294x10000:format=png/path/sc5cc55079f645780/image/i3a40524085d2dafe/version/1650812118/image.png"
            name="IPDemat"
            country="Afrique - Europe"
            sector="Remittance"
            description="Ipdemat is a Cash Collection Network for cross border remittance."
            website="https://ip-demat.business.site/"
          />

          <Card
            src="https://image.jimcdn.com/app/cms/image/transf/dimension=294x10000:format=png/path/sc5cc55079f645780/image/ic108a0b8157c3acb/version/1650816549/image.png"
            name="Baloon"
            country="Senegal"
            sector="Financial Services"
            description="Baloon is a Digital Insurance Broker operating in 6 countries on the African Continent."
            website="https://www.baloon.africa/"
          />

          <Card
            src="https://image.jimcdn.com/app/cms/image/transf/dimension=294x10000:format=png/path/sc5cc55079f645780/image/i09b7580f681069c9/version/1650816619/image.png"
            name="April"
            country="Panafrican"
            sector="Financial Services"
            description="April Insurance is a leading wholesale broker."
            website="https://www.april.fr/"
          />

          <Card
            src="https://image.jimcdn.com/app/cms/image/transf/dimension=294x10000:format=png/path/sc5cc55079f645780/image/ie7eb9d589bab9895/version/1650816685/image.pngx"
            name="EM Guidance"
            country="Ghana"
            sector="Health"
            description="EMGuidance is the most trusted, comprehensive and relevant FREE medicines and guideline resource for medical professionals, providing up-to-date information."
            website="https://emguidance.com/"
          />

          <Card
            src="https://image.jimcdn.com/app/cms/image/transf/dimension=294x10000:format=png/path/sc5cc55079f645780/image/ia25ce8258bd09094/version/1650816775/image.png"
            name="Greentec Capital Partners"
            country="Panafrican"
            sector="Capital"
            description="GreenTec Capital Partners is a long-term investor that joins forces with startups from the proof of concept stage onwards and SMEs."
            website="https://greentec-capital.com/"
          />

          <Card
            src="https://image.jimcdn.com/app/cms/image/transf/dimension=294x10000:format=png/path/sc5cc55079f645780/image/id14137601b15e20e/version/1650817070/image.png"
            name="Africapresse.paris"
            country="Afrique - Europe"
            sector="Media"
            description="AfricaPresse.Paris is media specialized in economic news from the African diaspora in France."
            website="https://www.africapresse.paris/?lang=fr"
          />

          <Card
            src="https://image.jimcdn.com/app/cms/image/transf/dimension=294x10000:format=png/path/sc5cc55079f645780/image/i3c95ae07cee8ed85/version/1650817177/image.png"
            name="Ipemed"
            country="Afrique - Europe"
            sector="Institutional"
            description="The Mediterranean World Economic Prospective Institute (IPEMED) is a Euro-Mediterranean think tank."
            website="http://www.ipemed.coop/fr/"
          />

          <Card
            src="https://image.jimcdn.com/app/cms/image/transf/dimension=294x10000:format=png/path/sc5cc55079f645780/image/id1ee40e4a0bc5d5c/version/1650817299/image.png"
            name="Impact Amplifier"
            country="South Africa"
            sector="Tech"
            description="Impact amplifier is an investment, supplier development and sustainability advisory firm."
            website="https://www.impactamplifier.co.za/"
          />

          <Card
            src="https://image.jimcdn.com/app/cms/image/transf/dimension=294x10000:format=png/path/sc5cc55079f645780/image/ie0f7c8922a888a83/version/1650817387/image.png"
            name="Africarena"
            country="Afrique - Europe"
            sector="Tech"
            description="AfricArena is an African tech accelerator that runs Corporate Open Innovation challenges throughout the African continent."
            website="https://www.africarena.com/"
          />

          <Card
            src="https://image.jimcdn.com/app/cms/image/transf/dimension=294x10000:format=png/path/sc5cc55079f645780/image/i44ca4c3677d45f35/version/1650817461/image.png"
            name="Digital Africa"
            country="Afrique - Europe"
            sector="Institutional"
            description="Pan-African initiative that aims to bring out innovative 'made in Africa' solutions for the real economy."
            website="https://digital-africa.co/"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Client;
