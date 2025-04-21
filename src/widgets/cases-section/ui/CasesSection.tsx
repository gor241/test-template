import React from 'react';

interface CaseItemProps {
  title: string;
  imageUrl: string;
  backgroundColor?: string;
  maskWidth?: number;
}

const CaseItem: React.FC<CaseItemProps> = ({
  title,
  imageUrl,
  backgroundColor,
  maskWidth = 281,
}) => {
  return (
    <div className="case-item" style={{ position: 'relative', width: maskWidth, height: 321 }}>
      <div
        className="case-image"
        style={{
          width: maskWidth,
          height: 281,
          overflow: 'hidden',
          backgroundColor: backgroundColor || 'transparent',
        }}
      >
        <img
          src={imageUrl}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
      <div
        className="case-title"
        style={{
          marginTop: 15,
          fontSize: 18,
          fontWeight: 400,
          color: '#000000',
        }}
      >
        {title}
      </div>
    </div>
  );
};

export const CasesSection: React.FC = () => {
  const cases = [
    {
      id: 'rebranding',
      title: 'ребрендинг',
      imageUrl: '/images/cases/rebranding.jpg',
    },
    {
      id: 'marketing',
      title: 'маркетинг',
      imageUrl: '/images/cases/marketing.jpg',
    },
    {
      id: 'lawyer',
      title: 'юрист',
      imageUrl: '/images/cases/lawyer.jpg',
    },
    {
      id: 'startup',
      title: 'стартап',
      imageUrl: '/images/cases/startup.jpg',
      maskWidth: 165,
      backgroundColor: 'rgba(196, 196, 196, 1)',
    },
  ];

  return (
    <section
      className="cases"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: 1358,
        height: 321,
        margin: '0 auto',
        paddingLeft: 82,
        marginTop: 183, // 871 - 688
      }}
    >
      {/* Вертикальный черный прямоугольник */}
      <div
        className="vertical-rectangle"
        style={{
          position: 'absolute',
          top: 5,
          left: 50,
          width: 7,
          height: 90,
          backgroundColor: '#000000',
        }}
      />

      {/* Заголовок (вертикальный текст) */}
      <div
        className="vertical-title"
        style={{
          position: 'absolute',
          top: 222,
          left: 0,
          width: 41,
          height: 217,
          fontSize: 30,
          fontWeight: 600,
          transform: 'rotate(-90deg)',
          transformOrigin: 'top left',
          whiteSpace: 'nowrap',
        }}
      >
        amazing cases
      </div>

      {/* Контейнер для кейсов */}
      <div
        className="cases-container"
        style={{
          display: 'flex',
          gap: 67,
          marginLeft: 149,
        }}
      >
        {cases.map(caseItem => (
          <CaseItem
            key={caseItem.id}
            title={caseItem.title}
            imageUrl={caseItem.imageUrl}
            backgroundColor={caseItem.backgroundColor}
            maskWidth={caseItem.maskWidth}
          />
        ))}
      </div>
    </section>
  );
};

export default CasesSection;
