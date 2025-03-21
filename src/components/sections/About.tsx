import {RevealOnScroll} from "../RevealOnScroll.tsx";

export const About = () => {

    const frontendSkills = ["React","Typescript","TailwindCSS"];
    const backendSkills = ["Java","Python","MySQL","Prisma"];

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6 ">
                            I am a well-rounded developer with the expertise to create high-performing
                            applications that are both functional and efficient. Below are the skills and technologies
                            I use to deliver my high quality work.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((skill,key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                                    ">
                                        {skill}
                                    </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((skill,key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                                    ">
                                        {skill}
                                    </span>
                                    ))}
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Education</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-3">
                                <li>
                                    <strong> Graduate Diploma in Software Engineering</strong> - Institute of Java and Software Engineering
                                </li>
                                <li>
                                    Relevant Coursework : Web Development, Mobile Development, API Development
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                            <p className="text-gray-300">Over a year of experience in building applications and continuously honing my skills.</p>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>


        </section>
    )
}