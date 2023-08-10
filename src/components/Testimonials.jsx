import { feedback } from '../constants';
import styles from '../style';
import FeedbackCard from './FeedbackCard';

const Testimonials = () => {
  return (
    <section id = "testimonials" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative ml-3 `}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"></div>

      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h1 className={styles.heading2}>The Words Of Our<br className='sm:block hidden'/>Founders</h1>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>This society was possible only because of your hardwork. We have grown a lot under your Guidance.</p>
        </div>
      </div>

      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
        {feedback.map((card) => (
          <FeedbackCard  key = {card.id} {...card}/>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
