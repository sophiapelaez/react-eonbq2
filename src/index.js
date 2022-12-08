import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Lore from './Lore.js';
import Pleek from './Pleek.js';
import Discography from './Discography';
import Members from './Members.js';

const root = createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <div className="title">
      <link rel="stylesheet" href="https://use.typekit.net/jxe0ofu.css" />
      <link rel="stylesheet" href="https://use.typekit.net/jxe0ofu.css" />
      <img
        src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/STICKER_1.png"
        id="title-image"
        alt="Title Image: NCT 127 group photo"
      />
      <h1 id="website-title"> NCT 127 </h1>
      <p id="subtitle">
        {' '}
        T <span id="space">__</span> H <span id="space">__</span> I{' '}
        <span id="space">__</span> S<span id="space">_________</span> I{' '}
        <span id="space">__</span> S{' '}
      </p>
      <h1 id="section-heading"> WELCOME TO THE NEOZONE </h1>
      <p id="text">
        {' '}
        NCT 127 is the Seoul-based subunit of the currently 23 membered boy
        group Neo Culture Technology, otherwise known as NCT. Keep reading to
        learn more about the boy band's origins, music, and members and click on
        each thumbnail to watch the music video.{' '}
      </p>
      <Lore />
      <Pleek />
      <Members />
    </div>
  </React.StrictMode>
);
