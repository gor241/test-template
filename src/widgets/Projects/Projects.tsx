import React from 'react';
import styles from './Projects.module.scss';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Портфолио на React',
    description:
      'Современное одностраничное приложение портфолио, созданное с использованием React и TypeScript.',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3',
    tags: ['React', 'TypeScript', 'SCSS'],
    link: 'https://github.com/username/portfolio',
  },
  {
    id: 2,
    title: 'Трекер задач',
    description:
      'Веб-приложение для управления проектами и задачами с функциями drag-and-drop и командной работы.',
    image:
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3',
    tags: ['React', 'Redux', 'Firebase'],
    link: 'https://github.com/username/task-tracker',
  },
  {
    id: 3,
    title: 'Погодное приложение',
    description:
      'Приложение для просмотра прогноза погоды в любой точке мира с использованием OpenWeather API.',
    image:
      'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3',
    tags: ['React', 'API', 'CSS'],
    link: 'https://github.com/username/weather-app',
  },
  {
    id: 4,
    title: 'Блог на NextJS',
    description:
      'Полнофункциональная блог-платформа с SEO-оптимизацией и системой управления контентом.',
    image:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3',
    tags: ['Next.js', 'MDX', 'Tailwind'],
    link: 'https://github.com/username/next-blog',
  },
  {
    id: 5,
    title: 'Музыкальный плеер',
    description:
      'Веб-приложение для прослушивания музыки с функциями создания плейлистов и управления библиотекой.',
    image:
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3',
    tags: ['React', 'Web Audio API', 'SCSS'],
    link: 'https://github.com/username/music-player',
  },
  {
    id: 6,
    title: 'Приложение для заметок',
    description:
      'Минималистичное приложение для создания и хранения заметок с поддержкой Markdown.',
    image:
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3',
    tags: ['React', 'LocalStorage', 'Markdown'],
    link: 'https://github.com/username/notes-app',
  },
];

export const Projects: React.FC = () => {
  const [displayCount, setDisplayCount] = React.useState(6);
  const hasMoreProjects = projectsData.length > displayCount;

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + 3);
  };

  return (
    <section className={styles.projects} id="projects">
      <div className="container">
        <h2 className={styles.projects__title}>Мои проекты</h2>

        <div className={styles.projects__grid}>
          {projectsData.slice(0, displayCount).map(project => (
            <div key={project.id} className={styles.projects__card}>
              <img src={project.image} alt={project.title} className={styles.projects__image} />
              <div className={styles.projects__content}>
                <h3 className={styles.projects__card_title}>{project.title}</h3>
                <p className={styles.projects__description}>{project.description}</p>
                <div className={styles.projects__tags}>
                  {project.tags.map(tag => (
                    <span key={tag} className={styles.projects__tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projects__link}
                >
                  Посмотреть проект <FaExternalLinkAlt size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {hasMoreProjects && (
          <div className={styles.projects__more}>
            <button onClick={handleLoadMore} className={styles.projects__more_button}>
              Загрузить ещё
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
