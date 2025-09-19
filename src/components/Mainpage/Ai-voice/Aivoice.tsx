import VoiceCarousel from './VoiceCarousel'
import Voices from './Voices'

function Aivoice() {
  return (
    <div className='bg-black h-screen w-screen flex items-center'>
        <VoiceCarousel
          voices={Voices}
          autoPlay={false}
          autoPlayInterval={4000}
        />
    </div>
  )
}

export default Aivoice