import "@/assets/input.css";
import axiosServerSide from "@/Api/axiosServerSide";
import { Toaster } from "react-hot-toast";
import ClientProvider from "./ClientProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: 'looppay',
  description: 'با پکیج‌های هوش مصنوعی ما، زمان رو ذخیره کن، هوشمندتر کار کن! ابزارهایی کاربردی برای تولید متن، تصویر، دیتا آنالیز و بیشتر.',
  keywords: ' هوش مصنوعی, برنامه نویسی, توسعه نرم‌افزار, اپلیکیشن موبایل,  looppay',
  openGraph: {
    title: 'looppay',
    description: 'با پکیج‌های هوش مصنوعی ما، زمان رو ذخیره کن، هوشمندتر کار کن! ابزارهایی کاربردی برای تولید متن، تصویر، دیتا آنالیز و بیشتر.',
    url: 'https://your-website.com', 
    type: 'website',
    image: 'https://your-website.com/og-image.jpg',  
    site_name: 'looppay',
  },
  viewport: 'width=device-width, initial-scale=1.0',
  language: 'fa',  
};

async function getData() {
  const res = await axiosServerSide.post(
    "Main/GetSiteInfo/",
    { url: "varna" },
  );

  return res.data;
}

export default async function RootLayout({ children }) {

  const data = await getData();
  console.log(data);
  

  return (
    <html>
      <body>
        <Toaster />
        <Header {...data} />
        <ClientProvider data={data}>
          {children}
        </ClientProvider>
        <Footer
          footerText={data.footerText}
          appInfo={data.appInfo}
          FooterMenu1={data.FooterMenu1}
                    FooterMenu2={data.FooterMenu2}

          contactDetail={data.contactDetail}
        />
      </body>
    </html>
  );
}
