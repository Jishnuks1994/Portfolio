import Footer from "./components/Footer";
import Header from "./components/Header";



export default function Home() {
  return (
    <main>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900 px-4 md:px-24 pt-8">
        {/* Hero Section */}
        <section
          id="home"
          className="h-[80vh] flex flex-col justify-center items-center text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Hi, I&#39;m Jishnu K S
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
            A full-stack developer passionate about building performant web and desktop apps using
            <span className="font-semibold text-black"> Next.js, SvelteKit, Node.js, Elysia, Tauri</span>, and <span className="font-semibold text-black">Tailwind CSS</span>.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 transition"
          >
            Let&#39;s Connect
          </a>
        </section>

        {/* About Section */}
        <section id="about" className="mb-16 px-4 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-500">About Me</h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            I&#39;m a self-taught full-stack developer with a background in Commerce (B.Com) who discovered a passion for programming and never looked back. With a year of hands-on experience, I’ve worked on real-world projects across platforms — from blazing-fast web applications to sleek cross-platform desktop apps.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
            I specialize in the <strong>MERN stack</strong> and love working with modern tools like <strong>Next.js</strong>, <strong>SvelteKit</strong>, <strong>Tauri</strong>, and <strong>Tailwind CSS</strong> to create clean, performant UIs that solve real problems. Every line of code I write is a step toward turning ideas into elegant digital experiences.
          </p>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 bg-white rounded-xl shadow-md my-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Experience</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-gray-800">
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Frontend Development</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>React, Next.js, SvelteKit</li>
                <li>Tailwind CSS for beautiful UIs</li>
                <li>Fully responsive layouts</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Backend & Desktop</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Node.js, Elysia</li>
                <li>MongoDB, PostgreSql</li>
                <li>Tauri for desktop apps</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: '🛒 E-commerce App',
                desc: 'Full-featured e-commerce platform built with Next.js and Tailwind.',
              },
              {
                name: '📸 Photo Management App',
                desc: 'A cross-platform app using SvelteKit + Tauri for image organizing & compression.',
              },
              {
                name: '🌐 My Portfolio',
                desc: 'You’re here! Built using Next.js with clean UI and responsive design.',
              },
            ].map((proj, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold mb-2">{proj.name}</h3>
                <p className="text-gray-600 text-sm">{proj.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-50 rounded-xl shadow-md mt-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
          <p className="text-center text-lg mb-4">
            Interested in working together or want to connect?
          </p>
          <p className="text-center text-blue-600 font-semibold text-xl">
            📧 jishnuks9421@gmail.com
          </p>
        </section>
      </main>

      <Footer />
    </main>
  );
}
