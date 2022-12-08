import React from 'react';
import { useState } from 'react';
import Profile from './PopUp';

export default function Members() {
  const [taeilPopUp, setTaeilPopUp] = useState(false);
  const [johnnyPopUp, setJohnnyPopUp] = useState(false);
  const [taeyongPopUp, setTaeyongPopUp] = useState(false);
  const [yutaPopUp, setYutaPopUp] = useState(false);
  const [doyoungPopUp, setDoyoungPopUp] = useState(false);
  const [jaehyunPopUp, setJaehyunPopUp] = useState(false);
  const [jungwooPopUp, setJungwooPopUp] = useState(false);
  const [markPopUp, setMarkPopUp] = useState(false);
  const [haechanPopUp, setHaechanPopUp] = useState(false);
  const [buttonPopUp, setButtonPopUp] = useState(false);
  return (
    <div className="members">
      <h1 id="member-database">
        {' '}
        M<span id="space">__</span> E<span id="space">__</span> M
        <span id="space">__</span> B<span id="space">__</span> E
        <span id="space">__</span> R<span id="space">__</span> S{' '}
      </h1>

      <p id="member-text-intro"> Click on each member to learn more </p>
      <div className="members-part-one">
        <img
          id="taeil_profile"
          src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/TAEIL_1.png"
          alt="Moon Taeil"
          onClick={() => setTaeilPopUp(true)}
        />

        <Profile trigger={taeilPopUp} setTrigger={setTaeilPopUp}>
          <div class="profile-photo">
            <img id="profile-img" src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/TAEIL_1.png"/>
          </div>
          <div class="profile-text">
            <h1 id="profile-name"> Moon Taeil </h1>
            <p id="profile-description"> Get a load of this guy</p>
            <p id="profile-description"> Get a load of this guy</p>
            <p id="profile-description"> Get a load of this guy</p>
          </div>
        </Profile>


        <img
          id="johnny_profile"
          src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/JOHNNY_1.png"
          alt="Suh Johnny"
          onClick={() => setJohnnyPopUp(true)}
          />
          <Profile trigger={johnnyPopUp} setTrigger={setJohnnyPopUp}>
          <div class="profile-photo">
            <img id="profile-img" src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/JOHNNY_1.png"/>
          </div>
          <div class="profile-text">
            <h1 id="profile-name"> Johnny Suh </h1>
            <p id="profile-description"> Get a load of this guy</p>
            <p id="profile-description"> Get a load of this guy</p>
            <p id="profile-description"> Get a load of this guy</p>
          </div>
        </Profile>


        <img
          id="taeyong_profile"
          src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/TAEYONG_1.png"
          alt="Lee Taeyong"
          onClick={() => setTaeyongPopUp(true)}
        />
        </div>
        <Profile trigger={taeyongPopUp} setTrigger={setTaeyongPopUp}>
          <div class="profile-photo">
            <img id="profile-img" src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/TAEYONG_1.png"/>
          </div>
          <div class="profile-text">
            <h1 id="profile-name"> Lee Taeyong </h1>
            <p id="profile-description"> Get a load of this guy</p>
            <p id="profile-description"> Get a load of this guy</p>
            <p id="profile-description"> Get a load of this guy</p>
          </div>
        </Profile>


      <div className="members-part-two">
        <img
          id="yuta_profile"
          src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/YUTA_1.png"
          alt="Nakamoto Yuta"
          onClick={() => setYutaPopUp(true)}
        />
        <Profile trigger={yutaPopUp} setTrigger={setYutaPopUp}>
          <div class="profile-photo">
            <img id="profile-img" src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/YUTA_1.png"/>
          </div>
          <div class="profile-text">
            <h1 id="profile-name"> Nakamoto Yuta </h1>
            <p id="profile-description"> Get a load of this guy</p>
            <p id="profile-description"> Get a load of this guy</p>
            <p id="profile-description"> Get a load of this guy</p>
          </div>
        </Profile>


        <img
          id="doyoung_profile"
          src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/DOYOUNG_1.png"
          alt="Kim Doyoung"
          onClick={() => setDoyoungPopUp(true)}
        />
        <Profile trigger={doyoungPopUp} setTrigger={setDoyoungPopUp}>
          <div class="profile-photo">
            <img id="profile-img" src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/DOYOUNG_1.png"/>
          </div>
          <div class="profile-text">
            <h1 id="profile-name"> Kim Doyoung</h1>
            <p id="profile-description"> Get a load of this guy</p>
            <p id="profile-description"> Get a load of this guy</p>
            <p id="profile-description"> Get a load of this guy</p>
          </div>
        </Profile>

        <img
          id="jaehyun_profile"
          src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/JAEHYUN_1.png"
          alt="Jeong Jaehyun"
          onClick={() => setJaehyunPopUp(true)}
        />
        <Profile trigger={jaehyunPopUp} setTrigger={setJaehyunPopUp}>
          <div class="profile-photo">
            <img id="profile-img" src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/JAEHYUN_1.png" />
          </div>
          <div class="profile-text">
            <h1 id="profile-name"> Jeong Jaehyun </h1>
            <p id="profile-description"> Get a load of this guy</p>
          </div>
        </Profile>
      </div>


      <div className="members-part-three">
        <img
          id="jungwoo_profile"
          src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/JUNGWOO_1.png"
          alt="Kim Jungwoo"
          onClick={() => setJungwooPopUp(true)}
        />
         <Profile trigger={jungwooPopUp} setTrigger={setJungwooPopUp}>
          <div class="profile-photo">
            <img id="profile-img" src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/JUNGWOO_1.png" />
          </div>
          <div class="profile-text">
            <h1 id="profile-name"> Kimg Jungwoo </h1>
            <p id="profile-description"> Get a load of this guy</p>
          </div>
        </Profile>


        <img
          id="mark_profile"
          src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/MARK_1.png"
          alt="Lee Mark"
          onClick={() => setMarkPopUp(true)}
        />  
         <Profile trigger={markPopUp} setTrigger={setMarkPopUp}>
          <div class="profile-photo">
            <img id="profile-img" src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/MARK_1.png"/>
          </div>
          <div class="profile-text">
            <h1 id="profile-name"> Lee Mark </h1>
            <p id="profile-description"> Get a load of this guy</p>
          </div>
        </Profile>


        <img
          id="haechan_profile"
          src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/HAECHAN_1.png"
          alt="Lee Haechan"
          onClick={() => setHaechanPopUp(true)}
        />
         <Profile trigger={haechanPopUp} setTrigger={setHaechanPopUp}>
          <div class="profile-photo">
            <img id="profile-img" src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/HAECHAN_1.png"/>
          </div>
          <div class="profile-text">
            <h1 id="profile-name"> Lee Haechan </h1>
            <p id="profile-description"> Get a load of this guy</p>
          </div>
        </Profile>
      </div>
    </div>
  );
}

export default Members