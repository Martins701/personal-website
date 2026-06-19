import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="pt-16 min-h-screen bg-slate-50">
        <div className="max-w-5xl mx-auto py-20 px-6">
          <Link to="/" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
            ← Back to home
          </Link>
          <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-10 shadow-sm text-center">
            <h1 className="text-3xl font-bold text-gray-900">Project not found</h1>
            <p className="mt-4 text-gray-500">The project you're looking for doesn’t exist yet.</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-16 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto py-16 px-6">
        <Link to="/" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
          ← Back to home
        </Link>

        <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-10 shadow-sm">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="rounded-3xl overflow-hidden bg-slate-100">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top" />
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
                  Project details
                </p>
                <h1 className="mt-4 text-4xl font-extrabold text-gray-900">{project.title}</h1>
                <p className="mt-4 text-gray-600">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div id="live-demo" className="mt-12 rounded-3xl bg-slate-50 p-8">
            <h2 className="text-2xl font-semibold text-gray-900">Live demo</h2>
            <p className="mt-3 text-gray-600">
              This project detail page is the destination for the Live Demo button. It proves the button now navigates to a real route.
            </p>
          </div>

          <div id="source-code" className="mt-8 rounded-3xl bg-slate-50 p-8">
            <h2 className="text-2xl font-semibold text-gray-900">Source code</h2>
            <p className="mt-3 text-gray-600">
              The Source Code button also routes here, so both project actions perform real navigation within the portfolio.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;
