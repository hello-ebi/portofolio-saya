import React from 'react';


function Portfolio() {
  const projects = [
    { id: 1, title: 'Project 1', description: 'A web app built with React and Tailwind.', link: '#', image: 'https://images.unsplash.com/photo-1682687220640-9d3b11ca30e5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, title: 'Project 2', description: 'E-commerce platform with modern UI.', link: '#', image: 'https://images.unsplash.com/photo-1682687220640-9d3b11ca30e5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 3, title: 'Project 3', description: 'Portfolio website for a client.', link: '#', image: 'https://images.unsplash.com/photo-1682687220640-9d3b11ca30e5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];

  return (
    <section id="portfolio" className="py-16 bg-gray-100 h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <a href={project.link} className="text-blue-600 hover:underline">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;