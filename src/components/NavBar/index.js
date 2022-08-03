import airTransmission from "../../assets/img/airTransmission.png";
import humanContact from "../../assets/img/humanContact.png";
import containedObject from "../../assets/img/containedObject.png";

export default function Information() {
  return (
    <>
      <div className="px-20 flex flex-col items-center justify-between">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-4xl text-green-900">Contagion</h1>
          <p className="max-w-3xl text-center my-10">
            Corona Viruses are a type of virus. There are many different kinds,
            and some cause disease. A newly identified type.
          </p>
          <div className="flex items-center justify-around w-5/6">
            <div className="flex flex-col items-center w-1/3 h-96 justify-center border-2">
              <img className="w-48" src={airTransmission} />
              <h3 className="my-4 text-xl font-bold text-rose-400">
                Air Transmission
              </h3>
              <p className="text-center">
                Objectively evolve tactical expertise before extensible
                initiatives.
              </p>
            </div>
            <div className="flex flex-col items-center w-1/3 h-96 justify-center mx-10 border-2">
              <img className="w-48" src={humanContact} />
              <h3 className="my-4 text-xl font-bold text-rose-400">
                Human Contacts
              </h3>
              <p className="text-center">
                Washing your hands is one of the simplest ways you can protect.
              </p>
            </div>
            <div className="flex flex-col items-center w-1/3 h-96 justify-center  border-2">
              <img className="w-48" src={containedObject} />
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
      </div>
    </>
  );
}
