import React from 'react'

const Loader = () => {
  return (
		<div className='loader'>
			<lottie-player
				src='https://assets1.lottiefiles.com/datafiles/3fsHdaPCPlvvZbV/data.json'
				background='transparent'
				speed='1'
				style={{width: "300px", height: "100%"}}
				loop
				autoplay
			></lottie-player>
		</div>
	);
}

export default Loader;