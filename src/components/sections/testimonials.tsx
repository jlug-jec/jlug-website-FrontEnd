import { InfiniteMovingCards } from '../ui/accertinity/infinite-moving-cards';
import { feedback } from '@/constants/feedback';

const Testimonials = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 px-8 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-b from-gray-900  to-black">
      <div className="max-w-6xl mx-auto">
        <div className="w-full flex justify-between items-start md:flex-row flex-col gap-6 md:gap-12 lg:gap-16 mb-16 md:mb-20">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-white leading-tight">
              Founder&apos;s Section
            </h1>
          </div>
          <div className="flex-1 md:mt-0 mt-6">
            <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] text-left max-w-[450px]">
              Thank you for your constant advice and recommendation. We are a
              better society because of your vision.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <InfiniteMovingCards
            items={feedback}
            direction="right"
            speed="slow"
            pauseOnHover={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
