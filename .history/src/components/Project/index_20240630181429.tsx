import { Button } from '@/components/Button'
import { Tag } from '@/components/Tag'
import { Project } from "@/media/projects"
import Image from 'next/image'

export const Project = ({ project }: { project: Project }) => {
  return (
    <div className="overflow-hidden rounded-lg bg-black bg-opacity-20 text-center shadow-lg">
      <div className="flex h-[200px] w-full items-center justify-center bg-black">
        {project.video ? (
          <iframe
            title="video"
            className="h-full w-full"
            src={project.video}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <Image
            src={project.logo.src}
            alt=""
            width={200}
            height={200}
            className="m-5 max-h-[100px] w-auto max-w-[250px]"
          />
        )}
      </div>
      <div className="flex-1 p-5">
        <div className="mb-5 flex flex-row flex-wrap justify-center">
          {project.tags.map((tag) => (
            <Tag key={`${project.name}Tag${tag}`} text={tag} variant="brand" />
          ))}
        </div>
        <h2 className="text-5xl font-bold leading-snug text-white">
          {project.tagLine}
        </h2>
      </div>
      <div className="flex flex-row flex-wrap justify-between p-4 pt-0">
        {project.buttons &&
          project.buttons.map((button) => (
            <Button
              key={`${project.name}Button${button.text}`}
              text={button.text || 'Visit'}
              href={button.href}
              target="_blank"
              rel="noopener noreferrer"
              extraClasses=""="m-1 flex-1"
            />
          ))}
      </div>
    </div>
  )
}
