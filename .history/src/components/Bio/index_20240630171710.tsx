import React from 'react'

import { images } from '@media'
import { Tag } from '@/components/Tag'

export const Bio = ({ isMobile }: { isMobile: boolean }) => {
  const styles = {
    wrapper: {
      alignItems: 'center',
    },
    imgWrapper: {
      marginBottom: 50,
      padding: 7,
      borderRadius: '50%',
      background: 'linear-gradient(45deg, #cc0178, #f66, #cc0178)',
      width: isMobile ? 150 : 250,
      height: isMobile ? 150 : 250,
      boxShadow: '0 0 25px 2px rgba(0, 0, 0, 0.2)',
    },
    img: {
      width: '100%',
      display: 'block',
      borderRadius: '50%',
      height: '100%',
      backgroundSize: 'cover',
      boxShadow: '0 0 30px 5px rgba(0, 0, 0, 0.25) inset',
      backgroundColor: '#fff',
      backgroundImage: `url(${images.profilePicture})`,
    },
    info: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: isMobile ? 30 : 46,
      backgroundColor: '#000',
      color: '#fff',
      padding: '5px 10px',
      borderRadius: 3,
      textAlign: 'center',
    },
    subTitle: {
      marginTop: 5,
      fontSize: isMobile ? 20 : 24,
      backgroundColor: '#cc0178',
      color: '#fff',
      padding: '5px 10px',
      borderRadius: 3,
    },
    aka: {
      position: 'absolute',
      top: -16,
      right: 2,
      fontSize: 12,
      fontWeight: 'bold',
      borderRadius: 3,
    },
    socialLinks: {
      marginBottom: 20,
      flexDirection: 'row',
    },
    icon: {
      backgroundColor: '#ccc',
      borderRadius: 16,
      height: 32,
      width: 32,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 2,
      marginRight: 2,
    },
    fill: {
      fill: '#fff',
      stroke: 'none',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: 1.5,
    },
    tags: {
      flexDirection: 'row',
      marginTop: 20,
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    tag: {
      margin: 2,
      backgroundColor: '#cfcfcf',
      color: '#333',
    },
  }

  return (
    <div style={styles.wrapper}>
      <div style={styles.socialLinks}>
        <a
          href="https://linkedin.com/in/kristian-gerardsson"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div style={styles.icon}>
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path
                d="M5.67,22.63H.81V8.7H5.67Zm10.09-9.39a2.14,2.14,0,0,0-2.14,2.14v7.25H8.51V8.7h5.11v1.59a6.76,6.76,0,0,1,4.28-1.6c3.17,0,5.37,2.35,5.37,6.81v7.13H17.9V15.38A2.14,2.14,0,0,0,15.76,13.23Zm-10-9.36a2.5,2.5,0,1,1-2.5-2.5A2.5,2.5,0,0,1,5.74,3.88Z"
                style={styles.fill}
              />
            </svg>
          </div>
        </a>
        <a
          href="https://github.com/frexuz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div style={styles.icon}>
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path
                d="M14.41,22.35a.5.5,0,0,0,.64.48,11.25,11.25,0,1,0-6.24,0,.5.5,0,0,0,.64-.48V20A2.81,2.81,0,0,1,6,18.28,6.07,6.07,0,0,0,4.64,16c2.85.69,2.9,2.54,4.84,1.67a4,4,0,0,1,.63-1.82c-2.2-.25-4.52-.6-4.52-4.4a3.84,3.84,0,0,1,1-2.66,3.56,3.56,0,0,1,.1-2.62s.83-.27,2.73,1a9.39,9.39,0,0,1,5,0c1.89-1.28,2.72-1,2.72-1a3.56,3.56,0,0,1,.1,2.62,3.83,3.83,0,0,1,1,2.66c0,3.81-2.32,4.15-4.53,4.39a3.83,3.83,0,0,1,.68,2.33Z"
                style={styles.fill}
              />
            </svg>
          </div>
        </a>
      </div>
      <div style={styles.imgWrapper}>
        <div style={styles.img} />
      </div>
      <div style={styles.info}>
        <div>
          <h1 style={styles.title}>Kristian Gerardsson</h1>
          <h4 style={styles.aka}>AKA FREXUZ</h4>
        </div>
        <h2 style={styles.subTitle}>Full-stack developer</h2>
        <div style={styles.tags}>
          <Tag text="Ruby on Rails" style={styles.tag} />
          <Tag text="React / React Native" style={styles.tag} />
          <Tag text="TypeScript" style={styles.tag} />
          <Tag text="SCSS" style={styles.tag} />
          <Tag text="MySQL / Postgres" style={styles.tag} />
          <Tag text="Redis / memcached" style={styles.tag} />
          <Tag text="Websockets" style={styles.tag} />
          <Tag text="AWS" style={styles.tag} />
          <Tag text="UX" style={styles.tag} />
          <Tag text="and more..." style={styles.tag} />
        </div>
      </div>
    </div>
  )
}
