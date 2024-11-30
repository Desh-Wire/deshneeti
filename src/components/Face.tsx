
import { EXAMPLES } from '@/lib/example'
import HomePageItemSmall from './HomePageItemSmall';
import JustInItem from './JustInItem';
import HomePageItemBig from './HomePageItemBig';
import HomePageItemLong from './HomePageItemLong';
import { Clock, Radio } from 'lucide-react';
import { MyClock } from './Clock';
import Divider from './Divider';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

const Face = ({ router }: { router: AppRouterInstance }) => {

    const editorsPick = EXAMPLES.sort(() => Math.random() - 0.5).slice(0, 3);
    const justIn = EXAMPLES.sort(() => Math.random() - 0.5).slice(0, 8);
    const center = EXAMPLES.sort(() => Math.random() - 0.5).slice(0, 1);
    const centerBelow = EXAMPLES.sort(() => Math.random() - 0.5).slice(1, 3);

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
                            <Clock className='text-lg font-bold'/>
                            <MyClock/>
                        </div>
                        <Divider/>
                    </div>
                    {/* Items */}
                    <div className='flex flex-col gap-y-2 justify-between'>
                        {
                            editorsPick.map((item, index) => (
                                <div className='flex flex-col gap-y-2' key={index}>
                                    <HomePageItemSmall heading={item.Title} category={item.Category} readtime={item.ReadTime.toString()} author={item.Author} image={item.ImagePath} router={router} />
                                    <Divider />
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* Center div */}
                <div className='flex flex-col h-full items-center w-[60%]'>
                    <div className='w-full h-[60%]'>
                        <HomePageItemBig heading={center[0].Title} category={center[0].Category} readtime={center[0].ReadTime.toString()} author={center[0].Author} image={center[0].ImagePath} router={router} />
                    </div>
                    <Divider />
                    <div className='h-[40%] w-full flex flex-col gap-y-2'>
                        {
                            centerBelow.map((item, index) => (
                                <div className='flex flex-col gap-y-2' key={index}>
                                    <HomePageItemLong heading={item.Title} category={item.Category} readtime={item.ReadTime.toString()} author={item.Author} image={item.ImagePath} router={router} />
                                    <Divider />
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* Just in */}
                <div className='flex flex-col items-center gap-y-2 w-[20%]'>
                    <div className='flex flex-row items-center gap-x-2 w-full'>
                        <Radio className='text-lg text-red-600' />
                        <p className='font-extrabold text-2xl capitalize'>
                            JUST IN
                        </p>
                    </div>
                    <div className='w-full flex flex-col gap-y-2'>
                        {
                            justIn.map((item, index) => (
                                <div key={index} className='flex flex-col gap-y-2'>
                                    <JustInItem key={index} category={item.Category} title={item.Title} router={router}/>
                                    <Divider />
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default Face