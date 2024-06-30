import { Tag } from '@/components/Tag'

export const CVItem = ({ name, style, dates, role, texts, tags }: any) => {
  const isMobile = false
  const styles = {
    item: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '100%' : '50% 50%',

      padding: '0 0 10px',
      marginTop: 50,
      marginLeft: isMobile ? 0 : 0,
      marginRight: isMobile ? 0 : 0,
      flexDirection: 'row',
    },
    header: {
      alignItems: isMobile ? 'flex-start' : 'flex-end',
      justifyContent: 'flex-start',
      borderRight: `${isMobile ? 0 : 4}px solid #cc0178`,
      borderBottom: `${isMobile ? 4 : 0}px solid #cc0178`,
      padding: isMobile ? '0 0 10px 0' : '0 20px 0 0',
      width: isMobile ? '100%' : 200,
      justifySelf: isMobile ? 'start' : 'end',
      margin: isMobile ? '0 0 20px 0' : '0',
    },
    info: {
      flex: 3,
      marginLeft: isMobile ? 0 : 20,
    },
    list: {
      listStyleType: 'disc',
    },
    tags: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 10,
      marginLeft: 18,
    },
    name: {
      fontSize: 32,
      fontWeight: 900,
      textAlign: isMobile ? 'left' : 'right',
      lineHeight: 1.2,
      whiteSpace: 'nowrap',
    },
    role: {
      fontSize: 18,
      marginBottom: 10,
      fontWeight: 700,
      textAlign: isMobile ? 'left' : 'right',
      whiteSpace: 'nowrap',
    },
    text: {
      fontSize: 18,
      lineHeight: 1.4,
      display: 'list-item',
      listStyleType: 'disc',
      listStylePosition: 'outside',
      marginLeft: 20,
      paddingLeft: 0,
    },
    dates: {
      color: '#777',
      fontSize: 14,
    },
  }import { Tag } from '@/components/Tag'

export const CVItem = ({ name, style, dates, role, texts, tags }: any) => {
  const isMobile = false; // This should ideally be determined dynamically

  return (
    <div className={`mt-12 ${isMobile ? 'p-0' : 'pl-0 pr-0 pb-2.5'} ${isMobile ? '' : 'grid grid-cols-2'}`}>
      <div className={`border-r ${isMobile ? 'border-b' : 'border-r'} border-pink-600 ${isMobile ? 'pb-2.5' : 'pr-5'} ${isMobile ? 'w-full' : 'w-50'} ${isMobile ? 'justify-start' : 'justify-end'} ${isMobile ? 'mb-5' : 'mb-0'}`}>
        {/* Header content goes here */}
      </div>
      <div className="flex-3 ml-5">
        {/* Info content goes here */}
      </div>
      <ul className="list-disc">
        {/* List items go here */}
      </ul>
      <div className="ml-4.5 mt-2.5 flex flex-row flex-wrap">
        {/* Tags content goes here */}
      </div>
      <div className={`text-4xl font-extrabold ${isMobile ? 'text-left' : 'text-right'} leading-snug whitespace-nowrap`}>
        {/* Name content goes here */}
      </div>
      <div className="mb-2.5 text-xl">
        {/* Role content goes here */}
      </div>
    </div>
  );
};

  return (
    <div style={{ ...styles.item, ...style }}>
      <div style={styles.header}>
        <h2 style={styles.name}>{name}</h2>
        <h3 style={styles.role}>{role}</h3>
        <div style={styles.dates}>{dates}</div>
      </div>
      <div style={styles.info}>
        <ul style={styles.list}>
          {texts.map((text) => (
            <li
              key={text}
              style={styles.text}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: text }}
            />
          ))}
        </ul>
        <div style={styles.tags}>
          {tags &&
            tags.map((text) => (
              <Tag
                key={text}
                text={text}
                small
                style={{ margin: 2, backgroundColor: '#ccc', color: '#333' }}
              />
            ))}
        </div>
      </div>
    </div>
  )
}
