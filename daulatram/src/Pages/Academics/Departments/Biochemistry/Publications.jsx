import React, {useState} from "react";
import DepartBanner from "../../../../Components/Banners/DepartBanner";
import Biochemistry from "../../../../Components/DepartSIde/Biochemistry";
import Departments from "../../../../Components/Sidebar/Departments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
function Publications() {
  const [visible, setVisible] = useState(false);
  return (
    <div className=" flex flex-col">
      <div className="">
        <DepartBanner />
      </div>
      <div className="flex flex-row">
      <div className="md:hidden">
          {visible ? (
            <>
              <div className=" flex  flex-col mt-8 ml-2">
                <FontAwesomeIcon
                  icon={faClose}
                  size="lg"
                  onClick={() => setVisible(!visible)}
                  className=" border-2  border-[#000080] mr-2 hover:text-black text-white  rounded-lg p-2 cursor-pointer hover:bg-white bg-[#000080]"
                />
                <Biochemistry />
              </div>
            </>
          ) : (
            <div className=" flex  flex-col mt-8 ml-2">
              <FontAwesomeIcon
                icon={faBars}
                size="lg"
                onClick={() => setVisible(!visible)}
                className="text-black border-2 border-[#000080] mr-2 hover:text-white bg-[#fff] rounded-lg p-2 cursor-pointer hover:bg-[#000080]"
              />
            </div>
          )}
        </div>
      <div className=" md:flex hidden md:flex-col mt-12 ml-2 ">
              <Biochemistry/>

              </div>
        <div>
          <div className="w-full ml-2">
            <h2 className="md:text-4xl text-lg uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
              Publications
            </h2>
          </div>
          <div className="flex flex-row">
            <div>
              <div>
                <ol className="md:text-base text-sm list-decimal mt-2 ml-10 mr-20 text-justify mb-4">
                  <li>
                    Manisha Gupta, Babbar, Simran, Goel Anita, Gupta Radhika,
                    Dohare Neeraj And Nanda Sarita Pollution Controlling Ability
                    Of Indigenous Plant Species Growing Around Drain In Delhi.
                    Pollution Research(2019)
                    <strong>
                      {" "}
                      Vol 38, November Suppl Issue; Page No.(29-35 ).
                    </strong>
                  </li>
                  <br />

                  <li>
                    Babbar Simran, Manisha Gupta, Neeraj Dohare, Anita Goel,
                    Radhika Gupta And Sarita Nanda Pollution Controlling Ability
                    Of Plant Species Growing On College Campus In Delhi, India.{" "}
                    <strong>
                      Pollution Research 2019 Vol 38, November Suppl Issue; Page
                      No.(23-29 )
                    </strong>{" "}
                    ISSN 0257-8050-Quarterly
                  </li>
                  <br />
                  <li>
                    Jyoti Taneja, Taruna Arora, Anju Jain, Chandra Manshukhani,
                    Latika Bhalla and Sarita Nanda. Polycystic Ovary Syndrome
                    Risk: Efficacy of Self Assessment Test Int. J Reprod
                    Contracept Obstet & Gynecol(2020) Jul; 9(7): 2015-20p,
                    <strong> ISSN 2320-1770; eISSN 2320-1789</strong>
                  </li>
                  <br />
                  <li>
                    Nishant Ranjan Chauhan, Medha Kapoor, Laxmi Prabha Singh,
                    Rajinder Kumar Gupta, Ramesh Chand Meena, Rajkumar
                    Tulsawani, Sarita Nanda, Shashi Bala Singh; Heat Stress
                    induced Neuroinflammation and Aberration in Monoamine levels
                    in Hypothalamus are associated with Temperature
                    Dysregulation; Neuroscience, 2017, 358, 79-92.
                    <strong>(Impact Factor: 3.277) ISSN 0306-4522</strong>{" "}
                  </li>
                  <br />
                  <li>
                    Malini Sharma, sarita nanda, Ritu Khanna, Pooja Khanna,
                    Sumeet Goyal, (2017)Quantification of carbon footprint and
                    handprint in the college campus: a peek into the future.
                    International Journal of Innovative research in science,
                    engineering and technology, Vol 6, Issue 4,{" "}
                    <strong>April 2017(21 h index)</strong>
                  </li>
                  <br />

                  <li>
                    Gupta R, Ranjan S, Yadav A, Verma B, Malhotra K, Madan M,
                    Chopra O, Jain S, Gupta S, Joshi A, Bhasin C, Mudgal P.
                    Toxic Effects of Food Colorants Erythrosine and Tartrazine
                    on Zebrafish EmbryoDevelopment. Curr Res Nutr Food Sci 2019;
                    7(3)
                  </li>
                  <br />
                  <li>
                    The unfoldase ClpC1 of Mycobacterium tuberculosis regulates
                    the expression of a distinct subset of proteins having
                    intrinsically disordered termini.Lunge A, Gupta R, Choudhary
                    E, Agarwal N. J Biol Chem.{" "}
                    <strong>2020 Jul 10;295(28):9455-9473</strong>
                  </li>
                  <br />
                  <li>
                    An insight into the binding of aceclofenac with bovine serum
                    albumin at physiological condition: A spectroscopic and
                    computational approach. <strong>Neeraj Dohare,</strong>{" "}
                    Abbul Bashar Khan, Neha Maurya, Sonu Thakur, Fareeda Athar,
                    Prashant Singh, Rajan Patel. Journal of Biomolecular
                    Structure and Dynamics 2018
                  </li>
                  <br />
                  <li>
                    Effect of aromatic amino acids on the surface properties of
                    1-dodecyl-3-(4-(3-dodecylimidazolidin-1-yl) butyl)
                    imidazolidine bromide gemini surfactant. Jitendra Kumar
                    Maurya, Abbul Bashar Khan, <strong>Neeraj Dohare,</strong>{" "}
                    Anwar Ali, Amit Kumar, Rajan Patel Journal of Dispersion
                    Science and Technology 2018
                  </li>
                  <br />
                  <li>
                    Enthalpy-driven interaction between dihydropyrimidine
                    compound and bovine serum albumin: a spectroscopic and
                    computational approach. Manasa Kongot, Neha Maurya,{" "}
                    <strong>Neeraj Dohare, </strong>
                    Mehraj-ud-din Parray, Jitendra Kumar Maurya, Amit Kumar,
                    Rajan Patel. Journal of Biomolecular Structure and Dynamics
                    2018
                  </li>
                  <br />
                  <li>
                    Effect of cationic gemini surfactant and its monomeric
                    counterpart on the conformational stability and esterase
                    activity of human serum albumin. Mehraj-ud-din Parray,
                    Muzaffar Ul Hassan Mir, <strong>Neeraj Dohare,</strong> Neha
                    Maurya, Abbul Bashar Khan, Mahendra S Borse, Rajan Patel.
                    Journal of Molecular Liquids 2018
                  </li>
                  <br />
                  <li>
                    A novel biocompatible NiII tethered moiety as a glucose
                    uptake agent and a hit against methicillin-resistant
                    Staphylococcus aureus.
                    <br />
                    Manasa Kongot, <strong>Neeraj Dohare,</strong> Vishal Singh,
                    Dinesh S Reddy, Nitin Kumar Singhal, Rajan Patel, Amit
                    Kumar. Manasa Kongot, <strong>Neeraj Dohare,</strong>Vishal
                    Singh, Dinesh S Reddy, Nitin Kumar Singhal, Rajan Patel,
                    Amit Kumar.
                    <br />
                    European Journal of Pharmaceutical Sciences 2018
                  </li>
                  <br />
                  <li>
                    Esterase activity and conformational changes of bovine serum
                    albumin toward interaction with mephedrone: Spectroscopic
                    and computational studies.
                    <br />
                    Rajan Patel, Neha Maurya, Mehraj-ud-din Parray, Nida Farooq,
                    Abrar Siddique, Kanak Lata Verma,{" "}
                    <strong>Neeraj Dohare.</strong>
                    <br />
                    Journal of Molecular Recognition 2018
                  </li>
                  <br />
                  <li>
                    In vitro apoptosis-induction, antiproliferative and BSA
                    binding studies of aoxidovanadium (V) complex. <br />
                    Manasa Kongot, <strong>Neeraj Dohare,</strong> Dinesh S
                    Reddy, Neha Pereira, Rajan Patel, Mahesh
                    <br />
                    Subramanian, Amit Kumar. Journal of Trace Elements in
                    Medicine and Biology 2019
                  </li>
                  <br />

                  <li>
                    Effect of adiphenine hydrochloride on the structure of
                    bovine serum albumin: Spectroscopic and docking study.
                    <br />
                    <strong>Neeraj Dohare,</strong> Mehrajud din Parray, Md
                    Abrar Siddiquee, Abbul Bashar Khan, Khalid Ahmed Alzahrani,
                    Abdul mohsen Ali Alshehri, Maqsood Ahmad Malik, Rajan Patel.
                    Journal of Molecular Structure 2020
                  </li>
                  <br />
                  <li>
                    Esterase activity and interaction of human hemoglobin with
                    diclofenac sodium: A spectroscopic and molecular docking
                    study. <br />
                    <strong>Neeraj Dohare, </strong>Md Abrar Siddiquee, Mehrajud
                    din Parray, Amit Kumar, Rajan Patel. Journal of Molecular
                    Recognition. 2020
                  </li>
                  <br />
                  <li>
                    Wardhan R, Mudgal P. Understanding the predisposing risk
                    factors of young suicide. Int J Res Med Sci 2020; 8: 4530-7.
                  </li>
                  <br />
                  <li>
                    Mudgal P, Wardhan R. The increased risk of elderly
                    population in India in COVID-19 pandemic. Int J Health Sci
                    Res. 2020; 10(10):166-175.
                  </li>
                </ol>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Publications;
