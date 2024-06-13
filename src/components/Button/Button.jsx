import {motion} from 'framer-motion'

const Button = ({title, url}) => {
  return (
    <a href={url} target="_blank">
    <motion.button 
    whileHover={{ scale: 1.12 }}
    whileTap={{ scale: 0.85, rotate: '-2.5deg'}}
    className="w-[320px] rounded-md border-2 border-[#3DFFFF] text-[#3DFFFF] bg-[#1A1A1A] font-bold pointer px-[1.2em] py-[0.6em] hover:bg-[#3e3e3e] hover:border-[#3DFFFF]">{title}</motion.button>
    </a>
  )
}

export default Button;


// Purple color: #646cff 