import Animation from '../../components/home/animation';
import Link from 'next/link';

export default function Hero() {
    return(
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">JooSpace
            </h1>
            <p className="mb-8 leading-relaxed">안녕하세요. 위 사이트는 <b>Next.js , Notion Api , LottieFiles</b> 를 사용하여 만든 포폴사이트 입니다.</p>
            <div className="flex justify-center">
            <Link href="/projects">
                <button className="btn-project inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">프로젝트 보러가기</button>
            </Link>

            </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation/>
            </div>
        </>
    ) 
}