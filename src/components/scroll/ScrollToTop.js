import { useEffect, useState } from "react";
import { BiArrowFromBottom } from 'react-icons/bi';
import { useLocation } from "react-router-dom";
import { classNames } from '../../utils/className';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // This part is for >> always show top when you are clicking new pages start
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    // This part is for >> always show top when you are clicking new pages end

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        }
    }, []);

    return (
        <div class="position-relative">
            <div class="fixed-bottom bottom-2 right-2 z-50">
                <button type="button"
                    onClick={scrollToTop}
                    className={classNames(
                        isVisible ? "opacity-100 inline-flex items-center p-2 rounded-full shadow-sm text-white bg-sky-600 transform hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500" : "hidden"
                    )}>
                    <BiArrowFromBottom class="w-5 h-5" aria-hidden="true" />
                </button>
            </div>
        </div>
    )

}

export default ScrollToTop;