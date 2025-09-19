import React from 'react'
import { logos } from '../../../public/logos';
import { OutlinedButton } from '../utils/OutlinedButton';

const Info= {
  "0": {
    "svg": logos.landing.group,
    "title": "Getting Started\nwith Voicera",
    "description": "Set up voice & messaging\nAPIs in minutes."
  },
  "1": {
    "svg": logos.landing.api,
    "title": "API Integration",
    "description": "Step by step guidance for\nintegrating with any stack."
  },
  "2": {
    "svg": logos.landing['shield-check'],
    "title": "Security &\ncompliance",
    "description": "Learn how we keep your\ndata safe."
  },
  "3": {
    "svg": logos.landing['shield-check'],
    "title": "Billing &\nPricing FAQs",
    "description": "All your billing queries,\nanswered."
  },
};

interface InfoCardProps {
  svg: string;
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ svg, title, description }) => {
  return (
    <div className='w-full  h-90 bg-gradient-to-br from-primaryC to-accent font-secondary p-0.5 rounded-4xl'>
      <div className='w-full h-full bg-black rounded-4xl flex flex-col items-center p-4'>
        {/* Icon section - fixed height */}
        <div className="w-fit h-16 my-6 flex items-center justify-center" dangerouslySetInnerHTML={{ __html: svg }} />
        
        {/* Title section - fixed height with flex centering */}
        <div className='h-20 flex  justify-center mb-6'>
          <h4 className='text-xl sm:text-2xl font-medium text-center'>
            {title.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h4>
        </div>
        
        {/* Description section - fixed height with flex centering */}
        <div className='h-16 flex items-center justify-center'>
          <p className='text-base text-center'>
            {description.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}



const Section4 = () => {
  return (
    <section className='py-10 px-4 sm:px-10 w-full'>
      <h1 className='text-accent text-4xl sm:text-6xl font-medium font-primary'>Need Help?</h1>
      <h2 className='text-2xl font-secondary sm:text-4xl font-medium my-5 tracking-wide'>
        SUPPORT THAT SPEAKS<br />YOUR LANGUAGE
      </h2>
      <p className="text-sm sm:text-base font-secondary">
        Quick answers, real-time help, and detailed guides — all built to<br />support and empower developers."
      </p>

      {/* <div className='flex justify-center text-center items-center'> */}
      <div className=' px-5 grid md:grid-cols-2 lg:grid-cols-4 w-full my-12 justify-items-center gap-6 max-w-7xl mx-auto'>
        {Object.values(Info).map((item, index) => (
          <InfoCard
            key={index}
            svg={item.svg}
            title={item.title}
            description={item.description}
            />
          ))}
          </div>
      {/* </div> */}

      <h3 className='font-medium text-2xl sm:text-4xl'>Need Real Time-Help?</h3>
      <p className='my-3 text-sm sm:text-base'>
        Our AI Assistant and Support Engineers are available 24/7.
      </p>
      <div className='flex justify-center items-center pt-3 gap-4 max-sm:flex-col'>
        <OutlinedButton className='p-[2px]'><img src="/assets/Icons/chat.svg" alt="" /> Start Chat</OutlinedButton>
        <OutlinedButton className='p-[2px]'>Request a Callback</OutlinedButton>
      </div>
    </section>
  );
};


export default Section4