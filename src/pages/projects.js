import Layout from "../components/layout"
import { TOKEN, DATABASE_ID } from "../../config/key";
import Head from "next/head";
import ProjectItem from "@/components/projects/projectItem";

export default function Projects({projects}) {

    return (
        <Layout className="flex flex-col items-center justify-center min-h-screen px-5 py-24 mb-10">
            <Head>
                <title>My portfolio</title>
                <meta name="description" content="My portfolio"></meta>
            </Head>
            <h1 className="text-4xl font-bold sm:text-6xl text-center">
                총 프로젝트 :
                <span className="pl-4 text-blue-500"> {projects.results.length}</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 py-10 m-6 gap-8">
                {projects.results.map((data) => {
                    return (<ProjectItem key={data.id} data={data}></ProjectItem>)
                })} 
            </div>

        </Layout>
    )
}

// 빌드 타임에 호출
export async function getStaticProps() {

    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Notion-Version': '2022-06-28',
          'content-type': 'application/json',
          Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
            sorts: [
                {
                    "property" : "날짜",
                    "direction" : "ascending"
                }
            ],
            page_size: 100
        })
      };
      
    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
    const projects = await res.json()

    return {
        props: {projects}
    }
}