import React, {useState} from "react";
import Hindibanner from "../Hindi/Hindibanner.jsx";
import Hindi from "../../../../Components/DepartSIde/Hindi.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
function Hindi_events() {
  const [visible, setVisible] = useState(false);
  return (
    <div className=" flex flex-col">
      <div className="">
        <Hindibanner />
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
                <Hindi />
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
        <div className="  md:flex hidden md:flex-col mt-12 ml-2">
          <Hindi />
        </div>
        <div className="w-full mr-16">
          <h2 className="md:text-4xl text-lg uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center ml-4 items-center  ">
            Events
          </h2>
          <div className="pr-3 pl-3 flex mr-1 ml-1">
            <span className="md:text-2xl text-xl underline text-justify font-bold mb-2 mt-3">
              आचार्य हजारी प्रसाद द्विवेदी स्मारक भाषणमाला - वर्ष 2019
            </span>
          </div>
          <div>
            <h2 className="md:text-xl text-lg text- ml-4 font-bold mb-1">
              विषय - ट्रांसजेंडर : साहित्य, समाज और चुनौतियाँ
            </h2>
            <br />
            <div className="ml-4">
              <span className="md:text-lg text-sm text-justify font-medium">
                दौलतराम महाविद्यालय के हिंदी विभाग द्वारा 3 मार्च 2020 को आचार्य
                हजारी प्रसाद द्विवेदी स्मारक भाषणमाला - 39 का आयोजन किया गया।
                जिस का विषय था -
                <strong> " ट्रांसजेंडर : साहित्य, समाज और चुनौतियां "</strong>.
                कार्यक्रम में अध्यक्ष के रूप में दिल्ली विश्वविद्यालय के हिंदी
                विभाग से <strong>प्रो. पूरनचंद टंडन</strong>, विशिष्ट वक्ता के
                रूप में दिल्ली विश्वविद्यालय के हिंदी विभाग से{" "}
                <strong>प्रो. कुमुद शर्मा </strong>, मुख्य अतिथि के रूप में{" "}
                <strong>‘साथी’ की प्रोग्राम मैनेजर अमृता सरकार</strong> व मुख्य
                वक्ता के रूप में <b>डॉ. भारती अग्रवाल </b>शामिल हुए।
                <br />
                {/* <figure className="flex pr-4 pl-4 pb-2">
                  <div
                    style={{
                      backgroundImage:
                        "url(/images/ImgPages/Commerce/Event_1.jpg)",
                      width: "720px",
                      height: "400px",
                    }}
                    className="bg-center ml-auto mr-auto object-fit bg-no-repeat mt-[3%] bg-cover h-10  rounded-2xl border-2 border-black"
                    // className="rounded-3xl border-black border-2 h-[400px] mr-10 ml-64"
                  ></div>
                </figure> */}
              </span>

              <span className="md:text-lg text-sm text-justify font-medium">
                आचार्य हजारी प्रसाद द्विवेदी जी की सुपुत्री डाक्टर इंदुमती ओझा
                जी ने आचार्य हजारी प्रसाद द्विवेदी जी की समृति में वर्ष 1980 में
                दौलतराम महाविद्यालय के हिन्दी विभाग द्वारा "आचार्य हजारी प्रसाद
                द्विवेदी स्मारक भाषणमाला" का आयोजन किया था। तबसे दौलतराम
                महाविद्यालय का हिन्दी विभाग निरंतर भाषणमाला आयोजित कर रहा है।
                उन्होंने यह भी बताया कि इसमें विषय का चयन समसामयिक एवं साहित्यिक
                मूल्यों को नई दृष्टि एवं नई रोशनी में देखने के प्रयास रूप में
                होता है। इसी क्रम में इस बार ३९ वीं कड़ी के अन्तर्गत
                ट्रांसजेंडर:साहित्य समाज और चुनौतियाँ विषय का चयन किया गया जिससे
                हम उनके मन की बात और संघर्ष को निकट से जान एवं समझ सकें।
              </span>
              <div className="pr-3  flex">
                <span className="md:text-2xl text-lg underline text-justify font-bold mt-3">
                  छात्र संवर्धन कार्यक्रम तीन दिवसीय कार्यशाला (SDP )रिपोर्ट
                  2020-21)
                </span>
              </div>
              <div className="pr-3  flex">
                <span className="md:text-lg text-sm text-justify font-medium">
                  <p>
                    {" "}
                    <strong>कार्यक्रम </strong>– तीन दिवसीय छात्र संवर्धन
                    कार्यक्रम (SDP)
                  </p>
                  <p>
                    {" "}
                    <strong>विषय </strong> – ‘’गूगल क्लास रूम द्वारा आई.सी.टी.
                    मिश्रित शिक्षण अधिगम : परोक्ष कक्षा को जीवंत बनाना ‘’
                  </p>
                  <p>
                    {" "}
                    <strong>विभाग </strong> – हिंदी{" "}
                  </p>
                  <p>
                    {" "}
                    <strong>उद्देश्य</strong> – छात्राओं को गूगल क्लास रूम से
                    सम्बन्धित विभिन्न टूल्स की जानकारी देना जैसे-गूगल
                    क्लासरूम,गूगल मीट,क्लास वर्क मैनेजमेंट,असाइनमेंट स्कैन करके
                    अपलोड करना,वस्तुनिष्ठ प्रश्नोत्तरी के उत्तर सबमिट
                    करना,ट्रांसलेटर एप की जानकारी,एम.एस.ऑफिस टूल्स आदि.
                  </p>
                  <p>
                    {" "}
                    <strong>पाठ्यक्रम समन्वयक </strong> – डॉ. ज्योति शर्मा
                    (विभागाध्यक्षा)
                  </p>
                  <p>
                    {" "}
                    <strong>समयावधि</strong> – 10बजे से – मध्याहन 12 बजे तक{" "}
                  </p>
                  <p>
                    {" "}
                    <strong>दिनांक</strong> – 17-19 अगस्त 2020
                  </p>
                  <p>
                    {" "}
                    <strong>प्रतिभागियों की संख्या</strong> – 160 छात्राएं
                  </p>
                  <p>
                    {" "}
                    <strong>कार्यक्रम रुपरेखा / सूची</strong>
                  </p>

                  <p>
                    {" "}
                    <strong>17th August 2020</strong>
                  </p>
                  <p>
                    {" "}
                    Google Classroom (Stream), Google Meet, G Classroom
                    (Classwork Management, Assignment handling) Part 1, Scanning
                    documents and sharing in PDF (hindi hand-written assignment)
                    in three modes.
                  </p>
                  <p>
                    {" "}
                    <strong >18th August 2020 </strong>{" "}
                  </p>
                  <p>
                    {" "}
                    Classwork Management (Assignment handling) Part 2, G
                    Classroom (People), Google Docs, Quiz Answering (that is
                    created) – Assignment to be uploaded in hindi (translator).
                  </p>
                  <p>
                    {" "}
                    <strong>19th August 2020</strong>
                  </p>
                  <p>
                    {" "}
                    Add-Ons – Translator etc., You-tube videos for translation
                    (Voice drafting link), other MS Office tools, and Queries.
                  </p>
                  <br />
                  <p>
                    <strong>छात्र मूल्यांकन का आधार</strong> – वस्तुनिष्ठ
                    प्रश्नावली पहले और दूसरे दिन
                  </p>
                  <p>
                    <strong>ई कार्यशाला का सार/रिपोर्ट -</strong>
                  </p>
                  <p>
                    दौलत राम महाविद्यालय के आंतरिक गुणवत्ता आश्वासन प्रकोष्ठ
                    (IQAC) के अंतर्गत हिंदी विभाग द्वारा आंतरिक कौशल विकास
                    कार्यक्रम के तहत ‘’गूगल क्लास रूम द्वारा आई.सी.टी.मिश्रित
                    शिक्षण अधिगम : परोक्ष कक्षा को जीवंत बनाना’’ विषय पर
                    छात्राओं के लिए तीन दिवसीय इ कार्यशाला का आयोजन किया गया. इस
                    इ कार्यशाला द्वारा छात्राओं ने ऑनलाइन शिक्षण अधिगम के
                    क्षेत्र में पूरे उत्साह और मनोयोग के साथ कदम बढ़ाया. कोविड-19
                    के इस दौर में जहाँ एक ओर जिन्दगी की रफ़्तार थमी हुई-सी लगती
                    है वहीँ दूसरी ओर अनेक नए बदलाव हमारी जिंदगी का हिस्सा बन गए
                    हैं. परम्परागत शिक्षा प्रणाली से थोडा अलग अब देशभर के शिक्षण
                    संस्थान ऑनलाइन शिक्षा माध्यमों को अपना रहे हैं.इस ऑनलाइन
                    प्लेटफ़ॉर्म पर निः संदेह छात्रों और अध्यापकों को आरम्भिक स्तर
                    पर कुछ समस्याओं का सामना करना पड़ रहा है परन्तु सीखने-सिखाने
                    की इस प्रकिया में अवश्य कुछ सकारात्मक बदलाव आएगा.इसी
                    सकारात्मक सोच के साथ महाविद्यालय की प्राचार्या डॉ.सविता रॉय
                    ने छात्र हित में सभी विभागों द्वारा इ एस.डी.पी. आयोजित किये
                    जाने का निर्देश दिया.इस कार्यशाला की समन्वयक और हिंदी विभाग
                    की विभागाध्यक्षा डॉ.ज्योति शर्मा ने हिंदी विशेष की द्वितीय
                    एवं तृतीय वर्ष की छात्राओं के लिए17-19 अगस्त 2020 को सुबह 10
                    बजे से मध्याह्न 12 बजे तक इस कार्यशाला का आयोजन किया.वाणिज्य
                    विभाग की सहायक प्रवक्ता डॉ.गुंजन गुप्ता और सुश्री मेघा जैन
                    इस कार्यशाला में संसाधक वक्ता के रूप में उपस्थित रहीं. अंतिम
                    दिन छात्राओं से प्रतिपुष्टि पत्र गूगल लिंक द्वारा भरवाया
                    गया.
                  </p>
                  <br />
                  <p><strong>प्रतिपुष्टि पत्र के आधार पर कार्यक्रम का सार – 
</strong></p>
<p>छात्राओं द्वारा अंतिम दिन कार्यशाला से सम्बन्धित प्रतिपुष्टि पत्र भरवाया गया.छात्राओं की इस सम्बन्ध में बहुत अच्छी प्रतिक्रिया रही.उनका मानना है कि इस तरह की कार्यशाला के आयोजन द्वारा उन्हें गूगल क्लास रूम के बेसिक्स समझ आए जिससे ऑनलाइन क्लास लेने और वहां कक्षा सम्बन्धी विभिन्न कार्यों को करने में उन्हें आसानी रहेगी.छात्राओं के लिए प्रत्येक सत्र बहुत रोचक और ज्ञानवर्धक रहे.उनका कहना है कि गूगल क्लास रूम से सम्बन्धित इस तरह की इ कार्यशाला का आयोजन नए गूगल क्लास रूम टूल्स के साथ किया जाना चाहिए.
</p>
<br />
<p>
                    <strong>वस्तुनिष्ठ प्रश्नावली</strong>  – 17 अगस्त 2020
                  </p>
<p>
                    <strong>वस्तुनिष्ठ प्रश्नावली</strong>  – 18 अगस्त 2020
                  </p>
<p>
                    <strong>प्रतिपुष्टि पत्र</strong>  – 19 अगस्त 2020
                  </p>

                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hindi_events;
