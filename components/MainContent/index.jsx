import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import "./style.css";

export default function Main() {
  function handlerClick() {
    alert("Opa");
  }
  return (
    <div className="links">
      <div className="textos">
        <h1>
          O nosso site <br />
          encontra-se <br />
          em manutenção
        </h1>
        <hr />
        <h2>
          Mas os nossos <br />
          carros esperam <br />
          por ti. <br />
          Contacta-nos
        </h2>

        <div className="social">
          <Link
            className="social-icon"
            href="https://www.facebook.com/search/top?q=vc%20eletricar"
            target="_blank"
            passHref={true}
          >
            <FaFacebookF />
          </Link>
          <Link
            className="social-icon"
            href="https://www.instagram.com/vceletricar/"
            target="_blank"
            passHref={true}
          >
            <FaInstagram />
          </Link>
          <Link
            className="social-icon"
            href="https://www.instagram.com/vceletricar/"
            target="_blank"
            passHref={true}
          >
            <FaWhatsapp />
          </Link>
          <Link
            className="social-icon"
            href="https://vinculocerto.standvirtual.com/inventory"
            target="_blank"
            passHref={true}
          >
            <Image
              src={"https://api.inovepublicidade.pt/vc_eletricar/images/A.png"}
              alt="Link stand"
              width={40}
              height={40}
            />
          </Link>
        </div>

        <div>
          <h3>924 390 045</h3>
          <p>R. Cabine 6 B, 2710-089 Sintra</p>
        </div>
      </div>
      <div className="img-logo">
        {/* <Image
          src={
            "https://api.inovepublicidade.pt/vc_eletricar/images/LOGO_CAR.png"
          }
          alt={"Logo VC Eletricar"}
          width={300}
          height={100}
        /> */}
      </div>
    </div>
  );
}
