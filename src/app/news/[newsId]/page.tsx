'use client'

import React from 'react'
import { EXAMPLES } from '@/lib/example'
import { useParams } from 'next/navigation'
import { format, parse } from 'date-fns';
import { Twitter,Facebook,Instagram,Linkedin } from 'lucide-react';

const page = () => {

    const param = useParams()
    const newsId = param.newsId
    const news = EXAMPLES.find(item => item.uuid === newsId)

    return (
        <div className='w-[70%] flex flex-col gap-y-4'>

            {/* Category */}
            <div>
                <p className='text-red-600 uppercase tracking-widest mb-2'>
                    {news?.Category}
                </p>
            </div>

            {/* Heading/author/info */}
            <div>
                <p className='font-bold text-4xl leading-relaxed'>
                    {news?.Title}
                </p>
                <div className='flex flex-row gap-x-4'>
                    {/* Author */}
                    <div className='flex flex-row items-center'>
                        {/* <img src={news?.AuthorImage} alt={news?.Author} /> */}
                        <img 
                        src='/img/icons8-author-94.png' 
                        alt={news?.Author} 
                        className='object-cover cursor-pointer hover:scale-105 transition-transform rounded-full p-4 aspect-square h-16'
                        />
                        <div className='flex flex-col'>
                            <p className='tracking-tighter text-sm font-semibold'>
                                {news?.Author}
                            </p>
                            {/* 29/Nov/2024 | 5 min read */}
                            <p className='tracking-tighter text-sm'>
                                {news?.CreatedAt
                                    ? format(parse(news.CreatedAt, "yyyy-MM-dd HH:mm:ss", new Date()), "dd/MMM/yyyy")
                                    : "Date not available"}{" "}
                                | {news?.ReadTime || "Unknown"} min read
                            </p>
                        </div>
                    </div>
                    {/* Socials */}
                    <div className='flex flex-row items-center justify-between gap-x-2'>
                        <Twitter size={20} className='hover:text-red-600 cursor-pointer'/>
                        <Facebook size={20} className='hover:text-red-600 cursor-pointer'/>
                        <Instagram size={20} className='hover:text-red-600 cursor-pointer'/>
                        <Linkedin size={20} className='hover:text-red-600 cursor-pointer'/>
                    </div>
                </div>
            </div>

            {/* Tagline */}
            <div>
                <p className=' italic text-sm'>
                    {news?.Content}
                </p>
            </div>

            {/* content */}
            <div className='flex flex-col gap-y-4 p-4'>
                <img 
                src={news?.ImagePath}
                alt={news?.Title}
                className='w-full'
                />
                <div className=' text-base'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque illo, magnam perferendis ipsa natus exercitationem dolorem temporibus? Quis ut vitae dolorem facilis consectetur ipsa qui veniam quos et itaque dolores consequuntur ex praesentium libero, voluptatum illo animi? Blanditiis earum voluptas modi autem, eligendi dolores dolorum temporibus, impedit tempore commodi vero facere ullam, assumenda ducimus? Aliquid illum provident, assumenda rem, voluptate voluptas illo odit dignissimos non ad velit quia placeat nihil optio laboriosam, dicta commodi? Similique repudiandae totam vitae commodi maiores necessitatibus quaerat earum pariatur! Totam dolore libero ullam aperiam unde recusandae maxime, voluptas sunt enim fugit nihil fugiat, incidunt amet eum officiis minima maiores veniam quae voluptates cupiditate, laudantium debitis quasi molestias hic. Culpa, atque! Hic culpa non id temporibus inventore dolore nobis perspiciatis repudiandae ut natus vitae possimus enim quaerat laudantium, nulla libero tempora asperiores explicabo est dicta soluta. Nulla incidunt iusto quidem tempore culpa. Modi, aperiam iure? Eligendi illum reiciendis illo eveniet maiores ipsa facilis tempora a, pariatur magni! Sit iste nihil culpa obcaecati quos officia eius tempore sunt rerum similique fuga tempora, esse id. Aspernatur, cumque. Voluptatem eum, repudiandae voluptates, nemo beatae mollitia commodi omnis doloremque corrupti assumenda, officia rerum quae! Consectetur hic deleniti veritatis consequatur obcaecati aliquid mollitia voluptatem adipisci, vel assumenda reiciendis ipsum modi at voluptas eligendi atque neque fugiat maiores ad doloribus incidunt quaerat odit est? Dolores maxime deserunt esse? Optio ullam qui quibusdam rerum non impedit dolor sapiente reiciendis, voluptate aliquam accusamus ea voluptates, maxime nihil minus earum, magni cupiditate veniam? Beatae officiis eaque illo dolores minus laboriosam voluptates reiciendis nobis animi autem commodi nisi, iste, enim quaerat inventore esse ex odit hic totam nulla magnam? Natus illum sapiente dolore alias ipsam. Quaerat sint dolor saepe exercitationem rerum totam eum expedita esse eos impedit distinctio, tempore eius nulla qui, similique quis nesciunt ipsum! Id veritatis nostrum dolorem eveniet, officia accusamus, deserunt blanditiis vero explicabo quisquam beatae nulla nihil possimus est, quaerat voluptate exercitationem sequi optio! Dignissimos, deleniti aliquam! Quia debitis aspernatur velit eaque! Officia maxime omnis dolore eligendi veritatis deserunt repudiandae ut qui assumenda nemo similique ea harum inventore fugiat molestias saepe libero at recusandae, ratione maiores. Voluptate reiciendis vero fugit quisquam corrupti deserunt magnam porro animi dolorum tempore. Facilis obcaecati eius reprehenderit assumenda iste voluptatibus maxime pariatur ut voluptatem, iusto fugit voluptas necessitatibus, a eligendi officiis ipsum. Cum asperiores est iste natus molestiae eveniet modi aliquid quisquam, quasi vero aliquam similique id magnam aperiam, ducimus nesciunt labore non exercitationem ut quae! Deserunt, laboriosam beatae eum fuga quidem provident dolorem natus consequuntur asperiores aliquam at voluptatem possimus libero accusantium modi, vero ea eius reiciendis similique omnis qui! Voluptas inventore nostrum eos architecto consequatur odit tempora eligendi rem reprehenderit sed unde facilis dolor sequi impedit libero blanditiis deserunt, non suscipit rerum animi adipisci distinctio earum ipsa? Veniam vel cumque id necessitatibus obcaecati sed voluptatem, magni voluptates dolores quaerat perspiciatis sunt illo corporis excepturi at laborum, corrupti nihil accusantium quisquam iusto porro? Ea repellat nobis obcaecati, sapiente est praesentium soluta illum animi aliquid, laudantium amet!
                </div>
            </div>

        </div>
    )
}

export default page