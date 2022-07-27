import React,{useState} from "react";
import Hindibanner from "../Hindi/Hindibanner.jsx";
import Hindi from "../../../../Components/DepartSIde/Hindi.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
function Hindi_about() {
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
            विभाग का संक्षिप्त परिचय
          </h2>

          <div className="flex flex-row">
            <div className="flex flex-col">
              <div className="pr-3 pl-3 flex mr-1 mb-2 ml-2">
                <span className="md:text-lg text-sm text-justify font-medium">
                  हिंदी साहित्य में ऑनर्स पाठयक्रम महाविद्यालय में 1964 में
                  विधिवत आरंभ हुआ था | उसके पहले 1960 से 1963 तक हिंदी विषय
                  पासकोर्स का अभिन्न अंग था | तब से लेकर अब तक हिंदी साहित्य और
                  भाषा से जुड़े इस पाठ्यक्रम समय के साथ नए विकल्पों और विषयों को
                  भी अपने में समाहित किया है, ताकि छात्राएं भविष्य में बेहतर
                  रोज़गार के अवसरों का लाभ उठा सकें |
                </span>
              </div>
              
              <div className="pr-3 pl-3 flex mr-1 mb-2 ml-2">
                <span className="md:text-lg text-sm text-justify font-medium">
                  हिन्दी भाषा और साहित्य का अध्ययन जनसम्पर्क का, भारतीय समाज की
                  विचारशक्ति को गहराई से जानने का अवसर देता है | यह अध्ययन जड़ों
                  से जोड़ता है, ज्ञान क्षेत्र का विस्तार करता है; मानव प्रकृति को
                  समझने की प्रेरणा देता है। सृजन, विवेचन और मूल्यांकन की क्षमता
                  का विकास करता है; भाषा प्रयोग की दक्षता बढ़ाता है। हिन्दी
                  स्नातक के लिए स्नातकोत्तर अध्ययन, टीचर ट्रैनिंग, भाषा-शिक्षण,
                  मीडिया, (टी वी, रेडियो) जनसंचार और पत्रकारिता, अनुवाद,
                  सृजनात्मक लेखन, रंगमंच, विज्ञापन, हिन्दी कम्प्यूटिंग, हिन्दी
                  अधिकारी, जनसम्पर्क अधिकारी आदि कार्यक्षेत्र खुले है। हिन्दी का
                  स्नातक प्रशासनिक सेवा की परीक्षा भी दे सकता है।
                </span>
              </div>
              
              <div className="pr-3 pl-3 flex mr-1 mb-2 ml-2">
                <span className="md:text-lg text-sm text-justify font-medium ">
                  साहित्य अध्यापन का कार्य शोध कार्य में रूचि रखने वाले समर्पित
                  अनुभवी प्राध्यापकों द्वारा किया जाता है, जो स्वयं को क्रियाशील
                  बनाये रखने के साथ-साथ विभिन्न कार्यशालाओं, राष्ट्रीय और
                  अंतर्राष्ट्रीय संगोष्ठियों में भाग लेते रहते हैं | इसके साथ
                  साहित्य परिषद् द्वारा विभाग की हस्तलिखित पत्रिका ‘मानसी’ का
                  विमोचन भी प्रतिवर्ष होता है और विभिन्न प्रतियोगिताओं का आयोजन
                  करके छात्राओ का अंतर्मुखी एवं बहिर्मुखी विकास किया जाता है ।
                  हिन्दी विभाग, हिन्दी विशेष और बी॰ ए॰ प्रोग्राम दोनों से
                  संबन्धित पाठ्यक्रम प्रस्तावित करता है। हिन्दी विशेष के तीन
                  वर्षीय पाठ्यक्रम में भाषा और साहित्य के विविध पक्षों की
                  जानकारी दी जाती है। साथ ही हिन्दी भाषा से जुड़े रचनाकार और उनकी
                  कालजयी कृतियाँ पाठ्यक्रम में शामिल हैं, वहीं अन्य भारतीय
                  भाषाओं के रचनाकारों की विशिष्ट कृतियां भी पाठ्यक्रम का हिस्सा
                  हैं, जो समय, समाज और ज्वलंत विषयों पर गहन संवेदनशीलता के साथ
                  विचार करने को प्रेरित करती हैं। बी॰ ए॰ प्रोग्राम में हिन्दी
                  अनिवार्य, मुख्य तथा वैकल्पिक विषय के रूप में पढ़ाई जाती है ।
                  अन्य विषयों के ऑनर्स में यह जैनरिक, हिन्दी कौशल संवर्द्धक और
                  एम॰आई॰एल॰ कम्यूनिकेशन के रूप में पढाई जाती है ।
                </span>
              </div>
              <br />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hindi_about;
