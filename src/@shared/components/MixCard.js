import React from 'react';
import { Link } from 'react-router-dom';

const MixCard = ({link='/'}) => {
    const des = `সিনেমার চরিত্রের জন্য তারকারা আলাদাভাবে নিজেদের তৈরি করেন। চরিত্রের জন্য কেউ ওজন বাড়ান তো কেউ ওজন কমান। অনেকে আবার ফাইট শেখেন, কারাতে শেখেন। কিন্তু সাংবাদিক চরিত্রের জন্য সাংবাদিকতা শিখতে শুনেছেন কি? হ্যাঁ, এমনটাই করেছেন বলিউড অভিনেত্রী ক্যাটরিনা কাইফ। ২০১৭ সালের ‘জগ্গা জাসুস’ ছবিতে সাংবাদিক চরিত্রে অভিনয় করেছেন ক্যাটরিনা কাইফ। এই চরিত্র দর্শকের সামনে ফুটিয়ে তুলতে সত্যিকারের সাংবাদিক হয়ে ওঠেন তিনি। এ জন্য তাঁকে কম পরিশ্রম করতে হয়নি। সম্প্রতি এক সাক্ষাৎকারে তিনি বলেছেন তাঁর সাংবাদিক হয়ে ওঠার গল্প।
    ক্যাটরিনা কাইফ ও রণবীর কাপুর
    ক্যাটরিনা কাইফ ও রণবীর কাপুরছবি:ইনস্টাগ্রাম
    সাংবাদিকতা কীভাবে করা হয়, তা জানতেন না ক্যাটরিনা। খুব দ্রুতই তাঁকে শিখতে হবে সাংবাদিকতা। এ কারণে তিনি দেখা করেন বেশ কয়েকজন বিখ্যাত সাংবাদিকের সঙ্গে। তাঁদের কাছ থেকে সাংবাদিকতার নিয়মনীতি শেখেন। তাঁরা কীভাবে কোনো একটি ঘটনা কাভার করেন, তথ্য সংগ্রহ করে সেটি আবার পাঠকের জন্য উপস্থাপন করেন—এসব বিষয় শিখে সাংবাদিকতার একটা ধারণা তৈরি করেন নিজের মধ্যে। এরপর একসময় তিনি নিজেকে সাংবাদিক ভাবা শুরু করে দেন।`

    return (
        <div className='mb-5 pb-5 custom-card custom-border-bottom'>
            <Link to={link}>
            <div>
                <div className="w-full">
                    <h2 className="text-md lg:text-xl font-semibold transition-all">শোয়েব মালিকের সঙ্গে সম্পর্ক নিয়ে মুখ খুললেন সেই পাকিস্তানি অভিনেত্রী</h2>
                    <div className='mt-3'>
                        <div className='flex gap-3'>
                            <div className='w-3/5 hidden md:block'>
                                <p className=''>
                                    {`${des.slice(0,45)}..`}
                                </p>
                            </div>
                            <figure className='w-full md:w-2/5  overflow-hidden'>
                                <img className='w-full transition-all' src="https://images.prothomalo.com/prothomalo-bangla%2F2022-08%2F8e74a724-2fed-4389-9cd1-e83b7236affe%2F124156345_2783608135249714_6184068585405836214_n.jpg?rect=0%2C0%2C720%2C405&auto=format%2Ccompress&fmt=webp&format=webp&w=900&dpr=1.0" alt="Movie"/>
                            </figure>
                        </div>
                        <div className="footer mt-4 text-gray-500">
                            <p>2 hours ago</p>
                        </div>
                     </div>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default MixCard;