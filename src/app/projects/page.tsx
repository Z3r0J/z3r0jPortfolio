'use client';

import { useState, useMemo } from 'react';
import { FaGithub } from 'react-icons/fa';
import { myProjects } from '@/data/projects';
import ProjectCard from '@/components/Projects/Cards/ProjectCard';
import Footer from '@/components/Footer/Footer';
import Text from '@/i18n/Text';

type FilterKey = 'All' | 'React' | 'C' | 'API';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return myProjects;
    if (activeFilter === 'React') return myProjects.filter((p) => p.stack.includes('React'));
    if (activeFilter === 'C') return myProjects.filter((p) => p.stack.includes('C#'));
    if (activeFilter === 'API') return myProjects.filter((p) => p.stack.includes('API'));
    return myProjects;
  }, [activeFilter]);

  const filters: { key: FilterKey; label: string }[] = [
    { key: 'All', label: 'All' },
    { key: 'React', label: 'React' },
    { key: 'C', label: 'C#' },
    { key: 'API', label: 'WEB API' },
  ];

  return (
    <div className="container-fluid mt-4">
      <h2 className="text-white text-center fw-bolder">
        <Text tid="projects" />
      </h2>
      <div className="row d-flex justify-content-center">
        <div className="col-xl-6 col-lg-6 col-md-12">
          <div className="card bg-dark rounded-3">
            <div className="card-body d-inline-flex justify-content-center">
              {filters.map((f) => (
                <button
                  key={f.key}
                  className={
                    activeFilter === f.key
                      ? 'btn btn-success rounded-4 me-3 wh-100'
                      : 'btn text-white-50 border-0'
                  }
                  onClick={() => setActiveFilter(f.key)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4 d-flex ms-2 me-3 d-flex justify-content-center">
        {filteredProjects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
      <div className="row d-flex justify-content-center mt-3 mb-3">
        <div className="col-xl-4 col-lg-4 col-md-12">
          <a
            href="https://github.com/Z3r0J?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-100 fs-5"
          >
            <FaGithub /> More on Github
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
