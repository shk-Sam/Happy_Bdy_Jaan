import React, { useState } from "react";

import pic1 from "../assets/p1.jpg";
import pic2 from "../assets/p2.jpg";
import pic3 from "../assets/p3.jpg";
import pic4 from "../assets/p4.jpg";
import pic5 from "../assets/p5.jpg";
import pic6 from "../assets/p6.jpg";
import pic7 from "../assets/p7.jpg";
import pic8 from "../assets/p8.jpg";
import pic9 from "../assets/p9.jpg";
import pic10 from "../assets/p10.jpg";
import pic11 from "../assets/p11.jpg";
import pic12 from "../assets/p12.jpg";
import pic13 from "../assets/p13.jpg";
import pic14 from "../assets/p14.jpg";

export default function LoveMemories() {
  const [lightboxImg, setLightboxImg] = useState(null);

  const rows = [
    { id: 1, photos: [pic1, pic2], text: "Ye meri jaan ki trf se mujhe pehla dhamki bhara love letter mene humari bhot si yaade sambhaal ke rkhi hai or unme sb se pehle ye hai jo tumne itna bada likh ke bheje the ye mai abhi bhi sambhaal ke rkha hu mujhe laga thaa us time ki humari baat band ho jaayegi pr saamne se tumne Abhishek ke phone se phone krke mujhse baat ki or waha se mera pyaar or gehra ho gya tumhare liye 😁" },
    { id: 2, photos: [pic3, pic4], text: "Tum hi ho jisne sb se pehle mujhe bdy wish Kiya haa mujhe mera birthday mana ne kaa shok nhi pr mai chahta thaa ki koi mujhe wish kre or tumne ye msg krke mujhe special feel karaya mujhe khushi di mujhe duayee di mai wo din ki khushi kbhi nhi bhul skta 🥹🥹" },
    { id: 3, photos: [pic5, pic6], text: "Or ye tumhara waada ki tum shi time aane pr mujhse kahoge jo humne tay kiya thaa tumhara pehla indirect confession mujhe abhi bhi yaad hai ye tumhara pehla waada thaa jo tumne mujhse kiye thee or iske baare mai aaj bhi soch ke mujhe khushi hoti hai. 😄" },
    { id: 4, photos: [pic7, pic13], text: "Or ye dusri baar jb tumne mujhse indirect confession kiya tb bhot time baad tb bhi mujhe bhot khushi hui kyuki tum hi wo waahid shaks ho jisey mai dil se chahta hu or usi ke saath saath ek baar tumne Mera naam rkha thaa wo naam mujhe bhot psnd aaya us naam ke liye shukriya hayati 🤌🏻💕" },
    { id: 5, photos: [pic10, pic11], text: "Mera rab gawaah hai jab tumne saamne se mujhe tumhari update di or pyaar bhari baatey ki mai allah ko haazir krke kehta hu itna pyaar shyd hi kabhi mujhe tum pr ek saath aaya jitna tumhara ye msg ke time aaya thaa mera dil khush ho gya thaa us time aesa laga ki tum jo bolo wo mai krdu us time agr mujhe saari duniya bhi di jaati to itni khushi nhi hoti jitna tumhare is msg se hui thi mujhe wo bacchi harkate krne waali rumana se or zyada pyaar hai 🥺🥺" },
    { id: 6, photos: [pic9, pic12], text: "Mujhe bhot achaa laga bhot khushi hui ki jb tumhe meri koi cheez buri lagi yaa tum hurt huye to tumne mujhe saamne se bataya to issey mai ab wo cheez nhi kruga dubara or khayal rkhuga ke tum phirse is cheez se hurt naa ho to mujhe ye cheez bhi tumme bhot pyaari lagti hai or isi ke saath saath jb tum masti mazaak krte ho to mujhe ussey bhi bhot khushi hoti hai ki tum sirf meri wife nhi balki meri dost bhi ho ✨🤍" },
    { id: 7, photos: [pic8, pic14], text: "Or jb tum kehte ho aesi baatey ki 'ruko naa mujhe thodi aata hai ye sb. Chilla q rhe ho' to meri jaan tum pr qurbaan ye bholi or pyaari si chotu rumana pr mera dil or fidaa ho jaata hai jb tum aesi adaaye krte ho tb or usi ke saath saath ye deliver waala msg mere aaj tk ke life ka sbse best msg thaa jo mujhe tum se mila mai us din bhot udaas thaa ghr ke taano se or mere job se pr jb tumne ye msg kre mujhe khush krne ke liye or flirt kre aesa pehli baar to itnaa pyaar aaya jitna aaj tk mujhe kisi pr nhi aaya itni khushi aaj tk mujhe meri life Mai kbhi nhi hui mai kbhi bhi maayus hota hu to tumhara ye msg pdh kr khush ho jaata hu 😭😭" },
  ];

  return (
    <div className="love-page">

      {/* SECTION 1 — BIRTHDAY MESSAGE */}
      <section className="love-message">
        <h1>Happy Birthday My Love ❤️</h1>
        <p className="big-msg">
          Happy Birthday My Dear Wife 
          May Allah bless you with full of joy and brings happiness fully loaded in your life and fulfill your all wishes 
          and to be your marriage with me and together we will ilve our life peacefully and happily in both duniya In Sha Alaah 
          ----Ameen😁💞
        </p>

        <h2 className="promise-title">My Promises to You 💍</h2>
        <ul className="promises">
          <li>I Promise I will be halal for you</li>
          <li>I Promise to learn from my mistake and to make u happy and love you with my all heart</li>
          <li>I promise to be your side whatever the situation is</li>
        </ul>
      </section>

      {/* SECTION 2 — TWO PHOTOS + TEXT */}
      <section className="memory-section">
        {rows.map((row) => (
          <div className="memory-row" key={row.id}>
            <div className="photos-box">
              {row.photos.map((p, index) => (
                <img
                  key={index}
                  src={p}
                  alt=""
                  onClick={() => setLightboxImg(p)}
                  className="clickable-img"
                />
              ))}
            </div>

            <div className="memory-text">
              <p>{row.text}</p>
            </div>
          </div>
        ))}
      </section>

      {/* LIGHTBOX */}
      {lightboxImg && (
        <div className="lightbox" onClick={() => setLightboxImg(null)}>
          <img src={lightboxImg} alt="preview" className="lightbox-img" />
        </div>
      )}
    </div>
  );
}
