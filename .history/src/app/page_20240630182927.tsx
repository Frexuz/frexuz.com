// import Image from 'next/image'

import { Bio } from '@/components/Bio'
import { BioRandom } from '@/components/BioRandom'
import { Button } from '@/components/Button'
import { CV } from '@/components/CV'
import { Project } from '@/components/Project'
import { Tag } from '@/components/Tag'

import { projects } from '@/media'

export default function Home() {
  const isMobile = false

  const styles = {
    bio: {
      padding: isMobile ? '50px 10%' : '50px 20%',
      flex: 1,
    },
    cv: {
      background: '#fff',
      padding: isMobile ? '50px 10%' : '50px 20%',
      flex: 1,
    },
    sectionText: {
      fontSize: 36,
      fontWeight: 900,
      lineHeight: 1.4,
      color: '#fff',
      textAlign: 'center',
    },
    projectText: {
      color: '#fff',
      fontSize: 18,
      margin: 20,
      textAlign: 'center',
      lineHeight: 1.4,
    },
    penGrid: {
      marginTop: 50,
      display: 'grid',
      gridTemplateColumns: isMobile ? '100%' : '1fr 1fr 1fr',
      gridGap: 50,
    },
  }

  return (
    <div>
      <section className="flex-1 px-[10%] py-12">
        <Bio />
      </section>
      <section className="bg-[#212121] px-[10%] py-12 sm:px-[20%]">
        <h2 className="text-center text-4xl font-bold text-white">Projects</h2>
        <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2">
          {projects.map((project) => (
            <Project key={`Project${project.name}`} project={project} />
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 50,
          }}
        >
          <svg
            width="200"
            viewBox="0 0 138 26"
            fill="none"
            stroke="#fff"
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M80 6h-9v14h9 M114 6h-9 v14h9 M111 13h-6 M77 13h-6 M122 20V6l11 14V6 M22 16.7L33 24l11-7.3V9.3L33 2L22 9.3V16.7z M44 16.7L33 9.3l-11 7.4 M22 9.3l11 7.3 l11-7.3 M33 2v7.3 M33 16.7V24 M88 14h6c2.2 0 4-1.8 4-4s-1.8-4-4-4h-6v14 M15 8c-1.3-1.3-3-2-5-2c-4 0-7 3-7 7s3 7 7 7 c2 0 3.7-0.8 5-2 M64 13c0 4-3 7-7 7h-5V6h5C61 6 64 9 64 13z" />
          </svg>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginTop: 20,
              justifyContent: 'center',
            }}
          >
            <Tag text="HTML" variant="brand" />
            <Tag text="SCSS" variant="brand" />
            <Tag text="JavaScript" variant="brand" />
            <Tag text="SVG" variant="brand" />
            <Tag text="Animations" variant="brand" />
            <Tag text="Canvas" variant="brand" />
            <Tag text="React" variant="brand" />
          </div>
          <h3 style={styles.projectText}>
            I&apos;ve collected my favorite code experiments on codepen. Check
            them out :)
          </h3>
          <Button
            text="View full collection"
            href="https://codepen.io/collection/XpPxwe/"
            target="_blank"
          />
        </div>
        <div style={styles.penGrid}>
          <div
            data-height="200"
            data-theme-id="dark"
            data-slug-hash="BvHsk"
            data-default-tab="result"
            data-user="frexuz"
            data-pen-title="Starfield and shooting stars with canvas"
            className="codepen"
          />
          <div
            data-height="200"
            data-theme-id="dark"
            data-slug-hash="EFloJ"
            data-default-tab="result"
            data-user="frexuz"
            data-pen-title="Starfield and shooting stars with canvas"
            className="codepen"
          />
          <div
            data-height="200"
            data-theme-id="dark"
            data-slug-hash="rmCHL"
            data-default-tab="result"
            data-user="frexuz"
            data-pen-title="Starfield and shooting stars with canvas"
            className="codepen"
          />
        </div>
      </section>
      <section style={styles.cv}>
        <h2 style={{ ...styles.sectionText, ...{ color: '#000' } }}>
          Working experience
        </h2>
        <CV />
      </section>
      <section style={styles.bio}>
        <h2 style={{ ...styles.sectionText, ...{ color: '#000' } }}>
          More about me
        </h2>
        <BioRandom isMobile={isMobile} />
      </section>
    </div>
  )
}
