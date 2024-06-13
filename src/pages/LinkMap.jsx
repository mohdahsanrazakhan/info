import Button from "../components/Button/Button"
import Profile from "../components/Profile/Profile";
import { Twitter, GitHub, Linkedin } from "../components/Icons/Icons";

const LinkMap = () => {
  return (
    <div className="flex flex-col gap-5">
      <Profile />
      <Button title="My Resume" url="https://drive.google.com/file/d/17xTC8mZpCqswS5m_J200MaIBZQ5tUSP4/view" />
      <Button title="Portfolio Website" url="https://heymark.vercel.app/" />
      <div className="flex m-auto gap-5">
        <Linkedin />
        <GitHub />
        <Twitter />
      </div>
    </div>
  )
}

export default LinkMap;