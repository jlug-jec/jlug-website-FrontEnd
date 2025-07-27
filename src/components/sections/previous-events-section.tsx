import { jlugEvents } from '../../constants/events';
import { PreviousEventCarousel } from './previous-events-carousal';
export function PreviousEventCarouselComponent() {
  return <PreviousEventCarousel events={jlugEvents} autoplay={true} />;
}
