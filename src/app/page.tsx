import cvData from '@/lib/cv.json';
import { TechCarousel } from '@/components/ui/tech-carousel';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export default function Home() {
  return (
    <div className='container mx-auto px-4 py-8 max-w-screen-md bg-background text-foreground'>
      <section id='hero' className='pt-10 md:pb-20'>
        <h1 className='fluid-text-3xl font-extrabold tracking-tight mb-4 text-primary'>{cvData.name}</h1>
        <p className='fluid-text-2xl text-muted-foreground mb-8'>{cvData.title}</p>
      </section>
      <section id='about' className='pb-10'>
        <h2 className='fluid-text-2xl font-bold mb-8 text-primary'>About Me</h2>
        <Card className='border-none shadow-none'>
          <CardHeader>
            <CardTitle className='text-2xl'>{cvData.teamwork.split('.')[0]}</CardTitle>
            <CardDescription className='text-xl'>{cvData.teamwork.split('.')[1]}</CardDescription>
          </CardHeader>
          <CardContent>
            {cvData.aboutMe.map((section, index) => (
              <div key={index} className='mb-4'>
                <h3 className='fluid-text-xl font-bold mb-2'>{section.sectionTitle}</h3>
                {section.content.split('.').map((sentence, index) => (
                  <p key={index} className='text-justify indent-2'>
                    {sentence.trim()}.
                  </p>
                ))}
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
      <section id='skills' className='pb-20'>
        <h2 className='fluid-text-2xl font-bold mb-8 text-primary'>Skills</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
          <Card>
            <CardHeader>
              <CardTitle className='text-2xl'>Frontend</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className='pl-5 space-y-2'>
                {cvData.skills.frontend.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className='text-2xl'>Backend</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className='pl-5 space-y-2'>
                {cvData.skills.backend.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        <TechCarousel />
      </section>

      <section id='experience' className='pb-20'>
        <h2 className='fluid-text-2xl font-bold mb-8 text-primary'>Experience</h2>
        {cvData.experience.map((exp, index) => (
          <Card className='mb-8' key={index}>
            <CardHeader>
              <CardTitle className='text-3xl'>{exp.position}</CardTitle>
              <CardDescription className='text-2xl'>
                {exp.company}, {exp.location}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground mb-4'>{exp.period}</p>
              <p className='mb-4'>{exp.description}</p>
              <p className='font-semibold text-primary'>Tech Stack:</p>
              <ul className='pl-5 space-y-1'>
                {exp.techStack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
