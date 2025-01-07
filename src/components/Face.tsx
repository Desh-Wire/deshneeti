
import { EXAMPLES } from '@/lib/example'
import HomePageItemSmall from './HomePageItemSmall';
import JustInItem from './JustInItem';
import HomePageItemBig from './HomePageItemBig';
import HomePageItemLong from './HomePageItemLong';
import { Clock, Radio } from 'lucide-react';
import { MyClock } from './Clock';
import Divider from './Divider';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { News } from '@/lib/utils';

const Face = ({ router, news }: { router: AppRouterInstance, news: News[] }) => {

    const editorsPick = news.filter((item) => item.tags.includes('Editors Choice')).slice(0, Math.min(3, news.length));
    const center = news.slice(0, 1);
    const centerBelow = news.slice(1, 3);
    const justIn = news.slice(3);

    if (news === undefined) {
        return (
            <div className='flex items-center justify-center h-screen'>
                <div className='text-3xl font-semibold text-gray-700'>
                    Loading...
                </div>
            </div>
        )
    }

    return (
        <>
            {/* Top level div */}
            <div className='flex flex-row justify-between gap-x-4'>
                {/* Editors Pick */}
                <div className='w-[25%] flex flex-col justify-between'>
                    <div className='flex flex-col gap-y-8'>
                        <p className='font-extrabold text-2xl capitalize'>
                            EDITOR'S PICK
                        </p>
                        <div className='w-full py-4 bg-[#ece2c8] flex flex-row items-center justify-between rounded-md px-10  border-red-600 border '>
                            <Clock className='text-lg font-bold' />
                            <MyClock />
                        </div>
                        <Divider />
                    </div>
                    {/* Items */}
                    {editorsPick.length === 0 ? <div className='flex items-center justify-center h-96'> No News found for editors Pick </div> :
                        <div className='flex flex-col gap-y-2 justify-between'>
                            {
                                editorsPick.map((item, index) => (
                                    <div className='flex flex-col gap-y-2' key={index}>
                                        <HomePageItemSmall heading={item.headingEng ?? item.headingHin ?? item.headingUrd ?? ""} category={item.category.name} readtime={item.readTime.toString()} author={item.author.name} image={item.pictureUrl ?? ""} router={router} uuid={item.id} />
                                        <Divider />
                                    </div>
                                ))
                            }
                        </div>}
                </div>
                {/* Center div */}
                <div className='flex flex-col h-full items-center w-[60%]'>
                    {center.length === 0 ? <div className='flex items-center justify-center h-96'> No News found </div> :
                        <div className='w-full h-[60%]'>
                            <HomePageItemBig heading={center[0].headingEng ?? center[0].headingHin ?? center[0].headingUrd ?? ""} category={center[0].category.name} readtime={center[0].readTime.toString()} author={center[0].author.name} image={center[0].pictureUrl ?? ""} router={router} uuid={center[0].id} />
                        </div>}
                    <Divider />
                    {centerBelow.length === 0 ? <div className='flex items-center justify-center h-96'> No News found </div> :
                        <div className='h-[40%] w-full flex flex-col gap-y-2'>
                            {
                                centerBelow.map((item, index) => (
                                    <div className='flex flex-col gap-y-2' key={index}>
                                        <HomePageItemLong heading={item.headingEng ?? item.headingHin ?? item.headingUrd ?? ""} category={item.category.name} readtime={item.readTime.toString()} author={item.author.name} image={item.pictureUrl ?? ""} router={router} uuid={item.id} tagline={item.taglineEng ?? item.taglineHin ?? item.taglineUrd ?? ""} />
                                        <Divider />
                                    </div>
                                ))
                            }
                        </div>}
                </div>
                {/* Just in */}
                <div className='flex flex-col items-center gap-y-2 w-[20%]'>
                    <div className='flex flex-row items-center gap-x-2 w-full'>
                        <Radio className='text-lg text-red-600' />
                        <p className='font-extrabold text-2xl capitalize'>
                            JUST IN
                        </p>
                    </div>
                    {justIn.length === 0 ? <div className='flex items-center justify-center h-96'> No News found </div> :
                        <div className='w-full flex flex-col gap-y-2'>
                            {
                                justIn.map((item, index) => (
                                    <div key={index} className='flex flex-col gap-y-2'>
                                        <JustInItem key={index} category={item.category.name} title={item.headingEng ?? item.headingUrd ?? item.headingHin ?? ""} router={router} uuid={item.id} />
                                        <Divider />
                                    </div>
                                ))
                            }
                        </div>}

                </div>
            </div>
        </>
    )
}

export default Face