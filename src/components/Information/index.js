import airTransmission from "../../assets/img/airTransmission.png";
import humanContact from "../../assets/img/humanContact.png";
import containedObject from "../../assets/img/containedObject.png";
import symptoms from "../../assets/img/symptoms.png";
import girl01 from "../../assets/img/girl1.png";
import girl02 from "../../assets/img/girl2.png";
import girl03 from "../../assets/img/girl3.png";
import girl04 from "../../assets/img/girl4.png";

export default function Information() {
  return (
    <>
      <div className="px-10 flex flex-col items-center justify-between">
        {/* CONTAGION */}

        <div className="flex flex-col items-center">
          <h1 className="cursor-pointer font-bold text-4xl text-green-900">
            Contagion
          </h1>
          <p className="max-w-3xl text-center text-xl my-9">
            Corona Viruses are a type of virus. There are many different kinds,
            and some cause disease. A newly identified type.
          </p>
          <div className="flex items-center justify-around w-5/6">
            <div className="cursor-pointer border-b-8 border-b-white flex flex-col items-center w-1/3 justify-center py-24 px-5 shadow-xl transition duration-700 ease-in-out hover:shadow-2xl hover:border-b-8 hover:border-rose-500">
              <img className="w-44" src={airTransmission} />
              <h3 className="my-4 text-xl font-bold text-rose-400">
                Air Transmission
              </h3>
              <p className="text-center">
                Objectively evolve tactical expertise before extensible
                initiatives.
              </p>
            </div>
            <div className="cursor-pointer border-b-8 border-b-white flex flex-col items-center w-1/3 justify-center mx-10 py-24 px-5 shadow-xl transition duration-700 ease-in-out hover:shadow-2xl hover:border-b-8 hover:border-rose-500">
              <img className="w-40" src={humanContact} />
              <h3 className="my-4 text-xl font-bold text-rose-400">
                Human Contacts
              </h3>
              <p className="text-center">
                Washing your hands is one of the simplest ways you can protect.
              </p>
            </div>
            <div className="cursor-pointer border-b-8 border-b-white flex flex-col items-center w-1/3 justify-center  py-24 px-5 shadow-xl transition duration-700 ease-in-out hover:shadow-2xl hover:border-b-8 hover:border-rose-500">
              <img className="w-44" src={containedObject} />
              <h3 className="my-4 text-xl font-bold text-rose-400">
                Contained Object
              </h3>
              <p className="text-center">
                Use the tissue while Sneezing. In this Way, You Can Protect Your
                Droplets.
              </p>
            </div>
          </div>
        </div>

        {/* Symptoms */}

        <div className="mt-20 flex flex-col items-center">
          <h1 className="font-bold text-4xl text-green-900">Symptoms</h1>
          <p className="max-w-2xl text-center text-xl my-9">
            Corona Viruses are a type of virus. There are many different kinds,
            and some cause disease. A newly identified typepe has Caused a
            recent outbreak of respiratory.
          </p>
          <img src={symptoms} className="w-10/12" />
        </div>

        {/* What Should We Do ? */}

        <div className="mt-20 flex flex-col items-center">
          <h1 className="font-bold text-4xl text-green-900">
            What Should We Do ?
          </h1>
          <p className="max-w-2xl text-center my-8 text-xl">
            Corona Viruses are a type of virus. There are many different kinds,
            and some cause disease. A newly identified type.
          </p>
          <div className="flex items-center my-14">
            <div>
              <h1 className="font-bold text-3xl text-green-900">Wear Masks</h1>
              <p className="max-w-lg my-7 text-md">
                Continually seize impactful vitals rather than future-proof
                supply chains. Uniquely exploit emerging niches via fully tested
                meta-services. Competently pursue standards compliant leadership
                skills vis-a-vis pandemic "Outside the Box" Thinking.
              </p>
            </div>
            <img src={girl01} className="w-96 px-10 " />
          </div>
          <div className="flex items-center flex-row-reverse my-14">
            <div>
              <h1 className="font-bold text-3xl text-green-900">
                Wash your hands
              </h1>
              <p className="max-w-lg my-7 text-md">
                Continually seize impactful vitals rather than future-proof
                supply chains. Uniquely exploit emerging niches via fully tested
                meta-services. Competently pursue standards compliant leadership
                skills vis-a-vis pandemic "Outside the Box" Thinking.
              </p>
            </div>
            <img src={girl02} className="w-96 px-10 " />
          </div>
          <div className="flex items-center my-14">
            <div>
              <h1 className="font-bold text-3xl text-green-900">
                Use Nose - Rag
              </h1>
              <p className="max-w-lg my-7 text-md">
                Continually seize impactful vitals rather than future-proof
                supply chains. Uniquely exploit emerging niches via fully tested
                meta-services. Competently pursue standards compliant leadership
                skills vis-a-vis pandemic "Outside the Box" Thinking.
              </p>
            </div>
            <img src={girl03} className="w-96 px-10 " />
          </div>
          <div className="flex items-center flex-row-reverse my-14">
            <div>
              <h1 className="font-bold text-3xl text-green-900">
                Avoid Contacts
              </h1>
              <p className="max-w-lg my-7 text-md">
                Continually seize impactful vitals rather than future-proof
                supply chains. Uniquely exploit emerging niches via fully tested
                meta-services. Competently pursue standards compliant leadership
                skills vis-a-vis pandemic "Outside the Box" Thinking.
              </p>
            </div>
            <img src={girl04} className="w-96 px-10 " />
          </div>
        </div>
      </div>
    </>
  );
}
