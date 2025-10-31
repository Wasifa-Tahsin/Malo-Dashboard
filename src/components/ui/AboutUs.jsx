import { FaLongArrowAltLeft } from "react-icons/fa";


const AboutUs = () => {
  
  

  return (
    <div className=" p-6   mx-auto mt-8 w-full max-w-[900px]">
      {/* Header */}
      <div className='flex items-center gap-2 text-[#0555bf] mb-4'>
         <FaLongArrowAltLeft />
      <h2 className=" text-lg font-semibold  flex items-center gap-2">
         About Us
      </h2>
     </div>


    <div className="text-left  space-y-4">
          <h2 className="text-xl font-bold">1. Intro</h2>

      <p className="leading-1.8">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
    </div>

        {/* Details Section */}

      <div className="text-left space-y-4 mt-5">
          <h2 className="text-xl font-bold">2. Details</h2>
       
<p className="leading-1.8">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.There are many variations of passages of Lorem Ipsum available, but the majority.</p>
      </div>
        {/* Save Button */}
        <div className="flex justify-center pt-4">
          <button
            type="submit"
            className="w-[180px] h-[50px] text-white font-semibold rounded-md shadow-md transition-transform hover:scale-[1.03]"
            style={{
              background:
                "linear-gradient(90deg, rgba(5,85,191,1) 0%, rgba(91,210,244,1) 100%)",
            }}
          >
            Save Change
          </button>
        </div>
      
    </div>
  );
};

export default AboutUs;
