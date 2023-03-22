import Image from "next/legacy/image";

export default function ProjectItem({data}) {

    const title = data.properties.Title.title[0].plain_text
    const youtube = data.properties.Youtube.url
    const description = data.properties.Text.rich_text[0].plain_text
    const imgSrc = data.cover.file.url
    const tags = data.properties.Tag.multi_select
    const startDate = data.properties.날짜.date.start
    const endDate = data.properties.날짜.date.end 
    const url = data.properties.URL.url

    return(
        <div className="project-card">
            <div className="h-100">
                <Image
                    className="rounded-t-xl"
                    src={imgSrc}
                    alt="img"
                    width="100"
                    height="50"
                    layout="responsive"
                    objectFit="cover"
                    quality={100}
                    priority
                />
            </div>
           
            <div className="p-4 flex flex-col">
                <h2 className="text-2xl font-bold">{title}</h2>
                <h3 className="mt-1 text-xl">
                    {startDate} ~ {endDate}
                </h3>
                <a className="mt-4 text-xl" href={youtube}>
                    {youtube ? '유튜브 바로가기' : ""} 
                </a>
                <p>{description}</p>

                <div className="flex items-start mt-2">
                    {tags.map((tag) => (
                        <h3 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" key={tag.id}>{tag.name}</h3>
                    ))}
                </div>
                <a className="mt-4 text-xl" href={url}>
                    {url ? 'URL 바로가기' : ""}
                </a>
            </div>

        </div>
    )
}