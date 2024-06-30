import { Button } from '@/components/Button'
import { Tag } from '@/components/Tag'

export const Project = ({ project }: { project: any }) => {
  return (
    <div className="overflow-hidden rounded-lg bg-black bg-opacity-20 text-center shadow-lg">
      <div className="h-50 flex w-full items-center justify-center bg-black">
        {project.video ? (
          <iframe
            title="video"
            className="h-full w-full"
            src={project.video}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <img
            src={project.logo.src}
            alt=""
            className="max-h-25 max-w-62 m-5"
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
        {project.text && (
          <h3 className="text-xl leading-snug text-white">{project.text}</h3>
        )}
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
              className="m-1 flex-1"
            />
          ))}
      </div>
    </div>
  )
}
