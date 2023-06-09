import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const AffiliateList = [
  {
    title: 'Pointcove',
    image: 'img/partners/pointcove.png',
    roblox: 'https://www.roblox.com/groups/9161949',
  },
  {
    title: 'Mix',
    image: 'img/partners/mix_group.png',
    roblox: 'https://www.roblox.com/groups/15539795',
  },
  {
    title: 'FORUM',
    image: 'img/partners/forum.png',
    roblox: 'https://www.roblox.com/groups/7822503',
  },
  {
    title: 'A.R.T.S. Laboratories',
    image: 'img/partners/A.R.T.S._LABS_Logo.png',
    roblox: 'https://www.roblox.com/groups/15202088/A-R-T-S-Laboratories',
  }, 
];

function Feature({image, title, roblox}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      <a href={roblox}> <img alt={title} src={image} className={styles.featureSvg} role="img" /> </a>
      </div>

    </div>
  );
}

export default function Affiliates() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {AffiliateList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
