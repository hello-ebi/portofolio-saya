import { motion } from 'framer-motion';
import bintang from "../assets/videos/bintang.mp4";
import asapkosmik2 from '../assets/images/asapkosmik2.png';
import asapkosmik from '../assets/images/asapkosmik.png';

function Background2() {
    return (
        <div className="relative w-full h-full overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
            >
                <source src={bintang} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <motion.img
                src={asapkosmik2}
                alt="asapkosmik2"
                initial={{ opacity: 0, x: 200, y: 200 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 3 }}
                className="absolute bottom-[-270px] right-[-270px] z-10 w-[55%]"
            />
            <motion.img/>
                        <motion.img
                src={asapkosmik}
                alt="asapkosmik"
                initial={{ opacity: 0, x: -200, y: -200 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 3 }}
                className="absolute top-[-200px] left-[-370px] z-10 w-[55%]"
            />
            <motion.img/>
        </div>
    );
}

export default Background2;
