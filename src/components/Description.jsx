import React from 'react';

import { motion } from 'framer-motion';

function Description() {
	return (
		<div>
			<div>Description</div>
			<motion.div id="motion">
				<motion.img
					src="./img/logo.png"
					alt=""
					width={'15%'}
					animate={{ rotate: 360 }}
					transition={{
						delay: 2,
						duration: 5,
						repeat: Infinity,
						repeatDelay: 0.5,
						repeatType: 'reverse',
						type: 'spring',
					}}
				/>
				<motion.img
					src="./img/logo.png"
					alt=""
					width={'15%'}
					animate={{ rotate: 360 }}
					transition={{
						delay: 2,
						duration: 5,
						repeat: Infinity,
						repeatDelay: 0.5,
						repeatType: 'reverse',
						type: 'spring',
					}}
				/>
			</motion.div>
			<motion.div
				id="divtext"
				transition={{
					delay: 1,
					duration: 2,

					repeatType: 'reverse',
					type: 'tween',
				}}
				initial={{
					x: -1000,
					opacity: 0,
				}}
				drag
				whileDrag={{
					scale: 1.1,
					boxShadow: '0px 4px 12px  #453',
				}}
				animate={{
					x: 350,
					opacity: 1,
				}}>
				Пратика Motion frame
			</motion.div>
			<motion.div id="motion">
				<motion.img
					src="img/1.jpg"
					width={'10%'}
					initial={{
						opacity: 0,
						scale: 0.5,
					}}
					animate={{
						scale: 3,
						opacity: 1,
					}}
					transition={{
						duration: 7,
					}}
					drag
					whileHover={{
						opacity: 1,
					}}
					whileDrag={{
						scale: 1.1,
						boxShadow: '0px 4px 12px  #453',
					}}
				/>
			</motion.div>
		</div>
	);
}

export default Description;
