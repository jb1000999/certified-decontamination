import React, {Component} from 'react';

import HomeServices from '../home-content/services-component';

export default class Meth extends Component {
  render () {
    return (
      <div className="info-page-container">
        <div className="info-banner">

          <h1>Meth</h1>
        </div>
        <div className="info-container">
          <div className="info-question">
            <h2>What is methamphetamine?</h2>
          </div>
          <div className="info">
            <p>
              The methamphetamine we test and decontaminate for is known as dextro-methamphetamine (d-methamphetamine) and dextro-methamphetamine hydrochloride (d-methamphetamine HCL). The methamphetamine molecule is composed of ten atoms of carbon, fifteen atoms of hydrogen and one atom of nitrogen.
            </p>
          </div>
          <div className="info-question">
            <h2>Is meth hazardous?</h2>
          </div>
          <div className="info">
            <p>
              Meth addicts ingest large amounts of meth. According to some sources, addicts use 20 to 40 milligrams in each use and consume 700 to 1,000 milligrams every day. Meth is very hazardous when used in those quantities. In addition to the damage from the drug, is the damage from staying awake a week or so at a time, a poor diet and poor hygiene. Smaller doses of meth, such as doses prescribed for medical purposes, are considered safe. Methamphetamine has been used to treat, obesity, narcolepsy (can’t stay awake), ADD/ADHD and juvenile bed wetting. Recent research found low doses of methamphetamine reduce damage and improve recovery for traumatic brain injury.
            </p>
          </div>
          <div className="info-question">
            <h2>
              Is meth absorbed through the paint into the sheetrock and later desorbed and released into the air?
            </h2>
          </div>
          <div className="info">
            <p>
              I have heard this claim many times. The source is usually a competitor that wants to decontaminate by removing all sheetrock and “gutting” the home to the framing. The competitors refer to the findings in a college thesis as their reason for decontamination by demolition. A number of years ago, a college student wrote a thesis about the absorption and desorption of meth base vapors. The student’s thesis proves he is a brilliant engineer but it doesn’t prove decontamination by demolition is justified. Meth base is not stable and will react with oxygen in the air. Meth cooks know this and delay court proceedings as long as possible, then have the evidence tested again before trial so police will lose most or all of their evidence. Also, if meth base is smoked, most of it is destroyed when heated enough to change from a liquid to a vapor. One of the references used in the thesis is a research paper by John Martyny and associates at The National Jewish Medical and Research Center. Martyny built a room with sheetrock, painted it, and contaminated it using a meth-smoking device. Martyny tested the room hours, days and weeks later. The student assumed Martyny used meth base and sampled the same location each time. Meth residue was found in subsequent tests so he assumed meth absorbed into the sheetrock and desorbed over time. Actually, Martyny used methamphetamine hydrochloride and sampled next to previously-sampled locations. Over time, Martyny found less and less meth residue. Have you ever been in a room where someone was smoking a cigarette or been around a campfire, then after you left, other people could smell where you had been? Smoke clings to us but most of it comes off over time. The same thing happens when meth is smoked in a house. The residue will cling to surfaces but most of it will come off over time. Meth residue does not permeate sheetrock and later migrate out. I have never decontaminated a meth-contaminated home by gutting it to the framing.
            </p>
          </div>
          <div className="info-question">
            <h2>
              If we test our house and find meth in the HVAC system, does that mean our furniture is now contaminated?
            </h2>
          </div>
          <div className="info">
            <p>
              I’ve been in business since January, 2000. From time-to-time, people have moved into an apartment or house, learned that meth manufacturing or use were suspected, received positive results from meth tests, and asked me to test their furniture. Very consistently, no meth residue is found on the furniture.
            </p>
          </div>
          <div className="info-question">
            <h2>
              How long does it take to decontaminate a house?
            </h2>
          </div>
          <div className="info">
            <p>
              The size and condition of the house can affect how long it will take. The health department’s schedules and the time it takes to get final test results from the laboratory are things the decontamination company don’t control. It is reasonable to expect decontamination to take about 10 days.

            </p>
          </div>
        </div>

        <div className="services-component">
          <HomeServices />
        </div>
      </div>
    );
  }
}
