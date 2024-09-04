import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const bounceInVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    x: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
      duration: 1,
      ease: 'easeOut',
    },
  },
};

const ImpactItem = ({ children }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false, // Allow triggering multiple times
    threshold: 0.2,     // Trigger when 20% of the component is visible
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={bounceInVariants}
      className="flex border rounded-lg border-secondary shadow-md hover:shadow-primary hover:border-primary h-[200px] md:h-[350px] shadow-secondary flex-col justify-center items-start w-[90%] md:w-[30%] p-12 "
    >
      {children}
    </motion.div>
  );
};

const Impact = () => {
  return (
    <div className='flex text-brand flex-col md:flex-row items-center p-4 gap-8 '>
      <ImpactItem>
        <h3 className="text-3xl font-bold">Primary School</h3>
        <p className="text-lg">Grade 1 - 6. Math, English, Science and other subjects.</p>
      </ImpactItem>
      <ImpactItem>
        <h3 className="text-3xl font-bold">Secondary School</h3>
        <p className="text-lg">Grade 6 - 12. Math, English, Physics, Chemistry, and more.</p>
      </ImpactItem>
      <ImpactItem>
        <h3 className="text-3xl font-bold">Exam Preparation</h3>
        <p className="text-lg">Common Entrance, BECE, WAEC, JAMB, IELTS, SATs etc.</p>
      </ImpactItem>
      <ImpactItem>
        <h3 className="text-3xl font-bold">Skill development</h3>
        <p className="text-lg"> Coding, Design, etc.</p>
      </ImpactItem>
    </div>
  );
};

export default Impact;
