import axiosServerSide from "@/Api/axiosServerSide";
import Blog from "@/components/index/Blog";
import Brands from "@/components/index/Brands";
import Category from "@/components/index/Category";
import Hero from "@/components/index/Hero";
import Products from "@/components/index/Products";
import Banners from "@/components/index/Banners";
import Statistic from "@/components/index/Statistic";


export const dynamic = "force-dynamic"; 

async function getLayout() {
  try {
    let response = await axiosServerSide.post("Site/Index/");
    return response.data || {}; 
  } catch (error) {
    console.error("Error fetching layout data:", error);
    return {}; 
  }
}

export default async function Home() {
  const index = await getLayout();
  console.log(index);
  
  return (

    <main>
    <Hero data={index.sliders || {}} />
    <Category data={index.category || {}}/>
    <Products title={index.adv_site[0].categoryName} data={index.adv_site[0]} abstract="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sunt est eaque rerum ea perspiciatis quibusdam consequuntur!"/>
    <Banners data={index.banners || {}}/>
        <Products title="Second Category" data={{}} abstract="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sunt est eaque rerum ea perspiciatis quibusdam consequuntur!"/>
        <Statistic data={index.statistics || {}}/>
        <Products title="Third Category" data={{}} abstract="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sunt est eaque rerum ea perspiciatis quibusdam consequuntur!"/>
        <Brands data={index.brands || []}/>
        <Blog data={index.blogs || {} } title="‌‌Blogs" abstract="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sunt est eaque rerum ea perspiciatis quibusdam consequuntur!"/>

     </main>

  );
}
