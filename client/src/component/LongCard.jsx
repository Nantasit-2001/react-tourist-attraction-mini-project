import { Link } from 'lucide-react';

function LongCard ({title,eid,url,description,photos,tags,onTagClick}){
    
    function CopyToClipboard(text) {
        console.log(text)
          navigator.clipboard.writeText(text)
            .then(() => {
              alert(`คัดลอกลิ้งค์ ${text} แล้ว`);
            })
            .catch((error) => {
              console.error("คัดลอกข้อความไม่สำเร็จ", error);
            });
    }      
    
    function tageToInput (text){
            onTagClick(text,true);
        set
    }
    return(
        <div className="space-y-6 w-auto md:w-[800px] relative lg:w-[1000px]">
            <div className="bg-white p-4 rounded-lg  flex gap-4 ">{/*shadow-lg*/}    
                <img src={photos[0]} className="w-[250px] h-40 object-cover overflow-hidden rounded-lg lg:h-44" alt={title} />
            
                <div>
                    <a href={url} target="_blank" className="text-base font-semibold lg:text-lg">{title}</a>
                    <p className="text-gray-500 text-xs lg:text-base">{description.slice(0, 100)+" ..."}</p>
                    <a href={url} target="_blank" className="text-blue-500 text-xs underline hover:no-underline lg:text-sm">อ่านต่อ</a>
                    <div className="text-gray-500 text-xs flex gap-2 lg:text-sm">
                        <h3 className="">หมวด</h3>
                            {tags.filter((_, index) => index < tags.length - 2)
                                 .map((cata, index) => (
                                    <h3 key={index} className="underline decoration-1 hover:text-black hover:cursor-pointer"
                                        onClick={()=>tageToInput(cata)}>{cata}</h3>
                            ))}
                        <h3>และ</h3>
                        <h3 className="underline decoration-1 hover:text-black hover:cursor-pointer" onClick={()=>tageToInput(tags[tags.length-1])} >{tags[tags.length-1]}</h3>
                    </div>
                    
                    <div className="flex gap-2 mt-2 ">
                        {photos.filter((_,index)=>index>0).map((urlImage,index)=><img src={urlImage} key={index} 
                                className="w-16 h-16 object-cover rounded-lg " alt={"หมวด "+index}/>)}
                        <div className="absolute bottom-2 right-5 lg:right-10 "
                            onClick={()=>CopyToClipboard(url)}><Link className='w-12 h-12 border-2 p-2 border-blue-500 rounded-[50px] text-blue-500 hover:border-black hover:text-black hover:cursor-pointer lg:w-14 lg:h-14 ' size={45}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LongCard
