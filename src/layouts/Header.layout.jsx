import { Link } from "react-router-dom"

export function Header(){
    return <>
    <header>
    <h1>LOGO</h1>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/device1">ESP32</Link></li>
        <li><Link to="/device2">MQTT</Link></li>
        <li><Link to="/device3">REST</Link></li>
      </ul>
    </header>
    </>
}