export const downloadCV = () => {
    const cvContent = `
SALAUDEEN AFEEZ ABOLADE
Full Stack Web Developer | Founder of AdeCode</>
Lagos, Nigeria | afaceabolade@gmail.com | 09078083403

SUMMARY
Visionary Full Stack Developer with 4+ years of experience architecting high-end digital experiences.
Expert in React, Node.js, and modern UI/UX principles.

TECHNICAL SKILLS
- Frontend: React, Vite, Next.js, Tailwind CSS, Framer Motion
- Backend: Node.js, Express, MongoDB, Firebase
- Others: RESTful APIs, Git, SEO, Project Management, UI/UX Design

SELECTED PROJECTS
1. BoostNaija: Social media automation platform helping 1000+ users.
2. BiggestLogs: Secure marketplace for social media accounts.
3. Bridge of Impact: NGO donation platform for global scaling.

EXPERIENCE
Full Stack Developer | AdeCode
- Delivered 20+ professional projects for global clients.
- Optimized website performances reducing load times by 60%.

EDUCATION
- Full Stack Web Development Training | Kwara Tech
- B.Sc. Human Kinetics | Federal University Oye Ekiti (FUOYE)
    `;
    const element = document.createElement("a");
    const file = new Blob([cvContent], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "Salaudeen_Afeez_CV.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
};
